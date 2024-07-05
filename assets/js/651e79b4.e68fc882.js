"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=o,p=u["".concat(s,".").concat(g)]||u[g]||h[g]||r;return n?i.createElement(p,a(a({ref:t},d),{},{components:n})):i.createElement(p,a({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=n(7462),o=(n(7294),n(3905));const r={},a="Encoder",c={unversionedId:"core-concepts/encoder",id:"core-concepts/encoder",title:"Encoder",description:"Introduction",source:"@site/docs/core-concepts/encoder.md",sourceDirName:"core-concepts",slug:"/core-concepts/encoder",permalink:"/docs/core-concepts/encoder",draft:!1,editUrl:"https://github.com/newfound8ion/vblog/edit/main/docs/core-concepts/encoder.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Neural Tokens",permalink:"/docs/core-concepts/neural-tokens"},next:{title:"Activation Function",permalink:"/docs/core-concepts/activation-function"}},s={},l=[{value:"Introduction",id:"introduction",level:2},{value:"The Role of Encoder.nco.eth",id:"the-role-of-encoderncoeth",level:2},{value:"Exclusive Authority",id:"exclusive-authority",level:3},{value:"Interaction with Activation Functions",id:"interaction-with-activation-functions",level:2},{value:"Activation Function Registration",id:"activation-function-registration",level:3},{value:"Parameter-driven Decisions",id:"parameter-driven-decisions",level:3},{value:"Integration with Neural Tokens",id:"integration-with-neural-tokens",level:2},{value:"Triggering Token Generation",id:"triggering-token-generation",level:3},{value:"Safeguarding Integrity",id:"safeguarding-integrity",level:3},{value:"Utility &amp; Use Cases",id:"utility--use-cases",level:2},{value:"A Gatekeeper of Authenticity",id:"a-gatekeeper-of-authenticity",level:3},{value:"Decentralization with Order",id:"decentralization-with-order",level:3},{value:"Scalability and Evolution",id:"scalability-and-evolution",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:l},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"encoder"},"Encoder"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Encoder is a foundational pillar in the Newcoin ecosystem. Tasked with the responsibility of registering approved activation functions, the Encoder ensures that creativity gets its due recognition, transforming abstract validations into quantifiable tokens."),(0,o.kt)("h2",{id:"the-role-of-encoderncoeth"},"The Role of Encoder.nco.eth"),(0,o.kt)("p",null,"Encoder.nco.eth is a contract playing a pivotal role in the generation of Neural Tokens. It acts as a mediator, authorizing and instructing the PoC.nco.eth contract to mint tokens based on validated activation functions."),(0,o.kt)("h3",{id:"exclusive-authority"},"Exclusive Authority"),(0,o.kt)("p",null,"One of the defining characteristics of the Encoder is its exclusivity. Only the Encoder has the privilege to instruct the minting of Neural Tokens. This design ensures a streamlined, secure, and centralized command flow in an otherwise decentralized setup."),(0,o.kt)("h2",{id:"interaction-with-activation-functions"},"Interaction with Activation Functions"),(0,o.kt)("h3",{id:"activation-function-registration"},"Activation Function Registration"),(0,o.kt)("p",null,"Before an activation function can play a role in the minting process, it must be registered and approved. The Encoder manages this registration, keeping an up-to-date log of all validated functions."),(0,o.kt)("h3",{id:"parameter-driven-decisions"},"Parameter-driven Decisions"),(0,o.kt)("p",null,"The Encoder operates by analyzing parameters associated with Activation Functions. By dissecting these parameters, the Encoder decides the validity and weight of a particular function."),(0,o.kt)("h2",{id:"integration-with-neural-tokens"},"Integration with Neural Tokens"),(0,o.kt)("h3",{id:"triggering-token-generation"},"Triggering Token Generation"),(0,o.kt)("p",null,"Upon successful validation of Activation Functions, the Encoder sends a minting request to the PoC.nco.eth contract. This process results in the generation of Neural Tokens, marking the acknowledgment of creative endeavors."),(0,o.kt)("h3",{id:"safeguarding-integrity"},"Safeguarding Integrity"),(0,o.kt)("p",null,"The Encoder ensures that only deserving activations result in token minting. By strictly adhering to the rules set by registered Activation Functions, the Encoder safeguards the integrity and value of Neural Tokens."),(0,o.kt)("h2",{id:"utility--use-cases"},"Utility & Use Cases"),(0,o.kt)("h3",{id:"a-gatekeeper-of-authenticity"},"A Gatekeeper of Authenticity"),(0,o.kt)("p",null,"By managing the validation and minting process, the Encoder acts as a gatekeeper. It ensures that only genuine creative actions that meet the set criteria result in token generation, promoting authenticity in the Newcoin ecosystem."),(0,o.kt)("h3",{id:"decentralization-with-order"},"Decentralization with Order"),(0,o.kt)("p",null,"While Newcoin operates on decentralized principles, the Encoder introduces a layer of ordered centralization. It ensures that while creativity flourishes freely, there's a systematic method to its recognition and reward."),(0,o.kt)("h3",{id:"scalability-and-evolution"},"Scalability and Evolution"),(0,o.kt)("p",null,"As the ecosystem evolves and new Activation Functions emerge, the Encoder's modular design allows for easy integrations. It can adapt, register, and manage an ever-growing list of functions, ensuring that Newcoin remains agile and responsive to the evolving landscape."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The Encoder is not just a contract but the heartbeat of the Newcoin's reward mechanism. It stands at the crossroads of creativity and recognition, ensuring that every deserving action gets its rightful acknowledgment. As Newcoin grows and matures, the Encoder will continue to be a beacon of order, authenticity, and integrity in a vast decentralized ocean."))}h.isMDXComponent=!0}}]);