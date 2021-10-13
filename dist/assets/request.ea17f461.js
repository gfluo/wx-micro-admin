var e={exports:{}},t=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},r=t,n=Object.prototype.toString;function o(e){return"[object Array]"===n.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function s(e){if("[object Object]"!==n.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===n.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var f={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===n.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:s,isUndefined:i,isDate:function(e){return"[object Date]"===n.call(e)},isFile:function(e){return"[object File]"===n.call(e)},isBlob:function(e){return"[object Blob]"===n.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:c,merge:function e(){var t={};function r(r,n){s(t[n])&&s(r)?t[n]=e(t[n],r):s(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)c(arguments[n],r);return t},extend:function(e,t,n){return c(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}},l=f;function p(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var d=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(l.isURLSearchParams(t))n=t.toString();else{var o=[];l.forEach(t,(function(e,t){null!=e&&(l.isArray(e)?t+="[]":e=[e],l.forEach(e,(function(e){l.isDate(e)?e=e.toISOString():l.isObject(e)&&(e=JSON.stringify(e)),o.push(p(t)+"="+p(e))})))})),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},h=f;function m(){this.handlers=[]}m.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},m.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},m.prototype.forEach=function(e){h.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var g=m,v=f,y=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},b=y,w=function(e,t,r,n,o){var i=new Error(e);return b(i,t,r,n,o)},x=w,j=f,E=j.isStandardBrowserEnv()?{write:function(e,t,r,n,o,i){var a=[];a.push(e+"="+encodeURIComponent(t)),j.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),j.isString(n)&&a.push("path="+n),j.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},S=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)},O=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},k=f,N=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],A=f,C=A.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function n(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=n(window.location.href),function(t){var r=A.isString(t)?n(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0},R=f,T=function(e,t,r){var n=r.config.validateStatus;r.status&&n&&!n(r.status)?t(x("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)},P=E,U=d,B=function(e,t){return e&&!S(t)?O(e,t):t},L=function(e){var t,r,n,o={};return e?(k.forEach(e.split("\n"),(function(e){if(n=e.indexOf(":"),t=k.trim(e.substr(0,n)).toLowerCase(),r=k.trim(e.substr(n+1)),t){if(o[t]&&N.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([r]):o[t]?o[t]+", "+r:r}})),o):o},q=C,D=w,F=function(e){return new Promise((function(t,r){var n=e.data,o=e.headers,i=e.responseType;R.isFormData(n)&&delete o["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",u=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+u)}var c=B(e.baseURL,e.url);function f(){if(a){var n="getAllResponseHeaders"in a?L(a.getAllResponseHeaders()):null,o={data:i&&"text"!==i&&"json"!==i?a.response:a.responseText,status:a.status,statusText:a.statusText,headers:n,config:e,request:a};T(t,r,o),a=null}}if(a.open(e.method.toUpperCase(),U(c,e.params,e.paramsSerializer),!0),a.timeout=e.timeout,"onloadend"in a?a.onloadend=f:a.onreadystatechange=function(){a&&4===a.readyState&&(0!==a.status||a.responseURL&&0===a.responseURL.indexOf("file:"))&&setTimeout(f)},a.onabort=function(){a&&(r(D("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){r(D("Network Error",e,null,a)),a=null},a.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(D(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},R.isStandardBrowserEnv()){var l=(e.withCredentials||q(c))&&e.xsrfCookieName?P.read(e.xsrfCookieName):void 0;l&&(o[e.xsrfHeaderName]=l)}"setRequestHeader"in a&&R.forEach(o,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete o[t]:a.setRequestHeader(t,e)})),R.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),i&&"json"!==i&&(a.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&a.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){a&&(a.abort(),r(e),a=null)})),n||(n=null),a.send(n)}))},J=f,_=function(e,t){v.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},H=y,z={"Content-Type":"application/x-www-form-urlencoded"};function I(e,t){!J.isUndefined(e)&&J.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var M,V={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(M=F),M),transformRequest:[function(e,t){return _(t,"Accept"),_(t,"Content-Type"),J.isFormData(e)||J.isArrayBuffer(e)||J.isBuffer(e)||J.isStream(e)||J.isFile(e)||J.isBlob(e)?e:J.isArrayBufferView(e)?e.buffer:J.isURLSearchParams(e)?(I(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):J.isObject(e)||t&&"application/json"===t["Content-Type"]?(I(t,"application/json"),function(e,t,r){if(J.isString(e))try{return(t||JSON.parse)(e),J.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&J.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw H(i,this,"E_JSON_PARSE");throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};V.headers={common:{Accept:"application/json, text/plain, */*"}},J.forEach(["delete","get","head"],(function(e){V.headers[e]={}})),J.forEach(["post","put","patch"],(function(e){V.headers[e]=J.merge(z)}));var X=V,W=f,$=X,G=function(e){return!(!e||!e.__CANCEL__)},K=f,Z=function(e,t,r){var n=this||$;return W.forEach(r,(function(r){e=r.call(n,e,t)})),e},Q=G,Y=X;function ee(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var te=f,re=function(e,t){t=t||{};var r={},n=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function s(e,t){return te.isPlainObject(e)&&te.isPlainObject(t)?te.merge(e,t):te.isPlainObject(t)?te.merge({},t):te.isArray(t)?t.slice():t}function u(n){te.isUndefined(t[n])?te.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(e[n],t[n])}te.forEach(n,(function(e){te.isUndefined(t[e])||(r[e]=s(void 0,t[e]))})),te.forEach(o,u),te.forEach(i,(function(n){te.isUndefined(t[n])?te.isUndefined(e[n])||(r[n]=s(void 0,e[n])):r[n]=s(void 0,t[n])})),te.forEach(a,(function(n){n in t?r[n]=s(e[n],t[n]):n in e&&(r[n]=s(void 0,e[n]))}));var c=n.concat(o).concat(i).concat(a),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return te.forEach(f,u),r};var ne={name:"axios",version:"0.21.4",description:"Promise based HTTP client for the browser and node.js",main:"index.js",scripts:{test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},repository:{type:"git",url:"https://github.com/axios/axios.git"},keywords:["xhr","http","ajax","promise","node"],author:"Matt Zabriskie",license:"MIT",bugs:{url:"https://github.com/axios/axios/issues"},homepage:"https://axios-http.com",devDependencies:{coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},browser:{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},jsdelivr:"dist/axios.min.js",unpkg:"dist/axios.min.js",typings:"./index.d.ts",dependencies:{"follow-redirects":"^1.14.0"},bundlesize:[{path:"./dist/axios.min.js",threshold:"5kB"}]},oe={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){oe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var ie={},ae=ne.version.split(".");function se(e,t){for(var r=t?t.split("."):ae,n=e.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}oe.transitional=function(e,t,r){var n=t&&se(t);function o(e,t){return"[Axios v"+ne.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new Error(o(i," has been removed in "+t));return n&&!ie[i]&&(ie[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}};var ue=f,ce=d,fe=g,le=function(e){return ee(e),e.headers=e.headers||{},e.data=Z.call(e,e.data,e.headers,e.transformRequest),e.headers=K.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),K.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Y.adapter)(e).then((function(t){return ee(e),t.data=Z.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Q(t)||(ee(e),t&&t.response&&(t.response.data=Z.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},pe=re,de={isOlderVersion:se,assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:oe},he=de.validators;function me(e){this.defaults=e,this.interceptors={request:new fe,response:new fe}}me.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=pe(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&de.assertOptions(t,{silentJSONParsing:he.transitional(he.boolean,"1.0.0"),forcedJSONParsing:he.transitional(he.boolean,"1.0.0"),clarifyTimeoutError:he.transitional(he.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!n){var a=[le,void 0];for(Array.prototype.unshift.apply(a,r),a=a.concat(i),o=Promise.resolve(e);a.length;)o=o.then(a.shift(),a.shift());return o}for(var s=e;r.length;){var u=r.shift(),c=r.shift();try{s=u(s)}catch(f){c(f);break}}try{o=le(s)}catch(f){return Promise.reject(f)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},me.prototype.getUri=function(e){return e=pe(this.defaults,e),ce(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ue.forEach(["delete","get","head","options"],(function(e){me.prototype[e]=function(t,r){return this.request(pe(r||{},{method:e,url:t,data:(r||{}).data}))}})),ue.forEach(["post","put","patch"],(function(e){me.prototype[e]=function(t,r,n){return this.request(pe(n||{},{method:e,url:t,data:r}))}}));var ge=me;function ve(e){this.message=e}ve.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},ve.prototype.__CANCEL__=!0;var ye=ve,be=ye;function we(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new be(e),t(r.reason))}))}we.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},we.source=function(){var e;return{token:new we((function(t){e=t})),cancel:e}};var xe=we,je=f,Ee=t,Se=ge,Oe=re;function ke(e){var t=new Se(e),r=Ee(Se.prototype.request,t);return je.extend(r,Se.prototype,t),je.extend(r,t),r}var Ne=ke(X);Ne.Axios=Se,Ne.create=function(e){return ke(Oe(Ne.defaults,e))},Ne.Cancel=ye,Ne.CancelToken=xe,Ne.isCancel=G,Ne.all=function(e){return Promise.all(e)},Ne.spread=function(e){return function(t){return e.apply(null,t)}},Ne.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError},e.exports=Ne,e.exports.default=Ne;const Ae=e.exports.create({baseURL:"http://123.60.8.4:4000",timeout:5e3});Ae.interceptors.request.use((e=>(e.headers.Authorization="bearer "+localStorage.getItem("token")||"",e)),(e=>(console.log(e),Promise.reject()))),Ae.interceptors.response.use((e=>{if(200===e.status)return e.data;Promise.reject()}),(e=>(console.log(e),Promise.reject())));export{Ae as s};
