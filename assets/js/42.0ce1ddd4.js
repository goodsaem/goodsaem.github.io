(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1171:function(t,n,l){"use strict";var e=l(895);l.n(e).a},1193:function(t,n,l){"use strict";l.r(n);var e={name:"Exam4",data:function(){return{id:"",pw:"",result:""}},methods:{login:function(t){"cancel"===t?this.result="로그인을 취소하셨습니다.":"admin"===this.id&&"passwd"===this.pw?this.result="안녕하세요 admin 님":"admin"===this.id&&"passwd"!==this.pw?this.result="비밀번호가 틀렸습니다.":"admin"!==this.id&&(this.result="아이디가 등록되지 않았습니다.")}}},s=(l(1171),l(119)),a=Object(s.a)(e,(function(){var t=this,n=t.$createElement,l=t._self._c||n;return l("el-row",{staticStyle:{border:"1px solid #d6d6d6",padding:"8pt","background-color":"lightblue"}},[l("el-col",{attrs:{span:12}},[l("el-row",[l("el-col",{attrs:{span:12}},[t._v("아이디")]),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-input",{attrs:{placeholder:"아이디를 입력하세요"},model:{value:t.id,callback:function(n){t.id=n},expression:"id"}})],1)],1),t._v(" "),l("el-row",[l("el-col",{attrs:{span:12}},[t._v("패스워드")]),t._v(" "),l("el-col",{attrs:{span:12}},[l("el-input",{attrs:{placeholder:"패스워드를 입력하세요","show-password":""},model:{value:t.pw,callback:function(n){t.pw=n},expression:"pw"}})],1)],1),t._v(" "),l("el-row",[l("el-col",{attrs:{span:23,align:"center"}},[l("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.login("cancel")}}},[t._v("취소")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.login()}}},[t._v("확인")])],1)],1)],1),t._v(" "),l("el-col",{staticStyle:{padding:"10px"},attrs:{span:12}},[t._v("\n    결과 : "+t._s(t.result)+"\n  ")])],1)}),[],!1,null,null,null);n.default=a.exports},895:function(t,n,l){}}]);