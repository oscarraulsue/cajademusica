(this.webpackJsonpcajademusica=this.webpackJsonpcajademusica||[]).push([[0],{12:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var r=t(1),s=t.n(r),c=t(7),n=t.n(c),d=t(2),i=t(3),o=t(5),p=t(4),m=(t(12),t(0)),l=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(){var e;Object(d.a)(this,t);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=a.call.apply(a,[this].concat(s))).handleClick=function(){e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id)},e.handleKeydown=function(a){a.keyCode===e.props.letra.charCodeAt()&&(e.audio.play(),e.audio.currentTime=0,e.props.handleDisplay(e.props.id))},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeydown),window.focus()}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeydown)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick,children:[Object(m.jsx)("button",{className:"btn btn-danger",children:this.props.letra}),Object(m.jsx)("audio",{id:this.props.letra,className:"clip",src:this.props.src,ref:function(a){return e.audio=a}})]})}}]),t}(r.Component),u=[{letra:"Q",id:"Heater-1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{letra:"W",id:"Heater-2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{letra:"E",id:"Heater-3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{letra:"A",id:"Heater-4",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{letra:"S",id:"Clap",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{letra:"D",id:"Open-HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{letra:"Z",id:"Kick-n'-Hat",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{letra:"X",id:"Kick",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{letra:"C",id:"Closed-HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=function(e){Object(o.a)(t,e);var a=Object(p.a)(t);function t(e){var r;return Object(d.a)(this,t),(r=a.call(this,e)).handleDisplay=function(e){return r.setState({display:e})},r.state={display:""},r}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{id:"drum-machine",children:[Object(m.jsx)("div",{id:"display",children:this.state.display}),Object(m.jsx)("div",{id:"drum-pads",children:u.map((function(a){return Object(m.jsx)(l,{id:a.id,letra:a.letra,src:a.src,handleDisplay:e.handleDisplay},a.id)}))})]})})}}]),t}(r.Component);n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.08e53483.chunk.js.map