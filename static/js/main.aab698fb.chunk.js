(window.webpackJsonpreactmatchinggame=window.webpackJsonpreactmatchinggame||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(6),r=a.n(s),l=(a(22),a(23),a(24),a(10)),o=a(11),i=a(16),u=a(12),m=a(8),d=a(15);function h(e){var t=e.card,a=e.backImage,n=e.onClick;return c.a.createElement("div",{onClick:t.flipped?void 0:n,className:"memory-card ".concat(t.matched?"matched":""," ").concat(t.flipped?"flip":"")},t.flipped?t.useImg?c.a.createElement("img",{className:"img-card",src:t.img,alt:t.txt}):c.a.createElement("span",{className:"name-card"},t.txt):c.a.createElement("img",{className:"back-card",src:a,alt:"Memory Card"}))}var f=a(7),p=a(14);function g(e){var t=e.sendResults;return c.a.createElement(f.a.Dialog,null,c.a.createElement(f.a.Header,{closeButton:!0},c.a.createElement(f.a.Title,null,"Modal title")),c.a.createElement(f.a.Body,null,c.a.createElement("div",{style:{Color:"black"}},"Please select a source",c.a.createElement("select",null,c.a.createElement("option",{value:"fearless"},"Fearless"),c.a.createElement("option",{value:"presidents"},"Presidents")))),c.a.createElement(f.a.Footer,null,c.a.createElement(p.a,{onClick:function(){return t({source:"fearlesss"})}},"Start")))}var v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).sendResults=a.sendResults.bind(Object(m.a)(a)),a.state={num_matches:8,cards:[],winner:!1,turns:0,matches:0,activeCard:null,index:null,selectedSource:"fearless",backImage:"/img/fearless.png"},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"sendResults",value:function(e){var t=this;this.setState({selectedSource:e},(function(){console.log("Set selectedSource to ".concat(t.state.selectedSource))}))}},{key:"setupGame",value:function(){var e=this;fetch("".concat(window.location,"/static/media/").concat(this.state.selectedSource,".json")).then((function(e){return e.json()})).then((function(t){console.log(t);for(var a=t.cards,n=[].fill(null,e.state.num_matches),c=0;c<e.state.num_matches;c++){var s=Math.floor(Math.random()*a.length),r=a[s];r.useImg=!0,r.flipped=!1,n.push(r),(r=Object.assign({},r)).useImg=!1,n.push(r),a.splice(s,1)}!function(e){var t,a,n=e.length;for(;n;)a=Math.floor(Math.random()*n--),t=e[n],e[n]=e[a],e[a]=t}(n),e.setState({cards:n})}))}},{key:"componentDidMount",value:function(){this.setupGame()}},{key:"handleClick",value:function(e){var t=this;if(console.log(this.state),!this.state.transition){var a=this.state.cards.slice();a[e].flipped=!0,this.setState({cards:a,transition:!0},(function(){var e,a=t.state.cards.slice(),n=a.filter((function(e){return e.flipped&&!e.matched})),c=t.state.matches,s=t.state.turns,r=0;2===n.length&&(s++,n[0].txt===n[1].txt?(n.forEach((function(e){return e.matched=!0})),c++):(r=1e3,n.forEach((function(e){return e.flipped=!1})))),(e=r,new Promise((function(t){return setTimeout(t,e)}))).then((function(){t.setState({matches:c,turns:s,cards:a,transition:!1})}))}))}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"memory-game"},this.state.selectedSource?c.a.createElement(c.a.Fragment,null,this.state.cards.map((function(t,a){return c.a.createElement(h,{card:t,backImage:e.state.backImage,onClick:function(){return e.handleClick(a)},key:"".concat(t.useImg?"pic":"name","-").concat(t.img)})}))):c.a.createElement(g,{sendResults:this.sendResults}))}}]),t}(c.a.Component);a(27);var k=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.aab698fb.chunk.js.map