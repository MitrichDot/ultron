"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92],{2902:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(4848),r=t(8453);const i={sidebar_position:2},s="Connect to project",c={id:"intro/connect",title:"Connect to project",description:"The framework has three libraries that could be added as dependencies.",source:"@site/docs/intro/connect.md",sourceDirName:"intro",slug:"/intro/connect",permalink:"/ultron/docs/intro/connect",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ultron/docs/"},next:{title:"Dependencies Management",permalink:"/ultron/docs/intro/dependencies"}},a={},d=[];function l(n){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"connect-to-project",children:"Connect to project"}),"\n",(0,o.jsx)(e.p,{children:"The framework has three libraries that could be added as dependencies."}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"com.atiurin:ultron-compose"})," - could be used both for Android application and Compose Multiplatform UI tests"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"com.atiurin:ultron-android"})," - native Android UI tests based on Espresso(including web part) and UI Automator"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"com.atiurin:ultron-allure"})," - Allure report support for Android application UI tests"]}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["You need ",(0,o.jsx)(e.strong,{children:"mavenCentral"})," repository."]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:"repositories {\n    mavenCentral()\n}\n"})}),"\n",(0,o.jsx)(e.p,{children:"For Android application instrumented UI tests"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'dependencies {\n    androidTestImplementation("com.atiurin:ultron-compose:<latest_version>")\n    androidTestImplementation("com.atiurin:ultron-android:<latest_version>")\n    androidTestImplementation("com.atiurin:ultron-allure:<latest_version>")\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"For Compose Multiplatform UI tests"}),"\n",(0,o.jsx)(e.p,{children:"As Ultron supports Desktop and Android targets for KMP. You better specify depencencies in relevant part"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-kotlin",children:'kotlin {\n    androidTarget {\n        @OptIn(ExperimentalKotlinGradlePluginApi::class)\n        instrumentedTestVariant {\n            ...\n            dependencies {\n                implementation("com.atiurin:ultron-compose:<latest_version>")\n            }\n        }\n    }\n    sourceSets {\n        val desktopTest by getting {\n            dependencies {\n                implementation("com.atiurin:ultron-compose:<latest_version>")\n            }\n        }\n    }\n}\n'})})]})}function p(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);