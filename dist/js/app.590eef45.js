(function(e){function t(t){for(var n,r,o=t[0],d=t[1],c=t[2],u=0,m=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var d=a[o];0!==i[d]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},s=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0eea":function(e,t,a){},"350d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("5530"),i=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),s=a("7212"),r=a.n(s),o=a("7bb1"),d=a("4c93"),c=a("bc3a"),l=a.n(c),u=a("a7fe"),m=a.n(u),v=a("f13c"),f=a.n(v),p=a("fe3c"),h=a.n(p),g=a("0284"),b=a.n(g),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"mainContainer"},[a("TopBanner",{attrs:{id:"topBanner"}}),a("ScrollTip",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#weddingForm",duration:1200},expression:"{ element: '#weddingForm', duration: 1200 }"}]}),a("WeddingForm",{attrs:{id:"weddingForm"},on:{sendForm:e.onSendForm,sendForm_success:e.onSendForm_success,sendForm_error:e.onSendForm_error}}),a("ScrollTip2",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{element:"#topBanner",duration:2e3},expression:"{ element: '#topBanner', duration: 2000 }"}]}),a("BottomBanner"),a("transition",{attrs:{name:"fade"}},[a("ThanksPop",{directives:[{name:"show",rawName:"v-show",value:e.showThanksPop,expression:"showThanksPop"}],attrs:{isSending:e.isSending},on:{clozPop:e.clozPop}})],1),a("div",{attrs:{id:"bottom"}})],1)])},_=[],C=(a("ac1f"),a("466d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"topBanner"},[a("Parallax",{attrs:{"speed-factor":.5,breakpoint:"(min-width: 80px)",direction:"down"}},[a("div",{staticClass:"bg6 bg screenSize"})]),a("Parallax",{attrs:{"speed-factor":.4,breakpoint:"(min-width: 80px)",direction:"down"}},[a("div",{staticClass:"bg5 bg screenSize"})]),a("Parallax",{attrs:{"speed-factor":.2,breakpoint:"(min-width: 80px)",direction:"down"}},[a("div",{staticClass:"bg4 bg screenSize"})]),a("swiper",{staticClass:"banner screenSize",attrs:{options:e.swiperOption}},[a("div",{staticClass:"swiper-slide s1"}),a("div",{staticClass:"swiper-slide s2"}),a("div",{staticClass:"swiper-slide s3"}),a("div",{staticClass:"swiper-slide s4"})]),a("div",{staticClass:"bg3 bg screenSize"}),a("div",{staticClass:"bg2 bg screenSize"}),a("div",{staticClass:"bg1 bg screenSize"}),a("div",{staticClass:"name n1 screenSize"}),a("div",{staticClass:"name n2 screenSize"})],1)}),x=[],D=a("540a"),P=a.n(D),y={name:"TopBanner",components:{Parallax:P.a},data:function(){return{swiperOption:{loop:!0,direction:"vertical",speed:1e3,roundLengths:!0,autoplay:{delay:1200}}}}},k=y,N=(a("e1d0"),a("2877")),S=Object(N["a"])(k,C,x,!1,null,null,null),T=S.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},O=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scrollTip"},[a("div",{staticClass:"tip"},[a("h4",{staticClass:"txt"},[e._v("往下拉")]),a("div",{staticClass:"arr"}),a("h4",{staticClass:"txt"},[e._v("填問券")])])])}],$={name:"ScrollTip",data:function(){return{}}},j=$,B=(a("e700"),Object(N["a"])(j,F,O,!1,null,"5bde15d3",null)),q=B.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"scrollTip"},[a("div",{staticClass:"tip"},[a("h4",{staticClass:"txt"},[e._v("回到")]),a("div",{staticClass:"arr"}),a("h4",{staticClass:"txt"},[e._v("頂端")])])])}],A={name:"ScrollTip2",data:function(){return{}}},E=A,V=(a("8151"),Object(N["a"])(E,M,z,!1,null,"1d729a24",null)),W=V.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.showLog?a("div",{staticClass:"data"},[e._v(e._s(JSON.stringify(e.formData,null,2)))]):e._e(),a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit,i=t.invalid;return[a("form",{on:{submit:function(t){return t.preventDefault(),n(e.onSubmit)}}},[a("div",{staticClass:"q_box",attrs:{id:"attend"}},[a("div",{staticClass:"subTitle"},[e._v("首先")]),a("div",{staticClass:"title"},[e._v("(還)會來嗎")]),a("ValidationProvider",{attrs:{rules:"required_attend"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("div",{staticClass:"d-f"},[a("div",{staticClass:"btnBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.attend,expression:"formData.attend"}],attrs:{type:"radio",value:"yes",id:"attend_yes"},domProps:{checked:e._q(e.formData.attend,"yes")},on:{change:function(t){return e.$set(e.formData,"attend","yes")}}}),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#whosFriend",expression:"'#whosFriend'"}],staticClass:"btn",on:{click:function(t){return e.onAttend("yes")}}},[e._v("還會啦")])]),a("div",{staticClass:"btnBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.attend,expression:"formData.attend"}],attrs:{type:"radio",value:"no",id:"attend_no"},domProps:{checked:e._q(e.formData.attend,"no")},on:{change:function(t){return e.$set(e.formData,"attend","no")}}}),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#attend",expression:"'#attend'"}],staticClass:"btn",on:{click:function(t){return e.onAttend("no")}}},[e._v("書面申請不能到場")])])]),a("div",{staticClass:"errorMsg"},[e._v(e._s(n[0]))])]}}],null,!0)}),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"no"==e.formData.attend,expression:"formData.attend=='no'"}],staticClass:"d-f f-c"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.resonCantCome,expression:"formData.resonCantCome"}],attrs:{id:"resonCantCome",placeholder:"你幹嘛不來你為什麼不來哪有那麼重要的事你騙我你幹嘛不來你幹嘛不來幹嘛不來你幹嘛不來你幹嘛不來你為什麼不來哪有那麼重要的事你騙我你幹嘛不來你幹嘛不來幹嘛不來你幹嘛不來你幹嘛不來你為什麼不來哪有那麼重要的事你騙我你幹嘛不來你幹嘛不來幹嘛不來你幹嘛不來"},domProps:{value:e.formData.resonCantCome},on:{input:function(t){t.target.composing||e.$set(e.formData,"resonCantCome",t.target.value)}}}),a("h3",{staticClass:"mt-1 goldTxt"},[e._v("說啊 嗚嗚嗚嗚")])])])],1),a("div",{staticClass:"q_box",attrs:{id:"whosFriend"}},[a("div",{staticClass:"subTitle"},[e._v("事關有沒餅")]),a("div",{staticClass:"title"},[e._v("你認識誰")]),a("ValidationProvider",{attrs:{rules:{required_whosFriend:"no"!=e.formData.attend}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("div",{staticClass:"d-f jc-sa"},[a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.whosFriend,expression:"formData.whosFriend"}],attrs:{type:"radio",value:"vicky"},domProps:{checked:e._q(e.formData.whosFriend,"vicky")},on:{change:[function(t){return e.$set(e.formData,"whosFriend","vicky")},function(t){t.stopPropagation(),e.formData.friendPeriod=null}]}}),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#friendPeriod",expression:"'#friendPeriod'"}],staticClass:"preson m1",on:{click:function(t){return e.onWhosFriend("vicky")}}},[a("div",{staticClass:"innerPic m1"})])]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.whosFriend,expression:"formData.whosFriend"}],attrs:{type:"radio",value:"arChung"},domProps:{checked:e._q(e.formData.whosFriend,"arChung")},on:{change:[function(t){return e.$set(e.formData,"whosFriend","arChung")},function(t){t.stopPropagation(),e.formData.friendPeriod=null}]}}),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#friendPeriod",expression:"'#friendPeriod'"}],staticClass:"preson m2",on:{click:function(t){return e.onWhosFriend("arChung")}}},[a("div",{staticClass:"innerPic m2"})])])]),a("div",{staticClass:"errorMsg"},[e._v(e._s(n[0]))])]}}],null,!0)})],1),a("div",{staticClass:"q_box",attrs:{id:"friendPeriod"}},[a("div",{staticClass:"subTitle"},[e._v("我們很自由")]),a("div",{staticClass:"title"},[e._v("想坐哪裡")]),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.formData.whosFriend,expression:"!formData.whosFriend"}],staticClass:"errorMsg"},[e._v("↑ 先選一下誰朋友，不然坐外面")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.formData.whosFriend,expression:"formData.whosFriend"}]},[a("ValidationProvider",{attrs:{rules:{required_whichTable:"no"!=e.formData.attend}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("div",{staticClass:"d-f"},[e._l(e.friendPeriod,(function(t,n){return a("div",{key:n+e.formData.whosFriend,staticClass:"btnBox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.friendPeriod,expression:"formData.friendPeriod"}],attrs:{type:"radio"},domProps:{value:t,checked:e._q(e.formData.friendPeriod,t)},on:{change:[function(a){return e.$set(e.formData,"friendPeriod",t)},function(t){e.formData.otherTableName=""}]}}),a("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#attendNum",expression:"'#attendNum'"}],staticClass:"btn",on:{click:function(a){return e.onFriendPeriod(t)}}},[e._v(e._s(t))])])})),a("div",{staticClass:"space"})],2),a("div",{staticClass:"errorMsg"},[e._v(e._s(n[0]))]),a("div",{directives:[{name:"show",rawName:"v-show",value:"其他桌"!=e.formData.friendPeriod,expression:"formData.friendPeriod !='其他桌' "}]},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.friendPeriod,expression:"formData.friendPeriod"}],attrs:{type:"radio",value:"其他桌"},domProps:{checked:e._q(e.formData.friendPeriod,"其他桌")},on:{change:function(t){return e.$set(e.formData,"friendPeriod","其他桌")}}}),a("div",{staticClass:"txtBtn",on:{click:function(t){return e.onFriendPeriod_other()}}},[e._v("你忘了我這桌")])])]}}],null,!0)})],1),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"其他桌"==e.formData.friendPeriod,expression:"formData.friendPeriod =='其他桌' "}]},[a("h3",{staticClass:"goldTxt"},[e._v("那你那桌想叫啥?")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.otherTableName,expression:"formData.otherTableName"}],staticClass:"longInput",attrs:{type:"text",placeholder:"ex: 表演人員桌，紅包兩萬桌"},domProps:{value:e.formData.otherTableName},on:{input:function(t){t.target.composing||e.$set(e.formData,"otherTableName",t.target.value)}}})])])],1),a("div",{staticClass:"q_box",attrs:{id:"attendNum"}},[a("div",{staticClass:"subTitle"},[e._v("小的是要坐兒童椅那種小")]),a("div",{staticClass:"title"},[e._v("幾大幾小幾個吃素")]),a("div",{staticClass:"d-f"},[a("label",{staticClass:"numberInput"},[a("ValidationProvider",{attrs:{rules:{required_adultNum:"no"!=e.formData.attend}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.formData.adultNum,expression:"formData.adultNum",modifiers:{number:!0}}],attrs:{type:"number",pattern:"\\d*",placeholder:"0"},domProps:{value:e.formData.adultNum},on:{focus:function(e){return e.target.select()},keyup:function(t){return e.checkNumber(t,"n2")},input:function(t){t.target.composing||e.$set(e.formData,"adultNum",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("div",{staticClass:"txt"},[e._v("大")]),a("div",{staticClass:"errorMsg"},[e._v(e._s(n[0]))])]}}],null,!0)})],1),a("label",{staticClass:"numberInput"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.formData.childNum,expression:"formData.childNum",modifiers:{number:!0}}],ref:"n2",attrs:{type:"number",pattern:"\\d*",placeholder:"0"},domProps:{value:e.formData.childNum},on:{keyup:function(t){return e.checkNumber(t,"n3")},focus:function(e){return e.target.select()},input:function(t){t.target.composing||e.$set(e.formData,"childNum",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("div",{staticClass:"txt"},[e._v("小")])]),a("label",{staticClass:"numberInput"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.formData.vegetarianNum,expression:"formData.vegetarianNum",modifiers:{number:!0}}],ref:"n3",attrs:{type:"number",pattern:"\\d*",placeholder:"0"},domProps:{value:e.formData.vegetarianNum},on:{focus:function(e){return e.target.select()},input:function(t){t.target.composing||e.$set(e.formData,"vegetarianNum",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("div",{staticClass:"txt"},[e._v("素")])])])]),a("div",{staticClass:"q_box"},[a("div",{staticClass:"subTitle"},[e._v("敢問尊下")]),a("div",{staticClass:"title"},[e._v("江湖資訊")]),a("div",{staticClass:"d-f f-c"},[a("label",{staticClass:"mt-1 infoWrap"},[a("ValidationProvider",{attrs:{rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("div",{staticClass:"txt"},[e._v("俠名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.name,expression:"formData.name"}],staticClass:"longInput",attrs:{type:"text",placeholder:"name"},domProps:{value:e.formData.name},on:{input:function(t){t.target.composing||e.$set(e.formData,"name",t.target.value)}}}),a("span",{staticClass:"errorMsg mt-1"},[e._v(e._s(n[0]))])]}}],null,!0)})],1),a("label",{staticClass:"infoWrap"},[a("ValidationProvider",{attrs:{rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[a("div",{staticClass:"txt"},[e._v("飛鴿")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.email,expression:"formData.email"}],staticClass:"longInput",attrs:{type:"text",placeholder:"email"},domProps:{value:e.formData.email},on:{input:function(t){t.target.composing||e.$set(e.formData,"email",t.target.value)}}}),a("span",{staticClass:"errorMsg mt-1"},[e._v(e._s(n[0]))])]}}],null,!0)})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.showAddr,expression:"!showAddr"}],staticClass:"txtBtn",on:{click:function(t){return e.onAdress()}}},[e._v("在下非要紙本喜帖不可")]),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showAddr,expression:"showAddr"}],staticStyle:{width:"100%"}},[a("label",{staticClass:"infoWrap"},[a("div",{staticClass:"txt"},[e._v("宅邸")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.address,expression:"formData.address"}],staticClass:"longInput",attrs:{type:"text",placeholder:"address"},domProps:{value:e.formData.address},on:{input:function(t){t.target.composing||e.$set(e.formData,"address",t.target.value)}}})]),a("div",{staticClass:"txtBtn mt-3",on:{click:function(t){return e.onNoAdress()}}},[e._v("沒事我開玩笑的在下環保人")])])])],1)]),a("div",{staticClass:"q_box"},[a("div",{staticClass:"subTitle"},[e._v("有問必答")]),a("div",{staticClass:"title"},[e._v("客訴")]),a("div",{staticClass:"d-f"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formData.words,expression:"formData.words"}],attrs:{placeholder:"來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊來啊"},domProps:{value:e.formData.words},on:{input:function(t){t.target.composing||e.$set(e.formData,"words",t.target.value)}}})])]),a("div",{staticClass:"q_box"},[a("input",{staticClass:"sendBtn btn mx-a",attrs:{type:"submit",value:"確認送出"},on:{click:function(t){e.clickSend=!0}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!i,expression:"!invalid"}],staticClass:"subTitle f14"},[e._v("真的要炸你囉")]),a("div",{directives:[{name:"show",rawName:"v-show",value:i&&e.clickSend,expression:"invalid&&clickSend"}],staticClass:"subTitle f14"},[e._v("還沒填完你幹嘛，上去檢查啦")])])])]}}])})],1)},U=[],L=(a("a9e3"),a("25eb"),{name:"WeddingForm",data:function(){return{isTest:!1,showAddr:!1,showLog:!0,clickSend:!1,formData:{name:"",attend:null,whosFriend:null,friendPeriod:null,otherTableName:"",adultNum:1,childNum:0,vegetarianNum:0,email:"",address:"",resonCantCome:"",words:""},testFormData:{name:"游志忠test",attend:"yes",whosFriend:"arChung",friendPeriod:"主桌",otherTableName:"",adultNum:2,childNum:0,vegetarianNum:1,email:"until5000@gmail.com",address:"建國北路",resonCantCome:"",words:"今天妳要嫁給我"},coupleData:{vicky:{friendPeriod:["主桌","親戚","大直國中","大直高中","淡江大學","淡江網球隊","富邦證券","皓崴投資","IPEVO"]},arChung:{friendPeriod:["主桌","親戚","中山國中","名師補習班","板橋高中","成功大學","嗨歪牧耘","李奧貝納","搖擺舞","民生室友","甜約翰"]}}}},computed:{friendPeriod:function(){return this.formData.whosFriend?this.coupleData[this.formData.whosFriend].friendPeriod:null}},mounted:function(){this.formData=this.isTest?this.testFormData:this.formData,this.showLog=!!this.isTest},methods:{onSubmit:function(){var e=this;this.$emit("sendForm");var t="https://script.google.com/macros/s/AKfycbyp2apWfIwHaVRWtce95ipPf_LQnatR8jXYk4PJVoZtFD4iIdQK/exec";this.axios.get(t,{params:this.formData}).then((function(t){console.log(t),e.$emit("sendForm_success")})).catch((function(t){console.log(t),e.$emit("sendForm_error")})).then((function(){}))},checkNumber:function(e,t){console.log(e.target.value);var a=Number.parseInt(e.target.value,10)||0;a=a>9?9:a,a=a<0?0:a,e.target.value=a,console.log(e),console.log(t),this.$refs[t].focus()},onAttend:function(e){this.formData.attend=e,this.$ga.event("attend","click","label",e)},onWhosFriend:function(e){this.formData.whosFriend=e,this.$ga.event("whosFriend","click","label",e)},onFriendPeriod:function(e){this.formData.friendPeriod=e,this.$ga.event("friendPeriod","click","label",e)},onFriendPeriod_other:function(){this.formData.friendPeriod="其他桌",this.$ga.event("other_friendPeriod","click","label","value")},onAdress:function(){this.showAddr=!0,this.$ga.event("i_want_paper","click","label","value")},onNoAdress:function(){this.showAddr=!1,this.$ga.event("i_dontwant_paper","click","label","value")}}}),Z=L,R=Object(N["a"])(Z,I,U,!1,null,"c5335e06",null),J=R.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pic"},[a("div",{staticClass:"innerPic"})])}],Y={name:"BottomBanner",data:function(){return{}}},H=Y,Q=(a("be06"),Object(N["a"])(H,G,X,!1,null,"79335320",null)),K=Q.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"thanksPop"},[a("div",{staticClass:"bg",on:{click:e.clozPop}}),a("div",{staticClass:"container"},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.isSending,expression:"!isSending"}]},[a("div",{staticClass:"clozBtn",on:{click:e.clozPop}}),a("h1",{staticClass:"goldTxt mt-1 ta-c ls-1 fw-b"},[e._v("炸彈上路")]),a("h3",{staticClass:"wTxt mt-1 ta-c"},[e._v("BOMB IS ON THE WAY")]),a("img",{staticClass:"mt-2",attrs:{src:e.picUrl,alt:""}}),a("div",{staticClass:"d-f mt-5 jc-sb"},[a("a",{staticClass:"txtBtn",attrs:{href:"https://calendar.google.com/event?action=TEMPLATE&tmeid=MGo3bTY3Zjlva3ZwcHBvZGIza2RudG11dnEgazdqMmJwNXJiZGpyNWc0dTRzMDVuYmhxczRAZw&tmsrc=k7j2bp5rbdjr5g4u4s05nbhqs4%40group.calendar.google.com",target:"_blank"},on:{click:function(t){return e.onCalender()}}},[e._v("我金魚我需要提醒")]),a("a",{staticClass:"txtBtn",attrs:{href:"https://g.page/lebledor-miramar?share",target:"_blank"},on:{click:function(t){return e.onMap()}}},[e._v("我路癡我需要帶路")])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isSending,expression:"isSending"}]},[a("h2",{staticClass:"goldTxt ta-c ls-1 fw-b load"},[e._v("炸彈訂單處理中")]),a("h3",{staticClass:"grayTxt mt-2 ta-c"},[e._v("究竟會不會成功呢")])])],1)])},te=[],ae={name:"ThankPop",props:["isSending"],data:function(){return{uu:"123",gifs:["https://media.giphy.com/media/26tnoLlWMAUosSvuM/giphy.gif","https://media.giphy.com/media/xUOxeXt41UOYRusw4E/giphy.gif","https://media.giphy.com/media/e2gVVjM3amp6o/giphy.gif","https://media.giphy.com/media/3rXs5J0hZkXwTZjuvM/giphy.gif","https://media.giphy.com/media/QT9SVRVexMgOk/giphy.gif","https://media.giphy.com/media/aW8GS805yvx3W/giphy.gif","https://media.giphy.com/media/umx6jg60LvDZC/giphy.gif","https://media.giphy.com/media/B7HroiUqNPv1e/giphy.gif","https://media1.tenor.com/images/87611a901ac6fd8a79bb1c7c2e5f3e49/tenor.gif?itemid=15429820","https://media1.tenor.com/images/76b0c6808fc1f665f7efd60896abc824/tenor.gif?itemid=4118922","https://media1.tenor.com/images/2cbe796de7fcdf076e7d581a35254b10/tenor.gif?itemid=15030119"],picUrl:""}},methods:{clozPop:function(){this.$emit("clozPop")},onCalender:function(){this.$ga.event("onCalender","click","label","value")},onMap:function(){this.$ga.event("onMap","click","label","value")}},beforeUpdate:function(){var e=this.gifs;this.picUrl=e[Math.floor(Math.random()*e.length)]}},ne=ae,ie=(a("de4a"),Object(N["a"])(ne,ee,te,!1,null,"1ac89efc",null)),se=ie.exports,re=(a("fa6d"),{name:"app",components:{TopBanner:T,ScrollTip:q,ScrollTip2:W,WeddingForm:J,BottomBanner:K,ThanksPop:se},data:function(){return{showThanksPop:!1,isSending:!0}},methods:{clozPop:function(){this.showThanksPop=!1,this.$scrollTo("#bottom",3e3),this.$ga.event("clozThxPop_goBottom","click","label","value")},onSendForm:function(){this.showThanksPop=!0,this.isSending=!0,this.$ga.event("onSendForm","click","label","value")},onSendForm_success:function(){this.showThanksPop=!0,this.isSending=!1,this.$ga.event("onSendForm_success","click","label","value")},onSendForm_error:function(){alert("人有失足馬有亂蹄，程式沒寫好有BUG，是可以原諒的，喝杯茶我們休息一下，等一下再試，我們不要那麼急"),this.showThanksPop=!1,this.$ga.event("onSendForm_error","click","label","value")}},created:function(){var e=navigator.userAgent.toLowerCase(),t="android"===e.match(/android/i);if(t){var a=580,n=window.innerWidth,i=a/n*window.devicePixelRatio*160,s="target-densitydpi=".concat(i,", width=580, user-scalable=no");document.getElementsByName("viewport")[0].setAttribute("content",s)}}}),oe=re,de=(a("cf25"),Object(N["a"])(oe,w,_,!1,null,null,null)),ce=de.exports;a("a7a3");i["a"].config.productionTip=!1,Object(o["c"])("email",Object(n["a"])(Object(n["a"])({},d["a"]),{},{message:"↑ 這樣寄不到啦"})),Object(o["c"])("required",Object(n["a"])(Object(n["a"])({},d["c"]),{},{message:"↑ 這裡這裡，填一下"})),Object(o["c"])("required_attend",Object(n["a"])(Object(n["a"])({},d["c"]),{},{message:"↑ 到底有沒有要來啊"})),Object(o["c"])("required_whosFriend",Object(n["a"])(Object(n["a"])({},d["c"]),{},{message:"↑ 到底誰朋友啊 (都認識的話選小柔，有餅)"})),Object(o["c"])("required_whichTable",Object(n["a"])(Object(n["a"])({},d["c"]),{},{message:"↑ 你想坐哪裡，不然排你跟我阿嬤坐主桌"})),Object(o["c"])("required_adultNum",Object(n["a"])(Object(n["a"])({},d["c"]),{},{min_value:d["b"],message:"↑ 來個大人吧"})),"addEventListener"in document&&(console.log("FastClick.attach(document.body)"),document.addEventListener("DOMContentLoaded",(function(){h.a.attach(document.body)}),!1)),i["a"].use(b.a,{id:"UA-157944047-1"}),i["a"].use(f.a),i["a"].use(m.a,l.a),i["a"].use(r.a),i["a"].component("ValidationProvider",o["b"]),i["a"].component("ValidationObserver",o["a"]),new i["a"]({render:function(e){return e(ce)}}).$mount("#app")},8151:function(e,t,a){"use strict";var n=a("c49c"),i=a.n(n);i.a},"928d":function(e,t,a){},bb70:function(e,t,a){},be06:function(e,t,a){"use strict";var n=a("928d"),i=a.n(n);i.a},c49c:function(e,t,a){},cf25:function(e,t,a){"use strict";var n=a("fea6"),i=a.n(n);i.a},de4a:function(e,t,a){"use strict";var n=a("350d"),i=a.n(n);i.a},e1d0:function(e,t,a){"use strict";var n=a("bb70"),i=a.n(n);i.a},e700:function(e,t,a){"use strict";var n=a("0eea"),i=a.n(n);i.a},fea6:function(e,t,a){}});
//# sourceMappingURL=app.590eef45.js.map