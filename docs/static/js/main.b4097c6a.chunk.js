(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{18:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty.75509f2e.png"},19:function(e,a,t){e.exports=t(36)},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(15),l=t.n(n),s=t(5),i=(t(24),t(12)),m=t(6);t(25),t(26);var o=function(e){return c.a.createElement("form",{className:"Filter",onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",null,c.a.createElement("input",{className:"Filter__text",type:"text",placeholder:"Search a character",name:"search",value:e.value,onChange:function(a){a.preventDefault();var t={name:"search",value:a.target.value};e.handleInputText(t)}})))};t(27);var u=function(e){return c.a.createElement(s.b,{to:"/character/".concat(e.character.id)},c.a.createElement("li",{className:"CharacterCard"},c.a.createElement("img",{className:"CharacterCard__image",src:e.character.image,alt:e.character.name,title:"Picture of ".concat(e.character.name)}),c.a.createElement("h3",{className:"CharacterCard__name"},e.character.name),c.a.createElement("p",{className:"CharacterCard__species"},e.character.species)))};t(33);var h=function(e){var a=e.characters.map((function(e){return c.a.createElement(u,{key:e.id,character:e})}));return a.length>0?c.a.createElement("section",{className:"CharacterList-section"},c.a.createElement("ul",{className:"CharacterList"},a)):c.a.createElement("div",{className:"CharacterList__notfound"},c.a.createElement("p",null,"There is no any character that matches with the word "),c.a.createElement("span",{className:"CharacterList__notfound--word"},' "',e.searchFilter,'"'))};t(34);var f=function(e){return void 0===e.character?c.a.createElement("div",{className:"CharacterDetail"},c.a.createElement(s.b,{className:"CharacterDetail__link",to:"/"},"Back ",c.a.createElement("i",{className:"fas fa-chevron-circle-left"})),c.a.createElement("div",{className:"CharacterDetail__info--notFound"},c.a.createElement("img",{className:"notFound-message",src:"https://fontmeme.com/permalink/200423/8c91dbb30799b4d9be208a09e5ecf9b4.png",alt:"fuente-senyum-sokmo-deh",border:"0"}),c.a.createElement("img",{src:"https://img.icons8.com/cute-clipart/64/000000/nothing-found.png",alt:"Character not found"}))):c.a.createElement("div",{className:"CharacterDetail"},c.a.createElement(s.b,{className:"CharacterDetail__link",to:"/"},"Back ",c.a.createElement("i",{className:"fas fa-chevron-circle-left"})),c.a.createElement("div",{className:"CharacterDetail__info"},c.a.createElement("img",{className:"CharacterDetail__image",src:e.character.image,alt:"Foto de ".concat(e.character.name)}),c.a.createElement("div",null,c.a.createElement("h3",null,e.character.name),c.a.createElement("p",null,"Status: ","Alive"===e.character.status?c.a.createElement("i",{className:"fas fa-heart"}):"Dead"===e.character.status?c.a.createElement("i",{className:"fas fa-skull-crossbones"}):c.a.createElement("i",{className:"fas fa-question"})),c.a.createElement("p",null,"Species: ","Alien"===e.character.species?c.a.createElement("i",{className:"fab fa-reddit-alien"}):c.a.createElement("i",{className:"fas fa-user-alt"})),c.a.createElement("p",null,"Origin: ",e.character.planet),c.a.createElement("p",null,"Episodes: ",e.character.episodes))))},d=t(18),p=t.n(d);t(35);var E=function(){return c.a.createElement("header",{className:"Header"},c.a.createElement("img",{className:"Header__image",src:p.a,alt:"Rick and Morty",title:"Rick and Morty"}))};var v=function(){var e=Object(r.useState)([]),a=Object(i.a)(e,2),t=a[0],n=a[1],l=Object(r.useState)(""),s=Object(i.a)(l,2),u=s[0],d=s[1];Object(r.useEffect)((function(){fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id.toString(),name:e.name,status:e.status,species:e.species,image:e.image,planet:e.origin.name,episodes:e.episode.length}})).sort((function(e,a){return e.name.localeCompare(a.name)}))})).then((function(e){return n(e)}))}),[]);var p=t.filter((function(e){return e.name.toUpperCase().includes(u.toUpperCase())}));return c.a.createElement("div",{className:"App"},c.a.createElement(E,null),c.a.createElement(m.c,null,c.a.createElement(m.a,{exact:!0,path:"/"},c.a.createElement(o,{handleInputText:function(e){d(e.value)},value:u}),c.a.createElement(h,{characters:p,searchFilter:u})),c.a.createElement(m.a,{exact:!0,path:"/character/:characterId",render:function(e){var a=e.match.params.characterId,r=t.find((function(e){return e.id===a}));return c.a.createElement(f,{character:r})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(s.a,null,c.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.b4097c6a.chunk.js.map