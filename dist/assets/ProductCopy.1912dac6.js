import{k as e,D as l,B as a,b as d,J as t,r as o,o as i,e as n,f as r,g as s,w as u,F as m,l as c,c as f,i as p,t as b,M as g,E as V,p as v,j as k}from"./vendor.dbb6efc1.js";import{W as D}from"./wangEditor.d9c38480.js";import{e as _,f as y}from"./index.193d482a.js";import{_ as h}from"./index.e30755e4.js";const C={name:"productAdd",setup(){e();const o=l(null),i=l(null),n=l(""),r=l(!1),s=a({title:"",address:"",region:"",beginDate:"",endDate:"",amount:0,amountDescribe:"",describe:"",cover:"",link:[]});let u;d((()=>{let e=localStorage.getItem("copyActivityId");console.log("copyId：",e),u=new D(o.value),u.config.uploadVideoServer="/common/video/upload",u.config.uploadVideoMaxSize=41943040,u.config.uploadVideoAccept=["mp4"],u.config.uploadVideoName="file",u.config.zIndex=1,u.create(),e&&_({id:e}).then((e=>{s.title=e.data.title,s.address=e.data.address,s.beginDate=e.data.startTime+"",s.endDate=e.data.endTime+"",s.amount=e.data.amount/100,s.cover=e.data.cover,s.link=e.data.link?e.data.link.split(","):[],s.amountDescribe=e.data.amountDescribe,u.txt.html(e.data.describe)})),localStorage.removeItem("copyActivityId")})),t((()=>{u.destroy(),u=null}));return{addVaule:n,addVisible:r,showAddLink:()=>{r.value=!0},addLinkConfirm:()=>{s.link.push(n.value),n.value="",r.value=!1},addLinkColse:e=>{s.link.splice(s.link.indexOf(e),1)},editor:o,rules:{title:[{required:!0,message:"请输入活动名称",trigger:"blur"}],address:[{required:!0,message:"请输入活动地址",trigger:"blur"}],beginDate:[{required:!0,message:"请输入开始时间",trigger:"blur"}],endDate:[{required:!0,message:"请输入结束时间",trigger:"blur"}]},formRef:i,form:s,onSubmit:()=>{s.describe=u.txt.html(),i.value.validate((e=>{if(!e)return!1;y({title:s.title,address:s.address,startTime:s.beginDate,endTime:s.endDate,describe:s.describe,link:s.link,amount:s.amount,cover:s.cover,amountDescribe:s.amountDescribe}).then((e=>{console.log(e)})),V.success("提交成功！")}))},onReset:()=>{i.value.resetFields()}}}},x={class:"crumbs"},z=(e=>(v("data-v-59cf6327"),e=e(),k(),e))((()=>r("i",{class:"el-icon-lx-calendar"},null,-1))),w=p(" 活动 "),U=p("编辑"),Y={class:"container"},I={class:"form-box"},A=p("+ 新增活动环节"),L={class:"mgb20",ref:"editor"},M=p("保存"),S=p("重置");var j=h(C,[["render",function(e,l,a,d,t,V){const v=o("el-breadcrumb-item"),k=o("el-breadcrumb"),D=o("el-input"),_=o("el-form-item"),y=o("el-input-number"),h=o("el-tag"),C=o("el-button"),j=o("el-date-picker"),q=o("el-col"),H=o("el-form");return i(),n("div",null,[r("div",x,[s(k,{separator:"/"},{default:u((()=>[s(v,null,{default:u((()=>[z,w])),_:1}),s(v,null,{default:u((()=>[U])),_:1})])),_:1})]),r("div",Y,[r("div",I,[s(H,{ref:"formRef",rules:d.rules,model:d.form,"label-width":"80px"},{default:u((()=>[s(_,{label:"活动名称",prop:"title"},{default:u((()=>[s(D,{size:"mini",modelValue:d.form.title,"onUpdate:modelValue":l[0]||(l[0]=e=>d.form.title=e)},null,8,["modelValue"])])),_:1}),s(_,{label:"活动地址",prop:"address"},{default:u((()=>[s(D,{size:"mini",modelValue:d.form.address,"onUpdate:modelValue":l[1]||(l[1]=e=>d.form.address=e)},null,8,["modelValue"])])),_:1}),s(_,{label:"活动封面",prop:"cover"},{default:u((()=>[s(D,{size:"mini",modelValue:d.form.cover,"onUpdate:modelValue":l[2]||(l[2]=e=>d.form.cover=e),placeholder:"请输入封面图片网络地址"},null,8,["modelValue"])])),_:1}),s(_,{label:"费用(元)",prop:"amount"},{default:u((()=>[s(y,{size:"mini",modelValue:d.form.amount,"onUpdate:modelValue":l[3]||(l[3]=e=>d.form.amount=e),min:1},null,8,["modelValue"])])),_:1}),s(_,{label:"费用描述",prop:"amountDescribe"},{default:u((()=>[s(D,{size:"mini",modelValue:d.form.amountDescribe,"onUpdate:modelValue":l[4]||(l[4]=e=>d.form.amountDescribe=e)},null,8,["modelValue"])])),_:1}),s(_,{label:"活动环节",prop:"link"},{default:u((()=>[(i(!0),n(m,null,c(d.form.link,(e=>(i(),f(h,{key:e,closable:"","disable-transitions":!1,onClose:l=>d.addLinkColse(e)},{default:u((()=>[p(b(e),1)])),_:2},1032,["onClose"])))),128)),d.addVisible?(i(),f(D,{key:0,modelValue:d.addVaule,"onUpdate:modelValue":l[5]||(l[5]=e=>d.addVaule=e),class:"input-new-tag",size:"mini",onKeyup:g(d.addLinkConfirm,["enter"])},null,8,["modelValue","onKeyup"])):(i(),f(C,{key:1,class:"button-new-tag",size:"small",onClick:d.showAddLink},{default:u((()=>[A])),_:1},8,["onClick"]))])),_:1}),s(_,{label:"开始时间"},{default:u((()=>[s(q,{span:11},{default:u((()=>[s(_,{prop:"beginDate"},{default:u((()=>[s(j,{size:"mini",type:"datetime",placeholder:"选择日期","value-format":"YYYY-MM-DD HH:mm:ss",modelValue:d.form.beginDate,"onUpdate:modelValue":l[6]||(l[6]=e=>d.form.beginDate=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(_,{label:"结束时间"},{default:u((()=>[s(q,{span:11},{default:u((()=>[s(_,{prop:"endDate"},{default:u((()=>[s(j,{size:"mini",type:"datetime",placeholder:"选择日期","value-format":"YYYY-MM-DD HH:mm:ss",modelValue:d.form.endDate,"onUpdate:modelValue":l[7]||(l[7]=e=>d.form.endDate=e),style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1})])),_:1}),s(_,{label:"活动描述"},{default:u((()=>[r("div",L,null,512)])),_:1}),s(_,null,{default:u((()=>[s(C,{type:"primary",onClick:d.onSubmit},{default:u((()=>[M])),_:1},8,["onClick"]),s(C,{onClick:d.onReset},{default:u((()=>[S])),_:1},8,["onClick"])])),_:1})])),_:1},8,["rules","model"])])])])}],["__scopeId","data-v-59cf6327"]]);export{j as default};
