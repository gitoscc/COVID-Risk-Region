(function(){"use strict";var e={6620:function(e,t,i){var l=i(9242),n=i(3396);function a(e,t){const i=(0,n.up)("router-view");return(0,n.wg)(),(0,n.j4)(i)}var o=i(89);const r={},s=(0,o.Z)(r,[["render",a]]);var d=s,h=i(2350),u=i(5431);(0,u.z)("/COVID-Risk-Region/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(e){console.log("Service worker has been registered and now polling for updates."),setInterval((()=>{e.update()}),5e3)},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(e){console.log("New content is available; please refresh."),document.dispatchEvent(new CustomEvent("swUpdated",{detail:e}))},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=i(3162),_=i(678),f=(i(451),i(9060),i(9200),i(7086),i(6570),i(970)),p=i(9740),g=(i(3189),i(5065));const m={class:"footer-section"},w=(0,n.Uk)(" 数据来自"),k=(0,n.Uk)("国家卫健委"),y=(0,n.Uk)(" | "),b=(0,n.Uk)("GitHub"),v=(0,n.Uk)(" | "),x=(0,n.Uk)("Api GitHub");function C(e,t,i,l,a,o){const r=g.E2;return(0,n.wg)(),(0,n.iD)("div",m,[w,(0,n.Wm)(r,{class:"link",href:"http://bmfw.www.gov.cn/yqfxdjcx/risk.html",target:"_blank"},{default:(0,n.w5)((()=>[k])),_:1}),y,(0,n.Wm)(r,{class:"link",href:"https://github.com/panghaibin/COVID-Risk-Region",target:"_blank"},{default:(0,n.w5)((()=>[b])),_:1}),v,(0,n.Wm)(r,{class:"link",href:"https://github.com/panghaibin/RiskLevelAPI",target:"_blank"},{default:(0,n.w5)((()=>[x])),_:1})])}var S={name:"FooterShow"};const W=(0,o.Z)(S,[["render",C],["__scopeId","data-v-90d46250"]]);var I=W,j=(i(8009),i(7655),i(1430),i(172),i(1844),i(4372),i(9007),i(6809),i(8474),i(877)),O=i(9566),U=i(1902),D=i(3533),N=i(3962),A=i(4224),z=i(6605),R=i(1015),T=i(7139);const E=e=>((0,n.dD)("data-v-b49118e0"),e=e(),(0,n.Cn)(),e),V={key:0},$={key:0},H={key:1},P={key:1},L={key:2,class:"history-icon"},M=E((()=>(0,n._)("span",{class:"history-text"},"查看历史",-1))),G={key:1},F=E((()=>(0,n._)("p",null,"加载历史记录失败！请刷新重试",-1))),Z={style:{"text-align":"center"}},q=(0,n.Uk)(" GitHub 源 "),J=E((()=>(0,n._)("br",null,null,-1))),Y=E((()=>(0,n._)("br",null,null,-1))),K=(0,n.Uk)(" GitHub 镜像源 "),B=E((()=>(0,n._)("br",null,null,-1))),Q=E((()=>(0,n._)("br",null,null,-1))),X=E((()=>(0,n._)("span",{class:"link"},"数据来自",-1))),ee=(0,n.Uk)(" 国家卫健委 "),te=E((()=>(0,n._)("br",null,null,-1))),ie=(0,n.Uk)(" 前端项目 GitHub "),le=E((()=>(0,n._)("br",null,null,-1))),ne=(0,n.Uk)(" Api项目 GitHub "),ae=E((()=>(0,n._)("br",null,null,-1))),oe=(0,n.Uk)(" 下载全部 "),re=(0,n.Uk)("关闭"),se={class:"high-risk"},de=(0,n.Uk)(" 高风险等级地区 "),he={class:"num"},ue={class:"middle-risk"},ce=(0,n.Uk)(" 中风险等级地区 "),_e={class:"num"},fe={key:1},pe=E((()=>(0,n._)("p",null,"API 获取出错，请刷新重试",-1)));function ge(e,t,i,a,o,r){const s=(0,n.up)("loading"),d=R.gn,h=(0,n.up)("clock"),u=z.mi,c=A.$Y,_=A.eI,f=(0,n.up)("Download"),p=(0,n.up)("Link"),m=g.E2,w=N.d0,k=D.EZ,y=U.Ks,b=O.y,v=j.vk;return o.err?((0,n.wg)(),(0,n.iD)("div",fe,[pe,(0,n._)("p",null,(0,T.zw)(o.err_msg),1)])):((0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("p",null,[o.ok?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[i.type_latest?((0,n.wg)(),(0,n.iD)("span",$," 以下数据截止自 "+(0,T.zw)(o.raw.data.end_update_time),1)):((0,n.wg)(),(0,n.iD)("span",H," 历史数据 "+(0,T.zw)(o.raw.data.end_update_time),1))],64)):((0,n.wg)(),(0,n.iD)("span",P,"加载中……")),(0,n.wy)((0,n._)("span",null,[(0,n.Wm)(d,{class:"is-loading"},{default:(0,n.w5)((()=>[(0,n.Wm)(s)])),_:1})],512),[[l.F8,o.loading_icon]]),o.ok&&!o.loading_icon?((0,n.wg)(),(0,n.iD)("span",L,[(0,n.Wm)(u,{type:"text",onClick:r.fetch_info},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(h)])),_:1}),M])),_:1},8,["onClick"])])):(0,n.kq)("",!0)]),(0,n.Wm)(w,{modelValue:o.info.visible,"onUpdate:modelValue":t[5]||(t[5]=e=>o.info.visible=e),title:"历史数据",width:"320px"},{footer:(0,n.w5)((()=>[o.info.err?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:0,onClick:t[3]||(t[3]=e=>o.info.download_visible=!0),style:{"margin-right":"100px"}},{default:(0,n.w5)((()=>[oe])),_:1})),(0,n.Wm)(u,{onClick:t[4]||(t[4]=e=>o.info.visible=!1),type:"primary"},{default:(0,n.w5)((()=>[re])),_:1})])),default:(0,n.w5)((()=>[o.info.err?((0,n.wg)(),(0,n.iD)("div",G,[F,(0,n._)("p",null,(0,T.zw)(o.info.err_msg),1)])):((0,n.wg)(),(0,n.j4)(_,{key:0,data:o.info.table,ref:"info_table","row-key":"id",onCellClick:r.info_click,"empty-text":"数据加载中……",height:"50vh"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{label:"时间"},{default:(0,n.w5)((e=>[(0,n.Uk)((0,T.zw)(e.row.update_time),1)])),_:1})])),_:1},8,["data","onCellClick"])),(0,n.Wm)(w,{modelValue:o.info.download_visible,"onUpdate:modelValue":t[2]||(t[2]=e=>o.info.download_visible=e),width:"300px",top:"25vh",title:"下载全部数据","append-to-body":""},{default:(0,n.w5)((()=>[(0,n._)("div",Z,[o.info.err?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:0,onClick:t[0]||(t[0]=e=>r.download_data(0)),style:{width:"10em"}},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f)])),_:1}),q])),_:1})),J,Y,o.info.err?(0,n.kq)("",!0):((0,n.wg)(),(0,n.j4)(u,{key:1,onClick:t[1]||(t[1]=e=>r.download_data(1)),style:{width:"10em"}},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(f)])),_:1}),K])),_:1})),B,Q,X,(0,n.Wm)(m,{class:"link",href:"http://bmfw.www.gov.cn/yqfxdjcx/risk.html",target:"_blank"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p)])),_:1}),ee])),_:1}),te,(0,n.Wm)(m,{class:"link",href:"https://github.com/panghaibin/COVID-Risk-Region",target:"_blank"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p)])),_:1}),ie])),_:1}),le,(0,n.Wm)(m,{class:"link",href:"https://github.com/panghaibin/RiskLevelAPI",target:"_blank"},{default:(0,n.w5)((()=>[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(p)])),_:1}),ne])),_:1}),ae])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),(0,n.Wm)(k,{disabled:!o.ok,ref:"filter_input",modelValue:o.filter_text,"onUpdate:modelValue":t[6]||(t[6]=e=>o.filter_text=e),placeholder:"请输入区域名称，可用空格分隔多个关键词",clearable:"",onClear:t[7]||(t[7]=t=>r.tag_add(e.$refs.filter_input.input.value)),onChange:r.tag_add},null,8,["disabled","modelValue","onChange"]),(0,n._)("div",{class:(0,T.C_)(o.ok?["tag-list"]:["tag-list","tag-list-disabled"])},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.filter_history,((e,t)=>((0,n.wg)(),(0,n.j4)(y,{type:o.dark_mode?"info":"",key:t,closable:!0,onClose:e=>r.tag_remove(t),onClick:t=>{o.filter_text=e,r.tag_add(e)},class:"tag-item"},{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(e),1)])),_:2},1032,["type","onClose","onClick"])))),128))],2),(0,n._)("h3",se,[de,(0,n._)("span",he,"("+(0,T.zw)(o.high.count)+")",1),(0,n.Wm)(u,{class:"expand-all",type:o.dark_mode?"info":"primary",onClick:r.high_expand,disabled:!o.ok},{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(o.high.expand_all_button),1)])),_:1},8,["type","onClick","disabled"])]),o.ok?((0,n.wg)(),(0,n.j4)(b,{key:o.high.key,data:o.high.tree,props:o.tree_props,"node-key":"id","default-expand-all":o.high.expand_all,"default-expanded-keys":o.high.default_id_list,"auto-expand-parent":!1,ref:"high_tree","filter-node-method":r.high_filter,"empty-text":"无数据"},null,8,["data","props","default-expand-all","default-expanded-keys","filter-node-method"])):((0,n.wg)(),(0,n.j4)(v,{key:1,rows:6,animated:""})),(0,n._)("h3",ue,[ce,(0,n._)("span",_e,"("+(0,T.zw)(o.middle.count)+")",1),(0,n.Wm)(u,{class:"expand-all",type:o.dark_mode?"info":"primary",onClick:r.middle_expand,disabled:!o.ok},{default:(0,n.w5)((()=>[(0,n.Uk)((0,T.zw)(o.middle.expand_all_button),1)])),_:1},8,["type","onClick","disabled"])]),o.ok?((0,n.wg)(),(0,n.j4)(b,{key:o.middle.key,data:o.middle.tree,props:o.tree_props,"node-key":"id","default-expand-all":o.middle.expand_all,"default-expanded-keys":o.middle.default_id_list,"auto-expand-parent":!1,ref:"middle_tree","filter-node-method":r.middle_filter,"empty-text":"无数据"},null,8,["data","props","default-expand-all","default-expanded-keys","filter-node-method"])):((0,n.wg)(),(0,n.j4)(v,{key:3,rows:6,animated:""}))]))}var me=i(6265),we=i.n(me),ke=i(6666),ye=(i(8742),{name:"RegionShow",props:{data_url:String,info_url:String,type_latest:Boolean},computed:{data_name(){return this.data_url.split("/").pop().split(".").shift()},data_name_timestamp(){return this.data_name+"_timestamp"}},data(){return{raw:null,ok:!1,err:!1,err_msg:"",info:{raw:null,visible:!1,download_visible:!1,ok:!1,err:!1,err_msg:"",table:null},high:{key:0,tree:null,count:"-",province_id_list:[],city_id_list:[],county_id_list:[],default_id_list:[],expand_all:!1,expand_all_button:"展开"},middle:{key:0,tree:null,count:"-",province_id_list:[],city_id_list:[],county_id_list:[],default_id_list:[],expand_all:!1,expand_all_button:"展开"},tree_props:{label:"label",children:"children",class:"tree-node"},filter_text:"",filter_history:["北京","上海","江苏"],dark_mode:!1,loading_icon:!1}},mounted(){this.type_latest?localStorage.getItem(this.data_name_timestamp)&&localStorage.getItem(this.data_name)?this.fetch_latest(!0):this.fetch_latest(!1):this.fetch_history();let e=JSON.parse(localStorage.getItem("filter_history"));e&&e.length?this.filter_history=e:localStorage.setItem("filter_history",JSON.stringify(this.filter_history));let t=window.matchMedia("(prefers-color-scheme: dark)"),i=this,l=e=>{i.dark_mode=e.matches};t.addEventListener("change",l),l(t)},methods:{fetch_data:async function(e,t=null,i=!1,l=!1){let n,a,o,r=e.split("/").pop().split(".").shift(),s=r+"_timestamp",d=JSON.parse(localStorage.getItem(r));if(i&&d)return d;if(!l&&(new Date).getTime()-localStorage.getItem(s)<3e5)return d;null===t&&(t="true"===localStorage.getItem("use_proxy")),o="",n=t?o+e:e,a=t?5e3:2e3;let h=we().CancelToken;const u=h.source(),c=setTimeout((()=>{u.cancel()}),a);let _=this;try{let e=await we().get(n,{cancelToken:u.token});clearTimeout(c);let i=e.data;return localStorage.setItem(r,JSON.stringify(i)),localStorage.setItem(s,(new Date).getTime().toString()),localStorage.setItem("use_proxy",t.toString()),Promise.resolve(i)}catch(f){return clearTimeout(c),console.log(f),t?Promise.reject(f):_.fetch_data(e,!0)}},fetch_latest(e=!1){if(e){if(this.raw=JSON.parse(localStorage.getItem(this.data_name)),this.high_init(),this.middle_init(),this.ok=!0,(new Date).getTime()-localStorage.getItem(this.data_name_timestamp)<3e5)return;this.loading_icon=!0}else this.loading_icon=!0;let t=this.data_url+"?t="+(new Date).getTime();this.fetch_data(t,null,!1,!0).then((e=>{let t,i=!0;this.ok?this.raw.data["end_update_time"]!==e["data"]["end_update_time"]?t="数据更新成功":(t="已是最新数据",i=!1):t="数据加载成功",ke.bM.success({message:t,duration:2500,position:"bottom-right",showClose:!1,customClass:"notification-item"}),i&&(this.raw=e,this.high_init(),this.middle_init(),this.ok=!0),this.loading_icon=!1})).catch((e=>{if(console.log(e),this.ok){let e="数据更新失败<br>已显示缓存数据";ke.bM.info({message:e,duration:2500,position:"bottom-right",showClose:!1,customClass:"notification-item",dangerouslyUseHTMLString:!0})}else this.err_msg=e,this.err=!0;this.loading_icon=!1}))},fetch_info(){this.info.visible=!0,this.info.err=!1;let e=this;this.fetch_data(this.info_url).then((t=>{e.info.raw=t;let i=t["file_list"],l=[],n=0;for(let e=i.length-1;e>=0;e--){let t=i[e],a=new Date(1e3*t["update_time"]),o=a.toLocaleString("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}),r=a.toLocaleString("zh-CN",{timeZone:"Asia/Shanghai",hour12:!1,hour:"2-digit"});o=o.replace(/\//g,"-"),r=r.replace("24","00");let s=t["file_name"].replace(".json","");l.length&&l[l.length-1]["update_time"]===o?l[l.length-1]["children"].unshift({id:n++,update_time:o+" "+r,file_name:s}):l.push({id:n++,update_time:o,file_name:"#",children:[{id:n++,update_time:o+" "+r,file_name:s}]})}e.info.table=l,e.info.ok=!0})).catch((t=>{e.info.err=!0,e.info.err_msg=t,console.log(t)}))},fetch_history(){this.loading_icon=!0;let e=this.data_url;this.fetch_data(e,null,!0).then((e=>{let t="历史数据加载成功";ke.bM.success({message:t,duration:2500,position:"bottom-right",showClose:!1,customClass:"notification-item"}),this.raw=e,this.high_init(),this.middle_init(),this.ok=!0,this.loading_icon=!1})).catch((e=>{console.log(e);let t="历史数据加载失败";ke.bM.info({message:t,duration:2500,position:"bottom-right",showClose:!1,customClass:"notification-item"}),this.err_msg=e,this.err=!0,this.loading_icon=!1}))},list2tree(e,t){let i=[],l=0,n=[],a=[],o=[];for(let r=0;r<e.length;r++){let t=e[r],s=t["province"],d=t.city,h=t["county"],u=t["communitys"],c=null,_=null,f=null,p=null;for(let e=0;e<i.length;e++){let t=i[e];if(t.label===s){c=t;break}}null===c&&(c={id:l++,pid:-1,label:s,children:[],expanded:!0},i.push(c),n.push(c.id));for(let e=0;e<c.children.length;e++){let t=c.children[e];if(t.label===d){_=t;break}}null===_&&(_={id:l++,pid:c.id,label:d,children:[],expanded:!0},c.children.push(_),a.push(_.id));for(let e=0;e<_.children.length;e++){let t=_.children[e];if(t.label===h){f=t;break}}null===f&&(f={id:l++,pid:_.id,label:h,children:[],expanded:!0},_.children.push(f),o.push(f.id));for(let e=0;e<f.children.length;e++){let t=f.children[e];if(t.label===u){p=t;break}}if(null===p){p=[];for(let e=0;e<u.length;e++)f.children.push({id:l++,pid:f.id,label:u[e]})}}t.tree=i,t.province_id_list=n,t.city_id_list=a,t.county_id_list=o,t.default_id_list=n.concat(o)},high_init(){this.list2tree(this.raw.data["highlist"],this.high),this.high.key++,this.high.count=this.raw.data["hcount"]},middle_init(){this.list2tree(this.raw.data["middlelist"],this.middle),this.middle.key++,this.middle.count=this.raw.data["mcount"]},high_expand(){if(this.high.expand_all=!this.high.expand_all,this.high.expand_all){let e=this.high.default_id_list.concat(this.high.city_id_list);for(let t=0;t<e.length;t++)this.$refs.high_tree.store.getNode(e[t]).expanded=!0}else for(let e=0;e<this.high.city_id_list.length;e++)this.$refs.high_tree.store.getNode(this.high.city_id_list[e]).expanded=!1;this.high.expand_all_button=this.high.expand_all?"收起":"展开"},middle_expand(){if(this.middle.expand_all=!this.middle.expand_all,this.middle.expand_all){let e=this.middle.default_id_list.concat(this.middle.city_id_list);for(let t=0;t<e.length;t++)this.$refs.middle_tree.store.getNode(e[t]).expanded=!0}else for(let e=0;e<this.middle.city_id_list.length;e++)this.$refs.middle_tree.store.getNode(this.middle.city_id_list[e]).expanded=!1;this.middle.expand_all_button=this.middle.expand_all?"收起":"展开"},high_filter(e,t){if(!e)return void 0===t.children&&this.high.count++,!0;let i=e.split(" ");for(let l=0;l<i.length;l++){let e=i[l];if(!e)continue;if(t.label.includes(e))return void 0===t.children&&this.high.count++,!0;let n=t.pid;while(-1!==n){let i=this.$refs.high_tree.store.getNode(n).data;if(i.label.includes(e))return void 0===t.children&&this.high.count++,!0;n=i.pid}}return!1},middle_filter(e,t){if(!e)return void 0===t.children&&this.middle.count++,!0;let i=e.split(" ");for(let l=0;l<i.length;l++){let e=i[l];if(!e)continue;if(t.label.includes(e))return void 0===t.children&&this.middle.count++,!0;let n=t.pid;while(-1!==n){let i=this.$refs.middle_tree.store.getNode(n).data;if(i.label.includes(e))return void 0===t.children&&this.middle.count++,!0;n=i.pid}}return!1},tag_add(e){if(e=e.trim(),""!==e){while(e.includes("  "))e=e.replace("  "," ");this.filter_history.unshift(e),this.filter_history=Array.from(new Set(this.filter_history)),localStorage.setItem("filter_history",JSON.stringify(this.filter_history))}},tag_remove(e){this.filter_history.splice(e,1),localStorage.setItem("filter_history",JSON.stringify(this.filter_history))},info_click(e){"#"===e.file_name?this.$refs.info_table.toggleRowExpansion(e):this.$router.push({path:"./"+e.file_name})},download_data(e){0===e?window.open("https://github.com/panghaibin/RiskLevelAPI/archive/refs/heads/api.zip"):1===e&&window.open("https://gh-proxy.caduo.ml/https://github.com/panghaibin/RiskLevelAPI/archive/refs/heads/api.zip")}},watch:{filter_text(e){e=e.trim();while(e.includes("  "))e=e.replace("  "," ");this.high.count=0,this.$refs.high_tree.filter(e),this.middle.count=0,this.$refs.middle_tree.filter(e)}}});const be=(0,o.Z)(ye,[["render",ge],["__scopeId","data-v-b49118e0"]]);var ve=be;const xe={class:"content-body"},Ce={class:"content"};function Se(e,t,i,l,a,o){const r=(0,n.up)("Head"),s=(0,n.up)("router-link"),d=p.nZ,h=ve,u=p.b2,c=I,_=p.F_,g=p.G4,m=f.Mr;return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(r,null,{default:(0,n.w5)((()=>[(0,n._)("title",null,(0,T.zw)(a.title),1)])),_:1}),(0,n.Wm)(m,{height:"100vh"},{default:(0,n.w5)((()=>[(0,n._)("div",xe,[(0,n._)("div",Ce,[(0,n.Wm)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(d,{class:"header"},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{to:"/"},{default:(0,n.w5)((()=>[(0,n._)("h1",null,(0,T.zw)(a.title),1)])),_:1})])),_:1}),(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.j4)(h,{key:o.api_url,data_url:o.api_url,info_url:a.info_url,type_latest:o.type_latest},null,8,["data_url","info_url","type_latest"]))])),_:1}),(0,n.Wm)(_,{class:"footer"},{default:(0,n.w5)((()=>[(0,n.Wm)(c)])),_:1})])),_:1})])])])),_:1})],64)}var We={data(){return{refreshing:!1,registration:null,updateExists:!1}},created(){document.addEventListener("swUpdated",this.updateAvailable,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",(()=>{this.refreshing||(this.refreshing=!0,window.location.reload())}))},methods:{updateAvailable(e){this.registration=e.detail,this.updateExists=!0,this.refreshApp()},refreshApp(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage({type:"SKIP_WAITING"})}}};let Ie="https://covid-api.caduo.ml/";var je={name:"HomeView",components:{RegionShow:ve,FooterShow:I,Head:h.Fb},computed:{api_url(){let e=this.$route.params.fileName;return e?Ie+e+".json":Ie+"latest.json"},type_latest(){return!this.$route.params.fileName}},data(){return{title:"全国疫情中高风险地区查询",info_url:Ie+"info.json"}},mixins:[We]};const Oe=(0,o.Z)(je,[["render",Se]]);var Ue=Oe;const De=[{path:"/:fileName?",name:"home",component:Ue}],Ne=(0,_.p7)({history:(0,_.PO)("/COVID-Risk-Region/"),routes:De});var Ae=Ne;const ze=(0,l.ri)(d);ze.use(Ae);for(const[Te,Ee]of Object.entries(c))ze.component(Te,Ee);const Re=(0,h.G6)();ze.use(Re),ze.mount("#app")}},t={};function i(l){var n=t[l];if(void 0!==n)return n.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,i),a.exports}i.m=e,function(){var e=[];i.O=function(t,l,n,a){if(!l){var o=1/0;for(h=0;h<e.length;h++){l=e[h][0],n=e[h][1],a=e[h][2];for(var r=!0,s=0;s<l.length;s++)(!1&a||o>=a)&&Object.keys(i.O).every((function(e){return i.O[e](l[s])}))?l.splice(s--,1):(r=!1,a<o&&(o=a));if(r){e.splice(h--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[l,n,a]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var l in t)i.o(t,l)&&!i.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,l){var n,a,o=l[0],r=l[1],s=l[2],d=0;if(o.some((function(t){return 0!==e[t]}))){for(n in r)i.o(r,n)&&(i.m[n]=r[n]);if(s)var h=s(i)}for(t&&t(l);d<o.length;d++)a=o[d],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(h)},l=self["webpackChunkcovid_risk_region"]=self["webpackChunkcovid_risk_region"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=i.O(void 0,[998],(function(){return i(6620)}));l=i.O(l)})();
//# sourceMappingURL=app.190bb666.js.map