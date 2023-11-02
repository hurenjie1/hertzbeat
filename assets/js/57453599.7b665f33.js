"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[90979],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(r),u=a,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(k,i(i({ref:e},p),{},{components:r})):n.createElement(k,i({ref:e},p))}));function u(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59728:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"alert_webhook",title:"Alert WebHook callback notification",sidebar_label:"Alert webHook notification",keywords:["open source monitoring tool","open source alerter","open source webhook notification"]},i=void 0,l={unversionedId:"help/alert_webhook",id:"help/alert_webhook",title:"Alert WebHook callback notification",description:"After the threshold is triggered send alarm information and call the Webhook interface through post request to notify the recipient.",source:"@site/docs/help/alert_webhook.md",sourceDirName:"help",slug:"/help/alert_webhook",permalink:"/docs/help/alert_webhook",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/alert_webhook.md",tags:[],version:"current",frontMatter:{id:"alert_webhook",title:"Alert WebHook callback notification",sidebar_label:"Alert webHook notification",keywords:["open source monitoring tool","open source alerter","open source webhook notification"]},sidebar:"docs",previous:{title:"Alert email notification",permalink:"/docs/help/alert_email"},next:{title:"Alert Discord bot notification",permalink:"/docs/help/alert_discord"}},c={},s=[{value:"Operation steps",id:"operation-steps",level:3},{value:"WebHook callback POST body BODY content",id:"webhook-callback-post-body-body-content",level:3},{value:"Webhook notification common issues",id:"webhook-notification-common-issues",level:3}],p={toc:s};function m(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"After the threshold is triggered send alarm information and call the Webhook interface through post request to notify the recipient.          ")),(0,a.kt)("h3",{id:"operation-steps"},"Operation steps"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u3010Alarm notification\u3011->\u3010Add new recipient\u3011 ->\u3010Select WebHook notification method\u3011-> \u3010Set WebHook callback address\u3011 -> \u3010Confirm\u3011")," ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(23565).Z,width:"3804",height:"1184"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f \u3010Add new notification strategy\u3011-> \u3010Associate the recipient just set\u3011-> \u3010Confirm\u3011"),"  ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note\u26a0\ufe0f Adding a new recipient does not mean that it is effective to receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, to specify which messages are sent to which recipients."),"   ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"email",src:r(96862).Z,width:"3756",height:"1288"}),"    "),(0,a.kt)("h3",{id:"webhook-callback-post-body-body-content"},"WebHook callback POST body BODY content"),(0,a.kt)("p",null,"Content format\uff1aJSON  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "alarmId": 76456,\n  "target": "${target}",\n  "thresholdId": 33455,\n  "priority": 0,\n  "content": "udp_port monitoring availability alert, code is FAIL",\n  "status": 0,\n  "times": 1,\n  "triggerTime": "2022-02-25T13:32:13",\n  "tags": {\n    "app": "windows",\n    "monitorId": "180427708350720",\n    "metrics": "availability",\n    "code": "UN_CONNECTABLE",\n    "thresholdId": "112",\n    "monitorName": "WINDOWS_192.168.124.12"\n  }\n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"alarmId"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm record entity primary key index ID \u544a\u8b66\u8bb0\u5f55\u5b9e\u4f53\u4e3b\u952e\u7d22\u5f15ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"target"),(0,a.kt)("td",{parentName:"tr",align:null},"string title: Alert target object: monitor availability-available metrics-app.metrics.field \u544a\u8b66\u76ee\u6807\u5bf9\u8c61: \u76d1\u63a7\u53ef\u7528\u6027-available \u6307\u6807-app.metrics.field")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"thresholdId"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm definition ID associated with the alarm \u544a\u8b66\u5173\u8054\u7684\u544a\u8b66\u5b9a\u4e49ID")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"priority"),(0,a.kt)("td",{parentName:"tr",align:null},"string($byte) title: Alarm level 0: high-emergency-critical alarm-red 1: medium-critical-critical alarm-orange 2: low-warning-warning alarm-yellow \u544a\u8b66\u7ea7\u522b 0:\u9ad8-emergency-\u7d27\u6025\u544a\u8b66-\u7ea2\u8272 1:\u4e2d-critical-\u4e25\u91cd\u544a\u8b66-\u6a59\u8272 2:\u4f4e-warning-\u8b66\u544a\u544a\u8b66-\u9ec4\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content"),(0,a.kt)("td",{parentName:"tr",align:null},"string title: The actual content of the alarm notification \u544a\u8b66\u901a\u77e5\u5b9e\u9645\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},"string($byte) title: Alarm status: 0-normal alarm (to be processed) 1-threshold triggered but not reached the number of alarms 2-recovered alarm 3-processed \u544a\u8b66\u72b6\u6001: 0-\u6b63\u5e38\u544a\u8b66(\u5f85\u5904\u7406) 1-\u9608\u503c\u89e6\u53d1\u4f46\u672a\u8fbe\u5230\u544a\u8b66\u6b21\u6570 2-\u6062\u590d\u544a\u8b66 3-\u5df2\u5904\u7406")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"times"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int32) title: Alarm threshold trigger times \u544a\u8b66\u9608\u503c\u89e6\u53d1\u6b21\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"triggerTime"),(0,a.kt)("td",{parentName:"tr",align:null},"integer($int64) title: Alarm trigger time (timestamp in milliseconds) \u9996\u6b21\u544a\u8b66\u89e6\u53d1\u65f6\u95f4(\u6beb\u79d2\u65f6\u95f4\u6233)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"tags"),(0,a.kt)("td",{parentName:"tr",align:null},"example: {key1:value1}")))),(0,a.kt)("h3",{id:"webhook-notification-common-issues"},"Webhook notification common issues"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"WebHook callback did not take effect  ",(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"Please check whether there is any triggered alarm information in the alarm center.",(0,a.kt)("br",{parentName:"p"}),"\n","Please check whether the configured webhook callback address is correct.")))),(0,a.kt)("p",null,"Other issues can be fed back through the communication group ISSUE!"))}m.isMDXComponent=!0},96862:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/alert-notice-4-7b968f3d348ff468ad66fd59466be545.png"},23565:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/alert-notice-5-2a87516f9ad552183d6f7d715e55f4af.png"}}]);