(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{161:function(e,t,a){var n=a(20).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(13)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},98:function(e,t,a){"use strict";a.r(t);a(161);var n=a(0),r=a.n(n),o=a(146),i=a(143),c=a.n(i),m=a(99),s=a.n(m),l="See the demos built with Muuri-react";function p(e){switch(e){case"Demo":return"Demo showing Muuri-react features.";case"Example":return"Example showing how to implement a single Muuri-react functionality";case"Implementation":return"Implementation of a functionality with an external library.";default:return""}}var u=[{type:"Demo",name:"Grid",id:"1czo5"},{type:"Demo",name:"Kanban",id:"zmypd"},{type:"Demo",name:"Dashboard",id:"penbe"},{type:"Demo",name:"Pokedex",id:"swtf9"},{type:"Example",name:"Drag",id:"xlix7"},{type:"Example",name:"Scroll",id:"91ck8"},{type:"Example",name:"Sort",id:"959o8"},{type:"Example",name:"Refresh",id:"mz4di"},{type:"Implementation",name:"Resize",id:"ycldc"},{type:"Implementation",name:"Media-query",id:"q6sy6"}].map((function(e){return{type:e.type,title:e.type+" - "+e.name,description:p(e.type),preview:"https://screenshots.codesandbox.io/"+e.id.toLowerCase()+".png",website:"https://"+e.id+".csb.app/",source:"https://codesandbox.io/s/muuri-react-"+e.name.toLowerCase()+"-"+e.id,fbOpenSource:!1,pinned:!1}}));t.default=function(){return r.a.createElement(o.a,{title:"Showcase",description:l},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"text--center margin-bottom--xl"},r.a.createElement("h1",{style:{fontSize:"46px"}},"Showcase"),r.a.createElement("p",{style:{fontSize:"25px"}},l)),r.a.createElement("div",{className:"row"},u.map((function(e){return r.a.createElement("div",{key:e.title,className:"col col--4 margin-bottom--lg"},r.a.createElement("div",{className:c()("card shadow",s.a.showcaseCard)},r.a.createElement("div",{className:"card__image"},r.a.createElement("img",{src:e.preview,alt:e.title})),r.a.createElement("div",{className:"card__body"},r.a.createElement("div",{className:"avatar"},r.a.createElement("div",{className:"avatar__intro margin-left--none"},r.a.createElement("h4",{className:"avatar__name"},e.title),r.a.createElement("small",{className:"avatar__subtitle"},e.description)))),(e.website||e.source)&&r.a.createElement("div",{className:"card__footer"},r.a.createElement("div",{className:"button-group button-group--block"},e.website&&r.a.createElement("a",{className:"button button--small button--secondary button--block",href:e.website,target:"_blank",rel:"noreferrer noopener"},"Website"),e.source&&r.a.createElement("a",{className:"button button--small button--secondary button--block",href:e.source,target:"_blank",rel:"noreferrer noopener"},"Source")))))})))))}}}]);