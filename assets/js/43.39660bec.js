(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1074:function(t,e,a){"use strict";a.r(e);var i=a(940),r=a(955),n=(a(1009),{name:"LandChart1",props:{chartData:{type:Array},chartCategory:{type:Array},chartTitle:{type:String}},components:{VChart:r.b},provide:Object(i.a)({},r.a,"dark"),data:function(){return{option:{title:{text:this.chartTitle,left:"center"},legend:{data:this.chartCategory},tooltip:{formatter:function(t){var e=t.value;return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">- 거래일자 : '+e[0]+"<br />- 거래금액 ："+e[1]+"<br/>- 층 ："+e[2]+"</div>"},axisPointer:{type:"cross"}},xAxis:{name:"거래일자",scale:!0,type:"time",distribution:"linear",time:{unit:"day"},splitLine:{lineStyle:{type:"dashed"}},splitNumber:10,nameTextStyle:{fontSize:10}},yAxis:{type:"value",name:"거래금액",splitLine:{lineStyle:{type:"dashed"}},nameTextStyle:{fontSize:10}},series:this.chartData}}}}),o=(a(995),a(119)),s=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("v-chart",{staticClass:"chart",attrs:{option:this.option}})}),[],!1,null,"9e0b61fc",null);e.default=s.exports},917:function(t,e,a){},995:function(t,e,a){"use strict";var i=a(917);a.n(i).a}}]);