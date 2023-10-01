"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[301],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},l=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},v=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=p(n),v=r,f=u["".concat(s,".").concat(v)]||u[v]||d[v]||o;return n?a.createElement(f,i(i({ref:e},l),{},{components:n})):a.createElement(f,i({ref:e},l))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=v;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[u]="string"==typeof t?t:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}v.displayName="MDXCreateElement"},6024:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="Approval by the Foundation",c={unversionedId:"getting-started/creating-watts/activation-function-approval",id:"getting-started/creating-watts/activation-function-approval",title:"Approval by the Foundation",description:"Once an activation function is proposed and registered, the Newcoin Foundation reviews and approves it before it can be activated. This centralized approval process ensures that the activation functions meet the foundation\u2019s standards and objectives, allowing them to operate in a permissionless and trusted manner once approved. The intention is for this process to become decentralized over time, with approvals managed through a foundation voting mechanism.",source:"@site/docs/getting-started/creating-watts/activation-function-approval.md",sourceDirName:"getting-started/creating-watts",slug:"/getting-started/creating-watts/activation-function-approval",permalink:"/vblog/docs/getting-started/creating-watts/activation-function-approval",draft:!1,editUrl:"https://github.com/newfound8ion/developer/edit/main/docs/getting-started/creating-watts/activation-function-approval.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Register Activation Function",permalink:"/vblog/docs/getting-started/creating-watts/register-activation-function"},next:{title:"User Runs Activate Function",permalink:"/vblog/docs/getting-started/creating-watts/call-activate"}},s={},p=[],l={toc:p},u="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"approval-by-the-foundation"},"Approval by the Foundation"),(0,r.kt)("p",null,"Once an activation function is proposed and registered, the Newcoin Foundation reviews and approves it before it can be activated. This centralized approval process ensures that the activation functions meet the foundation\u2019s standards and objectives, allowing them to operate in a permissionless and trusted manner once approved. The intention is for this process to become decentralized over time, with approvals managed through a foundation voting mechanism."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Foundation Review"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The Newcoin Foundation meticulously reviews each proposed activation function, checking it against the system\u2019s standards, security requirements, and other relevant criteria."),(0,r.kt)("li",{parentName:"ul"},"Approval is reserved for the foundation or assigned approvers to maintain the integrity of the system."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Notification of Approval"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"After the approval of an activation function, an ",(0,r.kt)("inlineCode",{parentName:"li"},"ActivationFunctionApproved")," event is emitted."),(0,r.kt)("li",{parentName:"ul"},"Developers should listen for this event to verify the approval status of their proposed activation functions. The unique ID assigned during the registration of the activation function will be used to identify the approved functions.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"emit ActivationFunctionApproved(activationFunctionId);\n")),(0,r.kt)("p",null,"Developers can be attentive to the emitted events to track the status of their proposals and act accordingly once approval is confirmed as well as reaching out via discord or Telegram."))}d.isMDXComponent=!0}}]);