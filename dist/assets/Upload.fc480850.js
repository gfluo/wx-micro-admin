import{_ as e}from"./cropper.cb32ed3a.js";import{_ as a,a as l}from"./index.8923a681.js";import{D as t,r as s,o as r,e as o,f as p,g as n,w as c,p as u,j as d,i}from"./vendor.dbb6efc1.js";const m={name:"upload",components:{VueCropper:e},setup(){const e=t(""),a=t(l),s=t(!1),r=t(null);return{cropper:r,imgSrc:e,cropImg:a,dialogVisible:s,setImage:a=>{const l=a.target.files[0];if(!l.type.includes("image/"))return;const t=new FileReader;t.onload=a=>{s.value=!0,e.value=a.target.result,r.value&&r.value.replace(a.target.result)},t.readAsDataURL(l)},cropImage:()=>{a.value=r.value.getCroppedCanvas().toDataURL()},cancelCrop:()=>{s.value=!1,a.value=l}}}},v=e=>(u("data-v-6d5bae33"),e=e(),d(),e),g={class:"crumbs"},b=v((()=>p("i",{class:"el-icon-lx-calendar"},null,-1))),f=i(" 表单 "),_=i("图片上传"),j={class:"container"},h=v((()=>p("div",{class:"content-title"},"支持拖拽",-1))),I=v((()=>p("div",{class:"plugins-tips"},[i(" Element UI自带上传组件。 访问地址： "),p("a",{href:"http://element.eleme.io/#/zh-CN/component/upload",target:"_blank"},"Element UI Upload")],-1))),C=v((()=>p("i",{class:"el-icon-upload"},null,-1))),U=v((()=>p("div",{class:"el-upload__text"},[i(" 将文件拖到此处，或 "),p("em",null,"点击上传")],-1))),k=v((()=>p("div",{class:"el-upload__tip"},"只能上传 jpg/png 文件，且不超过 500kb",-1))),x=v((()=>p("div",{class:"content-title"},"支持裁剪",-1))),D=v((()=>p("div",{class:"plugins-tips"},[i(" vue-cropperjs：一个封装了 cropperjs 的 Vue 组件。 访问地址： "),p("a",{href:"https://github.com/Agontuk/vue-cropperjs",target:"_blank"},"vue-cropperjs")],-1)));var R=a(m,[["render",function(e,a,l,t,u,d){const i=s("el-breadcrumb-item"),m=s("el-breadcrumb"),v=s("el-upload");return r(),o("div",null,[p("div",g,[n(m,{separator:"/"},{default:c((()=>[n(i,null,{default:c((()=>[b,f])),_:1}),n(i,null,{default:c((()=>[_])),_:1})])),_:1})]),p("div",j,[h,I,n(v,{class:"upload-demo",drag:"",action:"http://jsonplaceholder.typicode.com/api/posts/",multiple:""},{tip:c((()=>[k])),default:c((()=>[C,U])),_:1}),x,D])])}],["__scopeId","data-v-6d5bae33"]]);export{R as default};
