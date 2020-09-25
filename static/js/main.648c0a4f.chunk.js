(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{52:function(e,t,a){e.exports=a(84)},58:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),c=a.n(s),l=(a(57),a(58),a(14)),o=a(15),i=a(18),m=a(16),u=a(3),d=a(20);function f(){return r.a.createElement("div",{className:"text-center mt-5 "},"Error:404 Page not found",r.a.createElement("button",{className:"btn btn-lg border ml-5 btn-dark"},r.a.createElement(d.b,{to:"/"},"Go To Home")))}var p=a(34),h=a(33),w=a.n(h),v=a(47),E=a(13),b=a(29),N=function(e){return e.children},g=a(48),y=a.n(g),S=a(49),O=a.n(S);function j(e){var t="https://source.unsplash.com/300x2".concat(e.index+10);return r.a.createElement("div",{className:"col-md-4",style:{marginBottom:"2rem"}},r.a.createElement("div",{className:"newss__box"},r.a.createElement("img",{className:"newss__box-img",src:t,alt:"300x2".concat(e.index+10)}),r.a.createElement("div",{className:"news__text"},r.a.createElement("h5",{className:"newss__title"},e.item.item.headline[0].length<20?"".concat(e.item.item.headline[0]):"".concat(e.item.item.headline[0].substring(0,55),"...")),r.a.createElement("p",{className:"newss__subtitle"},"Publisher :"," ",r.a.createElement("span",null,e.item.story["author-name"]))),r.a.createElement("button",{onClick:function(){e.showModalInfo(e.item)},className:"news_buttons"},"View Story"),r.a.createElement("span",{className:"videoSidebar__button"},e.item.liked?r.a.createElement(y.a,{fontSize:"large",onClick:function(t){e.likeDisable||e.removePrefer(e.index)}}):r.a.createElement(O.a,{fontSize:"large",onClick:function(t){e.likeDisable||e.addPrefer(e.index)}}))))}var k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.activeNews;return r.a.createElement("div",null,e?r.a.createElement("div",null,0!==e.length&&r.a.createElement("div",{className:"active-news"},r.a.createElement("img",{src:"https://source.unsplash.com/300x299",alt:e.headline,className:"active-news__img"}),r.a.createElement("h3",{className:"active-news__title"},e.story.headline),r.a.createElement("p",null,r.a.createElement("b",null,e.story.subheadline)),r.a.createElement("p",{className:"lead active-website"},"Website :",r.a.createElement("span",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:e.story.url},"Read More"))),r.a.createElement("h5",{className:"active-news__publisher"},"Publisher:",r.a.createElement("span",null,e.story["author-name"])))," "):r.a.createElement("h1",null,"Loading..."))}}]),a}(n.Component),x=a(104),_=a(103);function P(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var C=Object(_.a)((function(e){return{paper:{position:"absolute",backgroundColor:"white",border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),L=function(e){var t=e.news,a=e.addPrefer,s=e.removePrefer,c=e.preferNews,l=e.filteredNews,o=e.searchString,i=r.a.useState(P),m=Object(b.a)(i,1)[0],u=Object(n.useState)(!1),d=Object(b.a)(u,2),f=d[0],p=d[1],h=Object(n.useState)(null),w=Object(b.a)(h,2),v=w[0],E=w[1],g=C(),y=function(e){E(e),p(!0)};return r.a.createElement(N,null,r.a.createElement(x.a,{open:f,onClose:function(){p(!1)}},r.a.createElement("div",{style:m,className:g.paper},r.a.createElement(k,{activeNews:v}))),r.a.createElement(N,null,r.a.createElement("div",{className:"container"},""!==o?r.a.createElement(N,null,r.a.createElement("h3",{className:"text-center"},"Filtered News"),r.a.createElement("div",{className:"row"},l.map((function(e,t){return r.a.createElement(j,{key:e.id,index:t,likeDisable:""!==o,item:e,showModalInfo:y,addPrefer:a,removePrefer:s})})))):r.a.createElement(N,null,c[0]&&r.a.createElement("h3",{className:"text-center"},"Prefered News"),r.a.createElement("div",{className:"row"},c.map((function(e,t){return r.a.createElement(j,{key:e.id,index:t,item:e,showModalInfo:y,addPrefer:a,removePrefer:s})}))),r.a.createElement("h3",{className:"text-center"},"Simple News"),r.a.createElement("div",{className:"row"},t.map((function(e,t){return r.a.createElement(j,{key:e.id,index:t,item:e,showModalInfo:y,addPrefer:a,removePrefer:s})})))))))},I=a(50),D=a.n(I),A=function(e){return r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.getNews(t)},style:{marginBottom:"2rem"}},r.a.createElement("input",{className:"form__input",type:"text",name:"news",placeholder:"Press Enter to search"}),r.a.createElement("button",{className:"form__button"},"Search"))},M=(a(83),function(){return r.a.createElement("div",{className:"Loader"},"Loading...")}),J=function(e){if(!e)return null;try{var t=localStorage.getItem(e);return t?JSON.parse(t):null}catch(a){return null}},z=function(e,t){e||console.error("Error: Key is missing");try{localStorage.setItem(e,JSON.stringify(t))}catch(a){console.error(a)}},B=function(e){e||console.error("Error: Key is missing");try{localStorage.removeItem(e)}catch(t){console.error(t)}},R=[{path:"",name:"Dashboard",component:function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={news:[],preferencedNews:[],loading:!1,filteredNews:[],searchString:""},e.getNews=function(t){var a;e.setState({loading:!0}),t.preventDefault();var n=t.target.elements.news.value,r=e.state.news.filter((function(e){return e.story.headline.trim().replace(/\s+/g,"").toLowerCase().includes(n.toLowerCase())||e.story.headline.trim().toLowerCase().includes(n.toLowerCase())})),s=null===(a=e.state.preferencedNews)||void 0===a?void 0:a.filter((function(e){return e.story.headline.trim().replace(/\s+/g,"").toLowerCase().includes(n.toLowerCase())||e.story.headline.trim().toLowerCase().includes(n.toLowerCase())})),c=[].concat(Object(E.a)(s),Object(E.a)(r));e.setState({loading:!1,filteredNews:Object(E.a)(c),searchString:n})},e.addPreferencedNews=function(t){console.log(t);var a=Object(E.a)(e.state.preferencedNews),n=Object(E.a)(e.state.news),r=n.splice(t,1);r[0].liked=!0,a.push(r[0]),e.setState({news:n,preferencedNews:a}),e.setLocalStorage(n,a)},e.removePreferencedNews=function(t){console.log(t);var a=Object(E.a)(e.state.preferencedNews),n=Object(E.a)(e.state.news),r=a.splice(t,1);r[0].liked=!1,n.unshift(r[0]),e.setState({news:n,preferencedNews:a}),e.setLocalStorage(n,a)},e}return Object(o.a)(a,[{key:"setLocalStorage",value:function(e,t){B("news"),B("preference"),z("news",e),z("preference",t)}},{key:"componentDidMount",value:function(){var e=Object(v.a)(w.a.mark((function e(){var t,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,J("news");case 3:return t=e.sent,e.next=6,J("preference");case 6:if(a=e.sent,t){e.next=9;break}return e.abrupt("return",this.getNewsItems());case 9:return e.abrupt("return",this.setState({news:t,preferencedNews:a,loading:!1}));case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNewsItems",value:function(){var e=this;console.log("getNewsItems"),D.a.get("https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json").then((function(t){var a=[];t.data.items.forEach((function(e){return a.push(Object(p.a)(Object(p.a)({},e),{},{liked:!1}))})),e.setState({news:a,loading:!1}),e.setLocalStorage(a,e.state.preferencedNews)})).catch((function(t){console.log(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state.news;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",{className:"App-title"},"News Search")),r.a.createElement(A,{getNews:this.getNews}),this.state.loading?r.a.createElement(M,null):this.state.news.length<1?r.a.createElement("p",null,"News can't be loaded"):r.a.createElement(L,{filteredNews:this.state.filteredNews,news:e,searchString:this.state.searchString,preferNews:this.state.preferencedNews,addPrefer:this.addPreferencedNews,removePrefer:this.removePreferencedNews})))}}]),a}(n.Component),layout:"/"}],K=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).getRoutes=function(e){return e.map((function(e,t){return"/"===e.layout?r.a.createElement(u.a,{path:e.layout+e.path,component:e.component,key:t}):null}))},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(u.c,null,this.getRoutes(R),r.a.createElement(u.a,{component:f}))}}]),a}(n.Component);var F=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};c.a.render(r.a.createElement(d.a,{basename:"/"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",{className:"text-center m-5 text-uppercase"},"Loading...")},r.a.createElement(F,null))),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.648c0a4f.chunk.js.map