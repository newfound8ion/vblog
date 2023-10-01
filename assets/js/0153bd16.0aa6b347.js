"use strict";(self.webpackChunkdeveloper_newcoin_org_2=self.webpackChunkdeveloper_newcoin_org_2||[]).push([[307],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",v={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,l=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),p=i,g=d["".concat(l,".").concat(p)]||d[p]||v[p]||o;return n?r.createElement(g,a(a({ref:e},u),{},{components:n})):r.createElement(g,a({ref:e},u))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[d]="string"==typeof t?t:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6980:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={},a="Activation Functions Logic",c={unversionedId:"getting-started/creating-watts/activation-function-logic",id:"getting-started/creating-watts/activation-function-logic",title:"Activation Functions Logic",description:"Writing the Vote Contract",source:"@site/docs/getting-started/creating-watts/activation-function-logic.md",sourceDirName:"getting-started/creating-watts",slug:"/getting-started/creating-watts/activation-function-logic",permalink:"/vblog/docs/getting-started/creating-watts/activation-function-logic",draft:!1,editUrl:"https://github.com/newfound8ion/developer/edit/main/docs/getting-started/creating-watts/activation-function-logic.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Activation Functions Interface",permalink:"/vblog/docs/getting-started/creating-watts/activation-function-interface"},next:{title:"Register Activation Function",permalink:"/vblog/docs/getting-started/creating-watts/register-activation-function"}},l={},s=[{value:"Writing the Vote Contract",id:"writing-the-vote-contract",level:2},{value:"Overview",id:"overview",level:3},{value:"Contract Variables:",id:"contract-variables",level:3},{value:"Contract Initialization:",id:"contract-initialization",level:3},{value:"Voting Mechanism:",id:"voting-mechanism",level:3},{value:"Activation Check:",id:"activation-check",level:3},{value:"Events:",id:"events",level:3}],u={toc:s},d="wrapper";function v(t){let{components:e,...n}=t;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"activation-functions-logic"},"Activation Functions Logic"),(0,i.kt)("h2",{id:"writing-the-vote-contract"},"Writing the Vote Contract"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"For our activation function, we're utilizing a simple voting mechanism. Users will be able to cast their votes, and once a certain threshold of votes is reached, the activation function will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". This signifies that the conditions for activation have been met."),(0,i.kt)("p",null,"Normally we would want our conditions to be a little more rhobust and connected to real world conditions that we can't game. But this will illistrate the approach until then."),(0,i.kt)("h3",{id:"contract-variables"},"Contract Variables:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"votes"),": A counter to keep track of the total votes cast."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"requiredVotes"),": The threshold number of votes required for activation."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"hasVoted"),": A mapping to track whether an address has already voted, ensuring one vote per address.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"uint256 public votes;\nuint256 public requiredVotes;\nmapping(address => bool) public hasVoted;\n")),(0,i.kt)("h3",{id:"contract-initialization"},"Contract Initialization:"),(0,i.kt)("p",null,"When deploying the contract, specify the number of votes required for the activation function to return true."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(uint256 _requiredVotes) {\n    requiredVotes = _requiredVotes;\n}\n")),(0,i.kt)("h3",{id:"voting-mechanism"},"Voting Mechanism:"),(0,i.kt)("p",null,"Users can cast their vote using the vote function. Each vote increments the votes counter and registers the voter's address, ensuring that each address can only vote once."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},'function vote() external {\n    require(!hasVoted[msg.sender], "You have already voted.");\n\n    votes++;\n    hasVoted[msg.sender] = true;\n\n    emit Voted(msg.sender);\n}\n')),(0,i.kt)("h3",{id:"activation-check"},"Activation Check:"),(0,i.kt)("p",null,"The activate function checks if the number of votes meets or exceeds the required threshold."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function activate() external view override returns (bool) {\n    return votes >= requiredVotes;\n}\n")),(0,i.kt)("h3",{id:"events"},"Events:"),(0,i.kt)("p",null,"To track voting actions on the blockchain, an event is emitted every time a vote is cast."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event Voted(address indexed voter);\n")))}v.isMDXComponent=!0}}]);