(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],u=0,h=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i={app:0},r=[];function s(e){return c.p+"js/"+({about:"about",codechallenge:"codechallenge",contact:"contact",experience:"experience",intro:"intro",work:"work"}[e]||e)+"."+{about:"a623fbd9",codechallenge:"8a208c2e",contact:"db73820e",experience:"368e0abb",intro:"3fbc1aa7",work:"c91258f4"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,codechallenge:1,contact:1,experience:1,intro:1,work:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",codechallenge:"codechallenge",contact:"contact",experience:"experience",intro:"intro",work:"work"}[e]||e)+"."+{about:"96e2a1cf",codechallenge:"aaa67911",contact:"da40bcf9",experience:"b4593928",intro:"3905199b",work:"30c15160"}[e]+".css",i=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){l=h[s],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=i[e]=[t,n]}));t.push(a[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e);var h=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",h.name="ChunkLoadError",h.type=a,h.request=o,n[1](h)}i[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"20e3":function(e,t,n){},"4e21":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("NavigationBar"),n("ThemeChanger"),n("ResumeDownloader"),n("main",[n("router-view")],1),n("SocialNetworkSite"),n("Footer")],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"social-network"},[n("slide-y-down-transition",{attrs:{delay:1300}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"social-media social-meida-orientation social-media-placement"},[n("ul",{staticClass:"social-media-list"},e._l(e.links,(function(t){return n("li",{key:t.link},[n("a",{attrs:{href:t.link,target:"_blank",rel:"author",icon:""}},[n("v-icon",{staticClass:"social-buttons",attrs:{size:"20"}},[e._v(e._s(t.icon))])],1)])})),0)])]),n("slide-y-down-transition",{attrs:{delay:1600}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"email-media social-meida-orientation social-media-placement"},[n("div",{staticClass:"email-media-link"},[n("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])])])])],1)},s=[],c=n("c4fa"),l=n("7c76"),u={name:"SocialMediaLinks",components:{SlideYDownTransition:l["c"]},data:function(){return{links:c["b"],email:c["a"],show:!1}},mounted:function(){this.show=!0}},h=u,d=(n("63dc"),n("2877")),p=n("6544"),m=n.n(p),f=n("132d"),g=Object(d["a"])(h,r,s,!1,null,null,null),v=g.exports;m()(g,{VIcon:f["a"]});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("slide-y-up-transition",{attrs:{delay:900}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[n("v-tabs",{staticClass:"navigation-tab",class:e.tabTop?"navigation-tab-top":"",style:e.tabShow?"top: 0px;":"top: -50px",attrs:{centered:"",height:e.tabTop?"60px":"40px"}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.name,attrs:{to:t.to}},[n("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),1),n("div",{staticClass:"responsive-nav-tab"},[n("v-btn",{staticClass:"nav-button-show",attrs:{color:"primary",large:"",icon:"",elevation:"0",rounded:"","aria-label":"Open Drawer"},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{large:""}},[e._v(e._s(e.menuIcon))])],1),n("v-dialog",{staticClass:"nav-dialog",attrs:{fullscreen:"","hide-overlay":"",transition:"slide-x-transition"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-btn",{staticStyle:{position:"absolute","z-index":"20",right:"10px",top:"10px"},attrs:{"x-large":"",icon:"","aria-label":"Close Drawer"},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{attrs:{"x-large":""}},[e._v(e._s(e.closeIcon))])],1),n("div",{staticStyle:{"padding-top":"50px"}},[n("v-tabs",{staticClass:"show-navigation-tab",attrs:{vertical:""}},e._l(e.tabs,(function(t){return n("v-tab",{key:t.name,attrs:{to:t.to},on:{click:function(t){e.dialog=!e.dialog}}},[n("v-icon",{staticStyle:{"margin-right":"5px"},attrs:{small:""}},[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+" ")],1)})),1)],1)],1)],1)],1)])},w=[],y=n("94ed"),k=[{icon:y["o"],name:"Intro",to:"/intro"},{icon:y["g"],name:"About Me",to:"/about"},{icon:y["p"],name:"Experience",to:"/experience"},{icon:y["i"],name:"Work",to:"/work"},{icon:y["b"],name:"Code Challenge",to:"/codechallenge"},{icon:y["f"],name:"Contact Me",to:"/contact"}],S={name:"Navigation",components:{SlideYUpTransition:l["d"]},data:function(){return{tabs:k,tabShow:!0,tabTop:!0,menuIcon:y["x"],dialog:!1,closeIcon:y["d"],show:!1}},mounted:function(){var e=this,t=window.pageYOffset;window.onscroll=function(){var n=window.pageYOffset;e.tabShow=t>n,t=n,window.pageYOffset<2?e.tabTop=!0:e.tabTop=!1},this.show=!0}},C=S,x=(n("eec8"),n("8336")),_=n("169a"),j=n("71a3"),I=n("fe57"),T=Object(d["a"])(C,b,w,!1,null,null,null),B=T.exports;m()(T,{VBtn:x["a"],VDialog:_["a"],VIcon:f["a"],VTab:j["a"],VTabs:I["a"]});var P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SlideYUpTransition",{attrs:{delay:1700}},[n("footer",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"footer"},[n("div",{staticClass:"social-links"},[n("ul",e._l(e.socials,(function(t){return n("li",{key:t.name},[n("a",{attrs:{href:t.link,target:"_blank",rel:"author"}},[n("v-icon",{staticClass:"icon"},[e._v(e._s(t.icon))])],1)])})),0),n("a",{attrs:{href:"mailto:jenuelganawed936@gmail",rel:"author"}},[e._v(" jenuelganawed936@gmail.com ")])]),n("div",{staticClass:"footer-text"},[n("a",{attrs:{href:"https://github.com/MisterJ936/jenuel-portfolio-v2",target:"_blank",rel:"author"}},[n("div",[n("span",[e._v("Built by Jenuel Ganawed based on Brittany's Design "),n("br"),e._v(" using "),n("v-icon",{attrs:{small:"",color:"primary"}},[e._v(e._s(e.vueIcon))]),e._v(" Vue.js")],1)])])])])])},F=[],D={data:function(){return{vueIcon:y["C"],socials:c["b"],show:!1}},components:{SlideYUpTransition:l["d"]},mounted:function(){this.show=!0}},E=D,M=(n("ea59"),Object(d["a"])(E,P,F,!1,null,null,null)),J=M.exports;m()(M,{VIcon:f["a"]});var A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-width":100,"offset-x":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"change-theme-btn",attrs:{icon:"","aria-label":"Change-Theme"}},"v-btn",o,!1),a),[n("v-icon",{staticClass:"icon"},[e._v(e._s(e.colorIcon))])],1)]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-card",[n("v-list",{attrs:{color:"lightBackground"}},[n("v-list-item",[n("v-list-item-content",e._l(e.themes,(function(t){return n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.name,staticClass:"theme-chooser",on:{click:function(n){return e.changeTheme(t)}}},[n("p",{staticStyle:{margin:"0px"}},[e._v(e._s(t.name))]),n("div",{staticClass:"colors-flex"},e._l(t.dark,(function(e,t){return n("div",{key:t,staticClass:"colors-show",style:"background-color:"+e})})),0)])})),0)],1)],1)],1)],1)},V=[],O=(n("4160"),n("b0c0"),n("b64b"),n("159b"),[{name:"Main Theme",dark:{background:"#0a192f",lightBackground:"#172a45",primary:"#64ffda",liteprimary:"#172a45",lightestPrimary:"#303C55",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Arthur Theme",dark:{background:"#1C1C1C",lightBackground:"#3D352A",primary:"#CD5C5C",liteprimary:"#E8AE5B",lightestPrimary:"#BBAA99",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Atom Theme",dark:{background:"#161719",lightBackground:"#000000",primary:"#FD5FF1",liteprimary:"#B9B6FC",lightestPrimary:"#E0E0E0",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Banana Blue Berry Theme",dark:{background:"#191323",lightBackground:"#495162",primary:"#FF6B7F",liteprimary:"#DC396A",lightestPrimary:"#F1F1F1",slate:"#F1F1F1",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}},{name:"Solarized Theme",dark:{background:"#002B36",lightBackground:"#073642",primary:"#268BD2",liteprimary:"#D33682",lightestPrimary:"#268BD2",slate:"#F2EEDE",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff"}}]),L={data:function(){return{fav:!0,menu:!1,message:!1,hints:!0,colorIcon:y["m"],themes:O}},methods:{changeTheme:function(e){var t=this,n=e.name,a=e.dark;Object.keys(a).forEach((function(e){t.$vuetify.theme.themes.dark[e]=a[e]})),localStorage.setItem("theme-selected",n),this.menu=!1}},mounted:function(){var e=this,t=localStorage.getItem("theme-selected");t&&this.themes.forEach((function(n){if(n.name==t)return e.changeTheme(n),!0}))}},N=L,W=(n("d52e"),n("b0af")),U=n("8860"),z=n("da13"),R=n("5d23"),Y=n("e449"),$=n("269a"),G=n.n($),H=n("5607"),q=Object(d["a"])(N,A,V,!1,null,null,null),K=q.exports;m()(q,{VBtn:x["a"],VCard:W["a"],VIcon:f["a"],VList:U["a"],VListItem:z["a"],VListItemContent:R["a"],VMenu:Y["a"]}),G()(q,{Ripple:H["a"]});var Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{right:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"resume-download-btn",attrs:{icon:"","aria-label":"Change-Theme"},on:{click:function(t){return e.Download()}}},"v-btn",o,!1),a),[n("v-icon",{staticClass:"icon"},[e._v(e._s(e.colorIcon))])],1)]}}])},[n("span",{staticStyle:{color:"var(--v-background-base)"}},[e._v("Download Resume/CV")])])},X=[],Z={data:function(){return{fav:!0,menu:!1,message:!1,hints:!0,colorIcon:y["j"],themes:O}},methods:{Download:function(){window.open("https://github.com/BroJenuel/BroJenuel/raw/master/resume/JenuelGanawed_CV_2020.pdf")}}},ee=Z,te=(n("77db"),n("3a2f")),ne=Object(d["a"])(ee,Q,X,!1,null,null,null),ae=ne.exports;m()(ne,{VBtn:x["a"],VIcon:f["a"],VTooltip:te["a"]});var oe={name:"App",components:{SocialNetworkSite:v,NavigationBar:B,Footer:J,ThemeChanger:K,ResumeDownloader:ae},data:function(){return{}}},ie=oe,re=(n("5c0b"),n("7496")),se=Object(d["a"])(ie,o,i,!1,null,null,null),ce=se.exports;m()(se,{VApp:re["a"]});n("d3b7");var le=n("8c4f"),ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Page Not Found")])},he=[],de={},pe=Object(d["a"])(de,ue,he,!1,null,null,null),me=pe.exports;a["a"].use(le["a"]);var fe=[{path:"",redirect:"/intro"},{path:"/intro",name:"Intro",component:function(){return n.e("intro").then(n.bind(null,"db6d"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"57ee"))}},{path:"/experience",name:"Experience",component:function(){return n.e("experience").then(n.bind(null,"2873"))}},{path:"/work",name:"Work",component:function(){return n.e("work").then(n.bind(null,"49a1"))}},{path:"/codechallenge",name:"CodeChallenge",component:function(){return n.e("codechallenge").then(n.bind(null,"f25d"))}},{path:"/contact",name:"Contact",component:function(){return n.e("contact").then(n.bind(null,"a055"))}},{path:"/*",name:"PageNotFound",component:me}],ge=new le["a"]({mode:"history",routes:fe}),ve=ge,be=n("2f62"),we={workPage:{title:"My Work",des:"Showcasing complete functional demonstrates what I can bring to your project. I built these projects from the ground up to show my skills in front-end, back-end, and database development. Most of these projects are full-stack web projects, and you can demo them easily.",works:[{overline:"Featured Project",title:"Portfolio",des:"It's is a new cool look for my portfolio based on Brittany's design. I created Ground Up using the Technology Called Vue to Create This Portfolio.",techs:["vue","vuetify","vue2-transition"],links:[{link:"https://github.com/BroJenuel/jenuel-portfolio-v2",icon:y["n"]},{link:"https://jenuelganawed.ml",icon:y["z"]}],imageLink:"https://jenuelganawed.ml",img:"https://i.ibb.co/yWW9Zy3/My-Port-Folio.png"},{overline:"Featured Project",title:"Get GIF's",des:"With this website, you can search the wide internet to get GIFs that you can download for your content.",techs:["vue","API"],links:[{link:"https://github.com/BroJenuel-Youtube/get-gifs",icon:y["n"]},{link:"https://jenuelganawed.ml",icon:y["z"]}],imageLink:"https://www.getgifs.ml/",img:"https://i.ibb.co/rMqXVJP/getgifs.png"}]}},ye={introShow:!1,aboutMeShow:!1,experienceShow:!1,workShow:!1,codeChallengeShow:!1,contactMeShow:!1},ke={introPage:{name:"Jenuel Ganawed.",IDo:"I Build Things for the web.",des:"I'm a software/web developer specializing in creating (and sometimes designing) exceptional websites, applications, and everything in between.",email:"jenuelganawed936@gmail.com"}},Se="<p>Hi! I'm Jenuel, and I am a Web Developer.</p><p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to Join or Work in any opportunity that will help me grow in this Industry. I welcome challenging projects and enjoy working with all sorts of personalities..</p><p>Shortly after graduating from <a href='http://kcp.edu.ph/' rel='external' target='_blank'>Kings College of The Philippines</a>, I joined the team of software developers at a company where I work on a wide variety of fascinating technologies and helpful projects..</p><p>Here are a few technologies I've been working with recently:</p>",Ce=[{icon:y["s"],text:"JavaScript (ES6+)"},{icon:y["r"],text:"HTML & (S)CSS"},{icon:y["C"],text:"Vue"},{icon:y["u"],text:"laravel/Lumen"},{icon:y["a"],text:"AngularS"},{icon:y["t"],text:"Ruby on Rails"},{icon:y["k"],text:"CodeIgniter"}],xe={aboutMe:{info:Se,skills:Ce}},_e={icon:"",position:"Software/Web Dev.",tab:"Dap-ayan",company:"Dapayan Eatery La Trinidad",link:"",workStart:"Aug. 2018",workUntil:"May 2019",des:["Participated as an author and a project developer of their own private Ordering Management System","Technologies used are MySQL, CodeIgniter"]},je={icon:"",position:"Designer and Web Programmer",tab:"iLearn",company:"iLearn Skills Development Academy",link:"http://www.ilearnsda.com/",workStart:"Aug. 2018",workUntil:"Dec. 2018",des:["Created web designs for wonderful clients","Maintaining their system as well as their website"]},Ie={icon:"",present:!0,position:"Software/Web Dev.",tab:"Utalk Phil.",company:"Utalk Philippines",link:"",workStart:"Sept. 2019",workUntil:"Present",des:["Full-time software developer","Worked with a variety of tech's. such as Vue, Angular, CodeIgniter, Lumen, Ruby on Rails, MySQL, MongoDB","Maintaining the system of the company"]},Te=[Ie,_e,je],Be={experiencePage:{des:"This are companies that I have worked for. I have learned and enjoyed working on this companies.",experiences:Te}},Pe={title:"Lets Chat",des:"<p>Lets Chat is a web app that I made where a user can chat with another person or more than one person, depending on the room selected.</p>",headIcon:y["c"],links:[{link:"https://github.com/BroJenuel-Youtube/lets-chat",icon:y["n"]},{link:"https://lets-chat-app-by-jenuel.herokuapp.com/",icon:y["z"]}],techs:[{name:"html&css",icon:y["r"]},{name:"express",icon:y["y"]},{name:"socket.io",icon:y["v"]}]},Fe={title:"Portfolio",des:"<p>It's is a portfolio made with vue mixed with a plugin called vuetify. It is a free open source project that you can use for your portfolio project as well.</p>",headIcon:y["c"],links:[{link:"https://i.ibb.co/wr4b0BD/portfoliov1-min.png",icon:y["n"]},{link:"https://jenuelganawed-v1.netlify.app",icon:y["z"]}],techs:[{name:"vue",icon:y["r"]},{name:"vuetify",icon:y["y"]}]},De={title:"Speech To Text",des:"<p>This is a simple speech to text website using HTML, CSS, and JS. JavaScript is fascinating in what it can do. So, I built a simple project to try to convert speech to text.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/speach-to-text",icon:y["n"]},{link:"https://jenuelganawed-speechtotext.netlify.app/",icon:y["z"]}],techs:[{name:"html",icon:y["r"]},{name:"javaScript",icon:y["s"]},{name:"css",icon:y["q"]}]},Ee={title:"Text To Speech",des:"<p>This is a simple Text to Speech using HTML, CSS, and JS. JavaScript is fascinating with what it can do. So I made a simple, project to try and convert speech to text. I used a library called Speech Recognition.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/text-to-speach",icon:y["n"]},{link:"https://jenuelganawed-texttospeach.netlify.app/",icon:y["z"]}],techs:[{name:"html",icon:y["r"]},{name:"javaScript",icon:y["s"]},{name:"css",icon:y["q"]}]},Me={title:"Web Calculator",des:"<p>Calculator is a fascinating computer. People Have been using it for computing a lot of stuff. It's been a useful tool for everyone. So I created my simple calculator using Vue.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/calculator-vue",icon:y["n"]},{link:"https://jenuelganawed-calculator-vue.netlify.app/",icon:y["z"]}],techs:[{name:"vue.js",icon:y["C"]}]},Je={title:"World Time Using React Native",des:"<p>World time is an app I created, wherein you can check the time around the world and also check if its night time or day time.</p>",links:[{link:"https://github.com/BroJenuel/MyPortFolio/tree/master/appDev/world_time",icon:y["n"]},{link:"https://drive.google.com/file/d/1kc7EE7naz9Rpvq8kyJhJ4F_eB96tnEi5/view",icon:y["e"]}],techs:[{icon:y["A"],name:"react-native"},{icon:y["s"],name:"javaScript"}]},Ae=[Pe,Je,Fe,Me,De,Ee],Ve={codeChallengePage:{des:"This projects under this page, are simple projects that I created to challenge my self to experience and learn things.",challenges:Ae}},Oe=Object.assign(ye,ke,xe,Be,we,Ve),Le=Oe;a["a"].use(be["a"]);var Ne=new be["a"].Store({state:Le,mutations:{},actions:{},modules:{}}),We=n("f309");a["a"].use(We["a"]);var Ue=new We["a"]({theme:{options:{customProperties:!0},themes:{dark:{background:"#0a192f",lightBackground:"#172a45",primary:"#64ffda",liteprimary:"#172a45",lightestPrimary:"#303C55",slate:"#8892b0",lightSlate:"#a8b2d1",lightestSlate:"#ccd6f6",white:"#e6f1ff",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",shadow:"#000000"}},dark:!0}});n("b383");a["a"].config.productionTip=!1,new a["a"]({router:ve,store:Ne,vuetify:Ue,render:function(e){return e(ce)}}).$mount("#app")},5989:function(e,t,n){},"5c0b":function(e,t,n){"use strict";n("9c0c")},"63dc":function(e,t,n){"use strict";n("5989")},"77db":function(e,t,n){"use strict";n("20e3")},"9c0c":function(e,t,n){},b383:function(e,t,n){},c4fa:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n("94ed"),o=[{icon:a["h"],link:"https://www.facebook.com/broJenuel/"},{icon:a["D"],link:"https://www.youtube.com/channel/UCNANDtTF63UTRcYioVsSCdA"},{icon:a["w"],link:"https://www.linkedin.com/in/jenuelganawed/"},{icon:a["n"],link:"https://github.com/BroJenuel"},{icon:a["B"],link:"https://twitter.com/broJenuel"}],i="jenuelganawed936@gmail.com"},d52e:function(e,t,n){"use strict";n("fb8b")},d9a9:function(e,t,n){},ea59:function(e,t,n){"use strict";n("d9a9")},eec8:function(e,t,n){"use strict";n("4e21")},fb8b:function(e,t,n){}});
//# sourceMappingURL=app.5578dfbd.js.map