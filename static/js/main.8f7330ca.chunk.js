(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(4),r=n(5),o=n(7),p=n(6),i=n(1),d=n.n(i),u=n(0),l=function(e){Object(o.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handleKeyUp=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleKeyUp)}},{key:"render",value:function(){var e=this.state.pressedKey;return Object(u.jsx)("div",{className:"App",children:e?Object(u.jsx)("p",{className:"App__message",children:"The last pressed key is [".concat(e,"]")}):Object(u.jsx)("p",{className:"App__message",children:"Nothing was pressed yet"})})}}]),n}(d.a.Component);n(13);a.a.render(Object(u.jsx)(l,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8f7330ca.chunk.js.map