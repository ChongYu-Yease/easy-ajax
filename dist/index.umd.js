!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("axios"),require("qs")):"function"==typeof define&&define.amd?define(["exports","axios","qs"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).commonAxios={},e.axios,e.qs)}(this,(function(e,n,o){"use strict";function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=t(n),s=t(o),r=function(){return r=Object.assign||function(e){for(var n,o=1,t=arguments.length;o<t;o++)for(var a in n=arguments[o])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},r.apply(this,arguments)};function i(e,n){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var t,a,s=o.call(e),r=[];try{for(;(void 0===n||n-- >0)&&!(t=s.next()).done;)r.push(t.value)}catch(e){a={error:e}}finally{try{t&&!t.done&&(o=s.return)&&o.call(s)}finally{if(a)throw a.error}}return r}var c=function(e,n){return function(o,t,a){return e[n](o,r({params:t},a)).catch((function(e){return e}))}},d=function(e,n){return function(o,t,a){return e[n](o,r(r({},t),a)).catch((function(e){return e}))}},u=function(e,n){return function(o,t,a){return e[n](o,t,r({},a)).catch((function(e){return e}))}},m=function(){var e=this;this.handleAddAxiosQueue=function(n){var o=[n.method,n.url,s.default.stringify(n.params),s.default.stringify(n.data)].join("&");n.cancelToken=n.cancelToken||new a.default.CancelToken((function(n){e.axiosQueue.has(o)||e.axiosQueue.set(o,n)}))},this.handleRemoveAxiosQueue=function(n){var o=[n.method,n.url,s.default.stringify(n.params),s.default.stringify(n.data)].join("&");e.axiosQueue.has(o)&&(e.axiosQueue.get(o)(o),e.axiosQueue.delete(o))},this.handleClearPending=function(){var n,o;try{for(var t=function(e){var n="function"==typeof Symbol&&Symbol.iterator,o=n&&e[n],t=0;if(o)return o.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&t>=e.length&&(e=void 0),{value:e&&e[t++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}(e.axiosQueue),a=t.next();!a.done;a=t.next()){var s=i(a.value,2),r=s[0];(0,s[1])(r)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(o=t.return)&&o.call(t)}finally{if(n)throw n.error}}e.axiosQueue.clear()},this.axiosQueue=new Map};function l(e,n){void 0===n&&(n={});var o=n.insertAt;if(e&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===o&&t.firstChild?t.insertBefore(a,t.firstChild):t.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}l("/* 遮罩层的样式 */\n.common-axios_mask-layer {\n    position: fixed;\n    top: 0;\n    left: 0;\n    /* display: none; */\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: auto;\n    outline: 0;\n    opacity: 0.5;\n    background-color: #000;\n}\n\n/* 消息的默认样式 */\n.modal-content {\n    min-width: 380px;\n    box-sizing: border-box;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #ebeef5;\n    position: fixed;\n    left: 50%;\n    top: 20px;\n    transform: translateX(-50%);\n    background-color: #edf2fc;\n    transition: opacity 0.3s, transform 0.4s, top 0.4s;\n    padding: 15px 15px 15px 20px;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n}\n\n.modal-content__info {\n    background-color: #f0f9eb;\n    border-color: #e1f3d8;\n}\n.modal-content__success {\n    background-color: #f0f9eb;\n    border-color: #e1f3d8;\n}\n.modal-content__warning {\n    background-color: #fdf6ec;\n    border-color: #faecd8;\n}\n.modal-content__danger {\n    background-color: #fef0f0;\n    border-color: #fde2e2;\n}\n/* 消息节点的默认样式 */\n.modal-content > .modal-body {\n    text-align: center;\n    font-size: 14px;\n}\n\n/* 消息节点的info样式 */\n.modal-content__info > .modal-body {\n    color: #909399;\n}\n/* 消息节点的success样式 */\n.modal-content__success > .modal-body {\n    color: #67c23a;\n}\n/* 消息节点的warning样式 */\n.modal-content__warning > .modal-body {\n    color: #e6a23c;\n}\n/* 消息节点的danger样式 */\n.modal-content__danger > .modal-body {\n    color: #f56c6c;\n}\n/* 遮罩层body */\n.common-axios_loading-box {\n    font-size: 14px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n/* 遮罩层文本节点样式 */\n.common-axios_text {\n    color: #409eff;\n}\n/* 遮罩层loading节点样式 */\n.common-axios_dotting {\n    color: #409eff;\n    display: inline-block;\n    min-width: 2px;\n    min-height: 2px;\n    box-shadow: 2px 0 currentColor, 6px 0 currentColor, 10px 0 currentColor;\n    -webkit-animation: dot 2s infinite step-start both;\n    animation: dot 2s infinite step-start both;\n    margin-left: 2px;\n}\n.common-axios_dotting:before {\n    content: '...';\n} /* IE8 */\n.common-axios_dotting::before {\n    content: '';\n}\n:root .common-axios_dotting {\n    margin-right: 8px;\n}\n\n@-webkit-keyframes dot {\n    25% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 2px 0 currentColor;\n    }\n    75% {\n        box-shadow: 2px 0 currentColor, 6px 0 currentColor;\n    }\n}\n@keyframes dot {\n    25% {\n        box-shadow: none;\n    }\n    50% {\n        box-shadow: 2px 0 currentColor;\n    }\n    75% {\n        box-shadow: 2px 0 currentColor, 6px 0 currentColor;\n    }\n}\n");var f=function(){function e(){var e=this;this.createMaskLayerDom=function(){var e=document.createElement("div");return e.classList.add("common-axios_mask-layer"),e},this.createTextDom=function(e){e=e||"拼命加载中";var n=document.createElement("span");return n.classList.add("common-axios_text"),n.textContent=e,n},this.createDottingDom=function(){var e=document.createElement("span");return e.classList.add("common-axios_dotting"),e},this.createLoadingBox=function(){var e=document.createElement("div");return e.classList.add("common-axios_loading-box"),e},this.createLoadingDom=function(n){var o=n.loadingText,t=e.createTextDom(o),a=e.createDottingDom(),s=e.createLoadingBox();s.appendChild(t),s.appendChild(a);var r=e.createMaskLayerDom();r.appendChild(s),document.body.appendChild(r)},this.removeLoadingDom=function(){setTimeout((function(){var e=document.querySelector(".common-axios_mask-layer");e&&document.body.removeChild(e)}))},this.createLoading=function(n){e.addMasklayer(n)},this.removeLoading=function(n){n?e.removeMasklayer(n):e.removeLoadingDom()},this.masklayerQueue=[]}return e.prototype.uploadMasklayerContent=function(e){document.querySelector(".common-axios_text").textContent=e.loadingText?e.loadingText:"拼命加载中"},e.prototype.uploadMasklayer=function(){var e=this.masklayerQueue[this.masklayerQueue.length-1];document.querySelector(".common-axios_mask-layer")?this.uploadMasklayerContent(e):this.createLoadingDom(e)},e.prototype.addMasklayer=function(e){this.masklayerQueue.push(e),this.uploadMasklayer()},e.prototype.removeMasklayer=function(e){var n=this.masklayerQueue.findIndex((function(n){return JSON.stringify(n)===JSON.stringify(e)}));this.masklayerQueue.splice(n,1),this.masklayerQueue.length?this.uploadMasklayer():this.removeLoadingDom()},e}();l(".common-axios_message {\n    min-width: 380px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #ebeef5;\n    background-color: #edf2fc;\n    transform: translateX(-50%);\n    position: fixed;\n    left: 50%;\n    top: 20px;\n    transition: opacity 0.3s, transform 0.4s, top 0.4s;\n    padding: 15px 15px 15px 20px;\n    display: flex;\n    align-items: center;\n    border-radius: 4px;\n    overflow: hidden;\n}\n\n.common-axios_message_center {\n    justify-content: center;\n}\n\n.common-axios_message .common-axios_message_content {\n    margin-left: 20px;\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    line-height: 1;\n}\n\n.common-axios_message .close-button {\n    position: absolute;\n    top: 50%;\n    right: 15px;\n    transform: translateY(-50%);\n    cursor: pointer;\n    /* background-image: url('./img/close.png'); */\n    width: 12px;\n    height: 12px;\n    background-size: 100% 100%;\n}\n\n.common-axios_message_leave {\n    opacity: 0;\n    transform: translate(-50%, -100%);\n}\n\n.common-axios_message_enter {\n    opacity: 1;\n    transform: translate(-50%, -100%);\n}\n\n.common-axios_message_info .common-axios_message_content {\n    color: #909399;\n}\n\n.common-axios_message_success {\n    background-color: #f0f9eb;\n    border-color: #e1f3d8;\n}\n\n.common-axios_message_success .common-axios_message_content {\n    color: #67c23c;\n}\n\n.common-axios_message_warning {\n    background-color: #fdf6ec;\n    border-color: #faecd8;\n}\n\n.common-axios_message_warning .common-axios_message_content {\n    color: #e6a23c;\n}\n\n.common-axios_message_error {\n    background-color: #fef0f0;\n    border-color: #fde2e2;\n}\n\n.common-axios_message_error .common-axios_message_content {\n    color: #f56c6c;\n}\n");var p=function(){function e(){this.message="",this.messageQueue=[],this.message="",this.messageType="",this.messageDuration=2e3,this.body=document.querySelector("body"),this.id=0}return e.prototype.setMessageType=function(e,n){var o="common-axios_message_"+(n=n||"info");e.classList.add(o)},e.prototype.createTextDom=function(e,n){var o=document.createElement("p");o.classList.add("common-axios_message_content"),o.textContent=n||this.message,e.appendChild(o)},e.prototype.removeMessage=function(e,n){var o=this,t=this.messageQueue.findIndex((function(e){return e.id===n}));this.messageQueue.splice(t,1),this.updateMessageDom(t),e.classList.add("common-axios_message_leave"),setTimeout((function(){o.body.removeChild(e)}),400)},e.prototype.createMessage=function(e){var n=this;"object"!=typeof e&&(e={message:"",messageType:"info",center:!1,messageDuration:2e3,showClose:!1});var o=document.createElement("div");o.classList.add("common-axios_message"),o.classList.add("common-axios_message_leave"),!0===e.center&&o.classList.add("common-axios_message_center");var t=this.id;this.messageQueue.push({id:t,messageDom:o}),this.setMessageType(o,e.messageType),this.createTextDom(o,e.message),this.setCurrentMessageDom(),this.body.appendChild(o),setTimeout((function(){o.classList.remove("common-axios_message_leave")}),100);var a=null;!0===e.showClose&&((a=document.createElement("i")).classList.add("close-button"),o.appendChild(a));var s,r=isNaN(Number(e.messageDuration))?this.messageDuration:Number(e.messageDuration);0!==r&&(s=setTimeout((function(){n.removeMessage(o,t)}),r)),!0===e.showClose&&a.addEventListener("click",(function(){n.removeMessage(o,t),-1!==t&&window.clearTimeout(s)})),this.id++},e.prototype.setCurrentMessageDom=function(){var e=this.messageQueue.length-1,n=this.messageQueue[e].messageDom;n.style.zIndex=""+(3e3+e),n.style.top=64*e+20+"px"},e.prototype.updateMessageDom=function(e){for(var n=e;n<this.messageQueue.length;n++){var o=this.messageQueue[n].messageDom;o.style.zIndex=""+(3e3+n),o.style.top=64*n+20+"px"}},e}(),g=new m,x=new f,h=new p,y=function(e,n){if(!e)return n;if(e.includes(".")){for(var o=e.split("."),t=0,a=void 0;t<o.length;){var s=o[t];a=a?a[s]:n[s],t++}return a}return n[e]};e.createAxios=function(e){var n,o=(n=e,a.default.create(r(r({},n),{withCredentials:!n||void 0===n.withCredentials||n.withCredentials})));return o.interceptors.request.use((function(e){return function(e){var n=e.needLoading,o=e.loadingText,t=e.axiosDebounce,a=e.contentType,s=e.axiosRequestSuccessCallback;return s&&"function"==typeof s&&s(e),t&&(g.handleRemoveAxiosQueue(e),g.handleAddAxiosQueue(e)),(n||o)&&x.createLoading(e),a&&(e.headers=r(r({},e.headers),{"Content-Type":a})),e}(e)}),(function(e){return function(e){return Promise.reject(e)}(e)})),o.interceptors.response.use((function(e){return function(e){x.removeLoading(e.config);var n=e.config,o=n.successKey,t=n.successKeyValue,a=n.dataKey,s=n.messageKey,r=n.axiosResponseSuccessCallback;if(r&&"function"==typeof r&&r(e),o&&t){if(y(o,e.data)==t)return a?Promise.resolve(y(a,e.data)):Promise.resolve(e.data);if(s){var i=y(s,e.data);return h.createMessage({message:""+i,messageType:"error",center:!1,messageDuration:2e3,showClose:!1}),a?Promise.resolve(y(a,e.data)):Promise.resolve(e.data)}return h.createMessage({message:e.data.message,messageType:"error",center:!1,messageDuration:2e3}),a?Promise.resolve(y(a,e.data)):Promise.resolve(e.data)}return Promise.resolve(e)}(e)}),(function(e){return function(e){return a.default.isCancel(e)?h.createMessage({message:"检测到"+e.message+"多次重复请求，接口已取消",messageType:"error",center:!0}):h.createMessage({message:e.message,messageType:"error",center:!0}),Promise.reject(e)}(e)})),{get:c(o,"get"),head:c(o,"head"),delete:d(o,"delete"),options:d(o,"options"),post:u(o,"post"),put:u(o,"put"),patch:u(o,"patch")}},Object.defineProperty(e,"__esModule",{value:!0})}));
