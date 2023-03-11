"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[9731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const o={id:"extend-tutorial",title:"Quick Tutorial Customize and adapt a monitoring based on HTTP protocol",sidebar_label:"Quick Tutorial"},r=void 0,s={unversionedId:"advanced/extend-tutorial",id:"advanced/extend-tutorial",title:"Quick Tutorial Customize and adapt a monitoring based on HTTP protocol",description:"Through this tutorial, we describe step by step how to customize and adapt a monitoring type based on the http protocol under the hertzbeat monitoring system.",source:"@site/docs/advanced/extend-tutorial.md",sourceDirName:"advanced",slug:"/advanced/extend-tutorial",permalink:"/docs/advanced/extend-tutorial",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/advanced/extend-tutorial.md",tags:[],version:"current",frontMatter:{id:"extend-tutorial",title:"Quick Tutorial Customize and adapt a monitoring based on HTTP protocol",sidebar_label:"Quick Tutorial"},sidebar:"docs",previous:{title:"Custom Monitoring",permalink:"/docs/advanced/extend-point"},next:{title:"HTTP Protocol Custom Monitoring",permalink:"/docs/advanced/extend-http"}},l={},d=[{value:"HTTP protocol parses the general response structure to obtain indicator data",id:"http-protocol-parses-the-general-response-structure-to-obtain-indicator-data",level:3},{value:"Add corresponding application definition YML and parameter definition YML",id:"add-corresponding-application-definition-yml-and-parameter-definition-yml",level:3},{value:"The system page adds the monitoring of <code>hertzbeat</code> monitoring type",id:"the-system-page-adds-the-monitoring-of-hertzbeat-monitoring-type",level:3},{value:"Set threshold alarm notification",id:"set-threshold-alarm-notification",level:3},{value:"over!",id:"over",level:4}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Through this tutorial, we describe step by step how to customize and adapt a monitoring type based on the http protocol under the hertzbeat monitoring system."),(0,i.kt)("p",null,"Before reading this tutorial, we hope that you are familiar with how to customize types, indicators, protocols, etc. from ","[Custom Monitoring]"," (extend-point) and ","[http Protocol Customization]"," (extend-http.md)."),(0,i.kt)("h3",{id:"http-protocol-parses-the-general-response-structure-to-obtain-indicator-data"},"HTTP protocol parses the general response structure to obtain indicator data"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In many scenarios, we need to monitor the provided HTTP API interface and obtain the index value returned by the interface. In this article, we use the http custom protocol to parse our common http interface response structure, and obtain the fields in the returned body as indicator data.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "code": 200,\n   "msg": "success",\n   "data": {}\n}\n\n')),(0,i.kt)("p",null,"As above, usually our background API interface will design such a general return. The same is true for the background of the hertzbeat system. Today, we will use the hertzbeat API as an example, add a new monitoring type ",(0,i.kt)("strong",{parentName:"p"},"hertzbeat"),", and monitor and collect its system summary statistics API\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:1157/api/summary"),", the response data is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n   "msg": null,\n   "code": 0,\n   "data": {\n     "apps": [\n       {\n         "category": "service",\n         "app": "jvm",\n         "status": 0,\n         "size": 2,\n         "availableSize": 0,\n         "unManageSize": 2,\n         "unAvailableSize": 0,\n         "unReachableSize": 0\n       },\n       {\n         "category": "service",\n         "app": "website",\n         "status": 0,\n         "size": 2,\n         "availableSize": 0,\n         "unManageSize": 2,\n         "unAvailableSize": 0,\n         "unReachableSize": 0\n       }\n     ]\n   }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This time we get the indicator data such as ",(0,i.kt)("inlineCode",{parentName:"strong"},"category"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"app"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"status"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"size"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"availableSize")," under the app. ")),(0,i.kt)("h3",{id:"add-corresponding-application-definition-yml-and-parameter-definition-yml"},"Add corresponding application definition YML and parameter definition YML"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Custom monitoring type needs to add configuration YML file")),(0,i.kt)("p",null,"A monitoring configuration definition file named after the monitoring type - for example: app-hertzbeat.yml needs to be located in the installation directory /hertzbeat/define/"),(0,i.kt)("p",null,"Define which parameters we need to enter on the page. The general HTTP protocol parameters mainly include ip, port, headers, params, uri, account password, etc. We directly reuse the parameter definition content in param-api.yml and delete our No need to enter parameters such as uri parameters and keyword keywords."),(0,i.kt)("p",null,"Define what type of collection is, which protocol collection method needs to be used, what indicators are collected, protocol configuration parameters, etc. We directly reuse the definition content in app-api.yml and modify it to our current monitoring type ",(0,i.kt)("inlineCode",{parentName:"p"},"hertzbeat")," configuration parameters, as follows: Note\u26a0\ufe0fWe get ",(0,i.kt)("inlineCode",{parentName:"p"},"category"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"app")," in the interface response data this time, Fields such as ",(0,i.kt)("inlineCode",{parentName:"p"},"status"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"size"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"availableSize")," are used as indicator data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# This monitoring type belongs to the category: service-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# Monitoring application type name (consistent with the file name) eg: linux windows tomcat mysql aws...\napp: hertzbeat\nname:\n   en-GB: HertzBeat Monitoring System\n   en-US: Hertz Beat Monitor\nparams:\n   - field: host\n     name:\n       en-CN: Host Host\n       en-US: Host\n     type: host\n     required: true\n   - field: port\n     name:\n       en-CN: port\n       en-US: Port\n     type: number\n     range: '[0,65535]'\n     required: true\n     defaultValue: 1157\n   - field: ssl\n     name:\n       en-GB: Enable HTTPS\n       en-US: HTTPS\n     type: boolean\n     required: true\n   - field: timeout\n     name:\n       en-CN: Timeout (ms)\n       en-US: Timeout(ms)\n     type: number\n     required: false\n     hide: true\n   - field: authType\n     name:\n       en-CN: Authentication method\n       en-US: Auth Type\n     type: radio\n     required: false\n     hide: true\n     options:\n       - label: Basic Auth\n         value: Basic Auth\n       - label: Digest Auth\n         value: Digest Auth\n   - field: username\n     name:\n       en-CN: username\n       en-US: Username\n     type: text\n     limit: 20\n     required: false\n     hide: true\n   - field: password\n     name:\n       en-CN: Password\n       en-US: Password\n     type: password\n     required: false\n     hide: true\n# List of indicator groups\nmetrics:\n   # The first monitoring indicator group summary\n   # Note: Built-in monitoring indicators have (responseTime - response time)\n   - name: summary\n     # The smaller the index group scheduling priority (0-127), the higher the priority, and the index group with low priority will not be scheduled until the collection of index groups with high priority is completed, and the index groups with the same priority will be scheduled and collected in parallel\n     # The indicator group with priority 0 is the availability indicator group, that is, it will be scheduled first, and other indicator groups will continue to be scheduled if the collection is successful, and the scheduling will be interrupted if the collection fails\n     priority: 0\n     # Specific monitoring indicators in the indicator group\n     fields:\n       # Indicator information includes field name type field type: 0-number, 1-string whether instance is the primary key of the instance unit: indicator unit\n       - field: responseTime\n         type: 0\n         unit: ms\n       - field: app\n         type: 1\n         instance: true\n       - field: category\n         type: 1\n       - field: status\n         type: 0\n       - field: size\n         type: 0\n       - field: availableSize\n         type: 0\n# Monitoring and collection protocol eg: sql, ssh, http, telnet, wmi, snmp, sdk, we use HTTP protocol here\n     protocol: http\n# When the protocol is the http protocol, the specific collection configuration\n     http:\n       host: ^_^host^_^\n       # port\n       port: ^_^port^_^\n       # url request interface path, we don\u2019t need to enter parameters here, it\u2019s written as /api/summary\n       url: /api/summary\n       timeout: ^_^timeout^_^\n       # Request method GET POST PUT DELETE PATCH, hardcoded as\n       method: GET\n       # Whether to enable ssl/tls, that is, http or https, default false\n       ssl: ^_^ssl^_^\n       # authentication\n       authorization:\n         # Authentication methods: Basic Auth, Digest Auth, Bearer Token\n         type: ^_^authType^_^\n         basicAuthUsername: ^_^username^_^\n         basicAuthPassword: ^_^password^_^\n         digestAuthUsername: ^_^username^_^\n         digestAuthPassword: ^_^password^_^\n       # Response data parsing method: default-system rules, jsonPath-jsonPath script, website-website usability indicator monitoring, we use jsonpath here to parse the response data\n       parseType: jsonPath\n       parseScript: '$.data.apps.*'\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The addition is complete, now we restart the hertzbeat system. We can see that the system page has added a ",(0,i.kt)("inlineCode",{parentName:"strong"},"hertzbeat")," monitoring type. ")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(35102).Z,width:"3840",height:"1724"})),(0,i.kt)("h3",{id:"the-system-page-adds-the-monitoring-of-hertzbeat-monitoring-type"},"The system page adds the monitoring of ",(0,i.kt)("inlineCode",{parentName:"h3"},"hertzbeat")," monitoring type"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"We click Add ",(0,i.kt)("inlineCode",{parentName:"p"},"HertzBeat Monitoring System"),", configure monitoring IP, port, collection cycle, account password in advanced settings, etc., click OK to add monitoring.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(54813).Z,width:"1921",height:"860"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(78852).Z,width:"1922",height:"857"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After a certain period of time (depending on the collection cycle), we can see the specific indicator data and historical charts in the monitoring details!")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(62105).Z,width:"1922",height:"860"})),(0,i.kt)("h3",{id:"set-threshold-alarm-notification"},"Set threshold alarm notification"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Next, we can set the threshold normally. After the alarm is triggered, we can view it in the alarm center, add a new recipient, set alarm notification, etc. Have Fun!!!")),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"over"},"over!"),(0,i.kt)("p",null,"This is the end of the practice of custom monitoring of the HTTP protocol. The HTTP protocol also has other parameters such as headers and params. We can define it like postman, and the playability is also very high!"),(0,i.kt)("p",null,"If you think hertzbeat is a good open source project, please give us a star on GitHub Gitee, thank you very much. Thanks for the old iron support. Refill!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"github: ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"gitee: ",(0,i.kt)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}c.isMDXComponent=!0},35102:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-1-2ef7a26379015bea268420811e822d18.png"},54813:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-2-cbd473f82a666e7562d932d8eeaccc57.png"},78852:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-3-8cdb9ddf2d9e2e7b469eb4082c0f9f13.png"},62105:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extend-http-example-4-5e7e7c30cdfbd310c653ede5ea72f622.png"}}]);