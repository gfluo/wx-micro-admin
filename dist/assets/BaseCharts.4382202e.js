import{S as t}from"./vue-schart.9306cd81.js";import{_ as a}from"./index.8923a681.js";import{r as s,o as l,e,f as o,g as i,w as n,p as c,j as r,i as b}from"./vendor.dbb6efc1.js";const d={name:"basecharts",components:{Schart:t},setup:()=>({options1:{type:"bar",title:{text:"最近一周各品类销售图"},bgColor:"#fbfbfb",labels:["周一","周二","周三","周四","周五"],datasets:[{label:"家电",fillColor:"rgba(241, 49, 74, 0.5)",data:[234,278,270,190,230]},{label:"百货",data:[164,178,190,135,160]},{label:"食品",data:[144,198,150,235,120]}]},options2:{type:"line",title:{text:"最近几个月各品类销售趋势图"},bgColor:"#fbfbfb",labels:["6月","7月","8月","9月","10月"],datasets:[{label:"家电",data:[234,278,270,190,230]},{label:"百货",data:[164,178,150,135,160]},{label:"食品",data:[114,138,200,235,190]}]},options3:{type:"pie",title:{text:"服装品类销售饼状图"},legend:{position:"left"},bgColor:"#fbfbfb",labels:["T恤","牛仔裤","连衣裙","毛衣","七分裤","短裙","羽绒服"],datasets:[{data:[334,278,190,235,260,200,141]}]},options4:{type:"ring",title:{text:"环形三等分"},showValue:!1,legend:{position:"bottom",bottom:40},bgColor:"#fbfbfb",labels:["vue","react","angular"],datasets:[{data:[500,500,500]}]}})},p=t=>(c("data-v-42b77b5a"),t=t(),r(),t),u={class:"crumbs"},v=p((()=>o("i",{class:"el-icon-pie-chart"},null,-1))),f=b(" schart图表 "),h={class:"container"},m=p((()=>o("div",{class:"plugins-tips"},[b(" vue-schart：vue.js封装sChart.js的图表组件。 访问地址： "),o("a",{href:"https://github.com/lin-xin/vue-schart",target:"_blank"},"vue-schart")],-1))),g={class:"schart-box"},x=p((()=>o("div",{class:"content-title"},"柱状图",-1))),j={class:"schart-box"},C=p((()=>o("div",{class:"content-title"},"折线图",-1))),_={class:"schart-box"},I=p((()=>o("div",{class:"content-title"},"饼状图",-1))),y={class:"schart-box"},w=p((()=>o("div",{class:"content-title"},"环形图",-1)));var S=a(d,[["render",function(t,a,c,r,b,d){const p=s("el-breadcrumb-item"),S=s("el-breadcrumb"),k=s("schart");return l(),e("div",null,[o("div",u,[i(S,{separator:"/"},{default:n((()=>[i(p,null,{default:n((()=>[v,f])),_:1})])),_:1})]),o("div",h,[m,o("div",g,[x,i(k,{class:"schart",canvasId:"bar",options:r.options1},null,8,["options"])]),o("div",j,[C,i(k,{class:"schart",canvasId:"line",options:r.options2},null,8,["options"])]),o("div",_,[I,i(k,{class:"schart",canvasId:"pie",options:r.options3},null,8,["options"])]),o("div",y,[w,i(k,{class:"schart",canvasId:"ring",options:r.options4},null,8,["options"])])])])}],["__scopeId","data-v-42b77b5a"]]);export{S as default};
