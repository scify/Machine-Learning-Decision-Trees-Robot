(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)o=s[d],r[o]&&f.push(r[o][0]),r[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5",attrs:{id:"main"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-4"},[t.element?n("div",{staticClass:"selectionContainer"},[n("div",{staticClass:"row element-container"},[n("div",{staticClass:"img-container"},[n("img",{attrs:{src:t.element.img}})]),n("div",{staticClass:"element-info-container"},[n("div",{staticClass:"element-info"},[n("p",[t._v("Χρώμα: "),n("b",[t._v(t._s(t.element.χρώμα))])]),n("p",[t._v("Βάρος: "),n("b",[t._v(t._s(t.element.βάρος)+" γρ.")])]),n("p",[t._v("Κοτσάνι: "),n("b",[t._v(t._s(t.element.κοτσάνι?"Ναι":"Όχι"))])])])])]),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-6"},[n("button",{staticClass:"selectionBtn btn btn-lg btn-apple mb-2",attrs:{type:"button"},on:{click:function(e){t.addElementToTrainingSet(t.features[0])}}},[t._v(t._s(t.features[0]))])]),n("div",{staticClass:"col-md-6"},[n("button",{staticClass:"selectionBtn btn btn-lg btn-orange",attrs:{type:"button"},on:{click:function(e){t.addElementToTrainingSet(t.features[1])}}},[t._v(t._s(t.features[1]))])])]),n("div",{staticClass:"row text-center mt-4"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-lg btn-success",attrs:{type:"button"},on:{click:t.setRandomElementFromTrainingSet}},[t._v("Φέρε και άλλο φρούτο!")])])]),n("div",{staticClass:"row mt-4"},[n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-lg btn-info",attrs:{type:"button"},on:{click:t.resetState}},[t._v("Πάμε από την αρχή...")])])])]):t._e()]),n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"robot-container"},[n("robot-assistant",{attrs:{saying:t.robotText}}),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-md-12 text-center"},[n("button",{staticClass:"btn btn-lg btn-info robot-action",attrs:{type:"button"},on:{click:t.classify}},[t._v("Δοκίμασέ με!")])])])],1),t.trainingSet.length?n("div",{staticClass:"training-set-container mt-5"},[n("h4",[t._v("Τι έχω μάθει μέχρι τώρα:")]),t._l(t.trainingSet,function(e){return n("div",{key:e.id,staticClass:"set-item row mt-3"},[n("div",{staticClass:"col-sm-3"},[n("img",{staticClass:"img-thumb",attrs:{src:e.img}})]),n("div",{staticClass:"col-sm-9"},[n("p",{staticClass:"label"},[t._v("Αυτό είναι ένα "),n("b",[t._v(t._s(e.label))])])])])})],2):t._e()]),t.tree?n("div",{staticClass:"col-md-4"},[n("div",{staticClass:"row text-center tree-container"},[n("div",{staticClass:"col-md-12"},[n("h2",[t._v("Πώς σκέφτομαι:")]),n("div",{staticClass:"tree mt-3",domProps:{innerHTML:t._s(t.tree)}})])])]):t._e()])])},a=[],o=(n("4917"),n("c93e")),s=function(){function t(t){this.root=c({trainingSet:t.trainingSet,ignoredAttributes:n(t.ignoredAttributes),categoryAttr:t.categoryAttr||"category",minItemsCount:t.minItemsCount||1,entropyThrehold:t.entropyThrehold||.01,maxTreeDepth:t.maxTreeDepth||70})}function e(t,e){this.trees=u(t,e)}function n(t){var e={};if(t)for(var n in t){var i=t[n];e[i]=!0}return e}function i(t,e){for(var n={},i=t.length-1;i>=0;i--)n[t[i][e]]=0;for(i=t.length-1;i>=0;i--)n[t[i][e]]+=1;return n}function r(t,e){var n,r=i(t,e),a=0;for(var o in r)n=r[o]/t.length,a+=-n*Math.log(n);return a}function a(t,e,n,i){for(var r,a,o=[],s=[],c=t.length-1;c>=0;c--)r=t[c],a=r[e],n(a,i)?o.push(r):s.push(r);return{match:o,notMatch:s}}function o(t,e){var n,r=i(t,e),a=0;for(var o in r)r[o]>a&&(a=r[o],n=o);return n}t.prototype.predict=function(t){return l(this.root,t)},e.prototype.predict=function(t){return d(this.trees,t)};var s={"==":function(t,e){return t==e},">=":function(t,e){return t>=e}};function c(t){var e=t.trainingSet,n=t.minItemsCount,i=t.categoryAttr,l=t.entropyThrehold,u=t.maxTreeDepth,d=t.ignoredAttributes;if(0==u||e.length<=n)return{category:o(e,i)};var f=r(e,i);if(f<=l)return{category:o(e,i)};for(var h={},v={gain:0},m=e.length-1;m>=0;m--){var p=e[m];for(var b in p)if(b!=i&&!d[b]){var g,y=p[b];g="number"==typeof y?">=":"==";var C=b+g+y;if(!h[C]){h[C]=!0;var _=s[g],T=a(e,b,_,y),S=r(T.match,i),w=r(T.notMatch,i),x=0;x+=S*T.match.length,x+=w*T.notMatch.length,x/=e.length;var M=f-x;M>v.gain&&(v=T,v.predicateName=g,v.predicate=_,v.attribute=b,v.pivot=y,v.gain=M)}}}if(!v.gain)return{category:o(e,i)};t.maxTreeDepth=u-1,t.trainingSet=v.match;var j=c(t);t.trainingSet=v.notMatch;var O=c(t);return{attribute:v.attribute,predicate:v.predicate,predicateName:v.predicateName,pivot:v.pivot,match:j,notMatch:O,matchedCount:v.match.length,notMatchedCount:v.notMatch.length}}function l(t,e){var n,i,r,a;while(1){if(t.category)return t.category;n=t.attribute,i=e[n],r=t.predicate,a=t.pivot,t=r(i,a)?t.match:t.notMatch}}function u(e,n){for(var i=e.trainingSet,r=[],a=0;a<n;a++)r[a]=[];for(var o=i.length-1;o>=0;o--){var s=o%n;r[s].push(i[o])}var c=[];for(a=0;a<n;a++){e.trainingSet=r[a];var l=new t(e);c.push(l)}return c}function d(t,e){var n={};for(var i in t){var r=t[i],a=r.predict(e);n[a]=n[a]?n[a]+1:1}return n}var f={};return f.DecisionTree=t,f.RandomForest=e,f}(),c=s,l=n("1157"),u=n.n(l),d={components:{},data:function(){return{allData:[],trainingSet:[],element:null,prediction:null,features:[],robotText:null,tree:null,decisionTree:null}},computed:{},methods:{getTrainingSet:function(){this.trainingSet=[];var t=this;u.a.getJSON("set.json",function(e){t.allData=e.data,t.features=e.features,t.setRandomElementFromTrainingSet()})},setRandomElementFromTrainingSet:function(){var t=Math.floor(Math.random()*this.allData.length);this.element=this.allData[t]},addElementToTrainingSet:function(t){this.trainingSet.push(Object(o["a"])({},this.element,{id:Math.floor(1e3*Math.random()+1),label:t})),this.train()},resetState:function(){this.getTrainingSet(),this.prediction=null,this.robotText="Γεία! Είμαι ο Θαλής! Εκπαίδευσέ με για να γίνω σοφότερος!",this.tree=null},train:function(){if(this.trainingSet.length){var t={trainingSet:this.trainingSet,categoryAttr:"label",ignoredAttributes:["img","id"]};this.decisionTree=new c.DecisionTree(t),this.tree=this.treeToHtml(this.decisionTree.root),this.robotText="Γιαμ γιαμ! Νόστιμα τα δεδομένα!"}else this.robotText="Δεν έχω αρκετά δεδομένα για να μάθω..."},classify:function(){this.decisionTree?(this.prediction=this.decisionTree.predict(this.element),this.robotText=this.prediction?"Χμ... μήπως είναι ένα <b>"+this.prediction+"</b>?":"Πραγματικά δεν ξέρω τι είναι αυτό..."):this.robotText="Δεν έχω αρκετά δεδομένα για να κάνω πρόβλεψη."},treeToHtml:function(t){return t.category?["<ul>","<li>",'<a href="#">',"<b>",t.category,"</b>","</a>","</li>","</ul>"].join(""):["<ul>","<li>",'<a href="#">',"<b>",t.attribute," ",t.predicateName," ",t.pivot," ?</b>","</a>","<ul>","<li>",'<a href="#">Ναι</a>',this.treeToHtml(t.match),"</li>","<li>",'<a href="#">Οχι</a>',this.treeToHtml(t.notMatch),"</li>","</ul>","</li>","</ul>"].join("")}},mounted:function(){this.resetState()}},f=d,h=(n("5c0b"),n("2877")),v=Object(h["a"])(f,r,a,!1,null,null,null);v.options.__file="App.vue";var m=v.exports,p=n("9f7b"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"col-md-6"},[n("p",{staticClass:"robot-saying speech-bubble",domProps:{innerHTML:t._s(t.saying)}})])])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6"},[n("div",{staticClass:"robot"},[n("img",{attrs:{src:"robot.png"}})])])}],y={props:["saying"],components:{},data:function(){return{}},computed:{},methods:{},mounted:function(){}},C=y,_=Object(h["a"])(C,b,g,!1,null,null,null);_.options.__file="Robot-Assistant.vue";var T=_.exports;i["a"].use(p["a"]),i["a"].component("robot-assistant",T),new i["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("2856"),r=n.n(i);r.a}});
//# sourceMappingURL=app.6ee9bcdf.js.map