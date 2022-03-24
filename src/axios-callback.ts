import {
    AxiosRequestCallback,
    AxiosErrorCallback,
    AxiosResponseCallback,
    GetValueByKeyInOpject,
} from './axios-callback.type'

import { AxiosRequestConfigs } from './index.types'

// axios  防抖
import { AxiosDebounce } from './axios-debounce'

// 创建防抖实例
const axiosDebounceInstance = new AxiosDebounce()

import axios from 'axios'

import { MaskLayer } from './create-masklayer'

// 遮罩层实例
const masklayerInstance = new MaskLayer()

import { Message } from './create-message'

// 创建message实例
const messageInstance = new Message()

/**
 * 通过key查找object里面的值
 * @param key object的属性
 * @param object 数据
 * @returns object[key]
 */
const getValueByKeyInOpject: GetValueByKeyInOpject = (key, object) => {
    if (!key) return object
    if (key.includes('.')) {
        const keys: Array<string> = key.split('.')
        let index = 0
        let temValue: any
        while (index < keys.length) {
            const key = keys[index]
            if (!temValue) {
                temValue = object[key]
            } else {
                temValue = temValue[key]
            }
            index++
        }
        return temValue
    } else {
        return object[key]
    }
}

/**
 * 请求前成功回调
 * @param config
 * @returns config
 */
export const axiosRequestCallback: AxiosRequestCallback = (config) => {
    const { needLoading, loadingText, axiosDebounce, contentType } = config

    // 先判断是否需要防抖 如果需要 需要防抖的话 如果接口被取消 就不再需要遮罩层
    if (axiosDebounce) {
        axiosDebounceInstance.handleRemoveAxiosQueue(config) // 在请求开始前，对之前的请求做检查取消操作
        axiosDebounceInstance.handleAddAxiosQueue(config) // 将当前请求添加到 pending 中
    }

    // 创建遮罩层
    if (needLoading || loadingText) {
        masklayerInstance.createLoading(config)
    }

    // 修改content-type
    if (contentType) {
        config.headers = {
            ...config.headers,
            'Content-Type': contentType,
        }
    }

    return config
}

/**
 * 请求前错误回调
 * @param error 错误信息
 * @returns error
 */
export const axiosRequestErrorCallback: AxiosErrorCallback = (error) => {
    console.log('请求前错误回调')

    return Promise.reject(error)
}

/**
 *
 * @param axiosResponse 请求返回成功回调
 * @returns
 */
export const axiosResponseCallback: AxiosResponseCallback = (axiosResponse) => {
    masklayerInstance.removeLoading(axiosResponse.config)
    const { successKey, successKeyValue, dataKey, messageKey } =
        axiosResponse.config as AxiosRequestConfigs

    if (successKey && successKeyValue) {
        const _successKeyValue = getValueByKeyInOpject(
            successKey,
            axiosResponse.data
        )

        if (_successKeyValue == successKeyValue) {
            if (dataKey) {
                return Promise.resolve(
                    getValueByKeyInOpject(dataKey, axiosResponse.data)
                )
            } else {
                return Promise.resolve(axiosResponse.data)
            }
        } else {
            if (messageKey) {
                const messageValue = getValueByKeyInOpject(
                    messageKey,
                    axiosResponse.data
                )

                messageInstance.createMessage({
                    message: `${messageValue}`,
                    type: 'error',
                    center: false,
                    duration: 2000,
                    showClose: false,
                })
                if (dataKey) {
                    return Promise.resolve(
                        getValueByKeyInOpject(dataKey, axiosResponse.data)
                    )
                } else {
                    return Promise.resolve(axiosResponse.data)
                }
                // 阻止代码往下运行
                // throw Promise.reject(messageValue)
            } else {
                messageInstance.createMessage({
                    message: axiosResponse.data.message,
                    type: 'error',
                    center: false,
                    duration: 2000,
                })
                if (dataKey) {
                    return Promise.resolve(
                        getValueByKeyInOpject(dataKey, axiosResponse.data)
                    )
                } else {
                    return Promise.resolve(axiosResponse.data)
                }
                // throw Promise.reject(axiosResponse.data.message)
            }
        }
    } else {
        return Promise.resolve(axiosResponse)
    }
}

/**
 *
 * @param axiosResponse 请求返回错误回调
 * @returns
 */
export const axiosResponseErrorCallback: AxiosErrorCallback = (error) => {
    if (axios.isCancel(error)) {
        messageInstance.createMessage({
            message: 'axios.isCancel',
            type: 'error',
            center: true,
        })
    } else {
        messageInstance.createMessage({
            message: error.message,
            type: 'error',
            center: true,
        })
    }
    return Promise.reject(error)
}
