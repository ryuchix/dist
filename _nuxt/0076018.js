(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{378:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={url:"https://app.ragnarokmobile.net/",getMonsters:"https://app.ragnarokmobile.net/api/monsters",getMonster:"https://app.ragnarokmobile.net/api/monster/",filterMonsters:"https://app.ragnarokmobile.net/api/filter-monsters",getEquipments:"https://app.ragnarokmobile.net/api/equipments",getEquipment:"https://app.ragnarokmobile.net/api/equipment/",filterEquipments:"https://app.ragnarokmobile.net/api/filter-equipments",getItem:"https://app.ragnarokmobile.net/api/item/",getItems:"https://app.ragnarokmobile.net/api/items",getCard:"https://app.ragnarokmobile.net/api/card/",getCards:"https://app.ragnarokmobile.net/api/cards",filterCards:"https://app.ragnarokmobile.net/api/filter-cards",getHeadwear:"https://app.ragnarokmobile.net/api/headwear/",getHeadwears:"https://app.ragnarokmobile.net/api/headwears",filterHeadwears:"https://app.ragnarokmobile.net/api/filter-headwears",getFurniture:"https://app.ragnarokmobile.net/api/furniture/",getFurnitures:"https://app.ragnarokmobile.net/api/furnitures",filterFurnitures:"https://app.ragnarokmobile.net/api/filter-furnitures",getPet:"https://app.ragnarokmobile.net/api/pet/",getPets:"https://app.ragnarokmobile.net/api/pets",filterPets:"https://app.ragnarokmobile.net/api/filter-pets",getBlog:"https://app.ragnarokmobile.net/api/blog/",getBlogs:"https://app.ragnarokmobile.net/api/blogs",getSearch:"https://app.ragnarokmobile.net/api/search/",getWeeklies:"https://app.ragnarokmobile.net/api/getWeeklies"}},494:function(e,t,n){"use strict";n.r(t);n(22);var r=n(97),o=n.n(r),l=n(378),d={name:"EndlessTower",layout:"default",head:function(){var e="Endless Tower SEA and Global| Ragnarok Mobile - Guide, Quest, Build and Database for Ragnarok M Eternal Love",t="https://www.ragnarokmobile.net/endless-tower",n="Endless Tower Floor Monsters List, Endless Tower SEA Global MVP, Endless Tower Mini. Endless Tower resets every Monday at 6PM GMT+8 on SEA Server.";return{title:e,meta:[{hid:"description",name:"description",content:n},{hid:"keywords",name:"keywords",content:"ragnarok mobile endless tower SEA and Global, ROM, ROM Exchange price, market finance, Ragnarok, online, RO, ragnarok mobile, ragnarok m, ragnarok eternal love, database, guide, job, quest, headgear quest, monster drops, item information, skill description, skill simulator, stat calculator, ragnarok tools, ragnarok mobile english"},{hid:"og:title",name:"og:title",content:e},{hid:"og:description",name:"og:description",content:n},{hid:"og:url",name:"og:url",content:t},{hid:"og:image",name:"og:image",content:"https://www.ragnarokmobile.net/img/louyang.webp"},{hid:"twitter:description",name:"twitter:description",content:n},{hid:"twitter:title",name:"twitter:title",content:e}],link:[{rel:"canonical",href:t}]}},data:function(){return{loading:!0,result:[]}},mounted:function(){this.getResults()},methods:{getResults:function(){var e=this;this.loading=!0,o.a.get(l.a.getWeeklies).then((function(t){e.result=t.data})).catch((function(e){return console.log(e)})).finally((function(){return e.loading=!1}))}}},m=n(56),h=n(68),c=n.n(h),v=n(373),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"privacy"}},[n("v-app",[n("div",{staticClass:"content"},[n("h2",{staticClass:"mb-3"},[e._v("Endless Tower SEA (ET)")]),e._v(" "),n("p",[e._v("Endless Tower resets every Monday at 6PM GMT+8 on SEA and Global Server. Selected floors consists of MVPS and Mini bosses and they are based on the last digit of the channel you are in. Example, if you are in PH25, all channels that ends in 5 like 5, 15, 25, 35 etc will have the same monsters.")]),e._v(" "),n("h3",[e._v(e._s(e.result.date))]),e._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:e.result.et,alt:"Endless Tower MVP"}}),e._v(" "),n("br"),n("br"),e._v(" "),0!=e.result.etmini?n("img",{staticStyle:{width:"100%"},attrs:{src:e.result.etmini,alt:"Endless Tower Mini"}}):e._e(),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",{staticClass:"mb-3"},[e._v("Valhalla Ruins (VR) Maps")]),e._v(" "),n("p",[n("strong",[e._v("New Guild Instance")])]),e._v(" "),n("p",[e._v("- Silver Medal is not required for entering Guild Instance")]),e._v(" "),n("p",[e._v("- Restriction of minimum Guild Level 2 to enter Guild Instance is lifted")]),e._v(" "),n("p",[e._v("- 5 different levels of instances are combined into 1, and entry level is changed to 60")]),e._v(" "),n("p",[e._v("- The way to enter the dungeon remains the same. You can enter via Ruins Entrance in Guild. The guild teammates of the same team can enter the same dungeon through the entrance")]),e._v(" "),n("p",[e._v("- If the team got wiped, the dungeon will be reset, but the defeated Mini/MVP will not be refreshed")]),e._v(" "),n("br"),e._v(" "),n("p",[e._v("- Map contains normal monsters and 5 Mini/MVP. Defeating of Mini/MVP gives corresponding rewards. Rewards are account limited and only obtainable once per week")]),e._v(" "),n("p",[e._v("- Reward Adjustment: Rewards will be doubled for defeating Mini/MVP after optimization, and two random rewards on top of the double rewards will be given as well")]),e._v(" "),n("br"),n("br"),e._v(" "),0!=e.result.etglobal?n("div",[n("h2",{staticClass:"mb-3"},[e._v("Endless Tower Global (ET)")]),e._v(" "),n("p",[e._v("Endless Tower resets every Monday at 6PM GMT+8 on SEA and Global Server. Selected floors consists of MVPS and Mini bosses and they are based on the last digit of the channel you are in. Example, if you are in PH25, all channels that ends in 5 like 5, 15, 25, 35 etc will have the same monsters.")]),e._v(" "),n("h3",[e._v(e._s(e.result.date))]),e._v(" "),n("img",{staticStyle:{width:"100%"},attrs:{src:e.result.etglobal,alt:"Endless Tower Global MVP"}}),e._v(" "),n("br"),n("br"),e._v(" "),0!=e.result.etglobalmini?n("img",{staticStyle:{width:"100%"},attrs:{src:e.result.etglobalmini,alt:"Endless Tower Global Mini"}}):e._e()]):e._e(),e._v(" "),n("br"),n("br"),e._v(" "),n("p",[n("em",[e._v("Images are not ours. Credit to original uploader. Thanks")])]),e._v(" "),n("div",{staticClass:"comments"},[n("div",{staticClass:"fb-like",staticStyle:{"margin-bottom":"5px"},attrs:{"data-href":"https://ragnarokmobile.net/endless-tower","data-layout":"standard","data-action":"like","data-size":"small","data-show-faces":"true","data-share":"true"}}),e._v(" "),n("div",{staticClass:"pad30"}),e._v(" "),n("div",{staticClass:"fb-comments",attrs:{"data-href":"https://ragnarokmobile.net/endless-tower","data-numposts":"5","data-width":"100%"}})])])])],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VApp:v.a})}}]);