"use strict";(self["webpackChunkanistream"]=self["webpackChunkanistream"]||[]).push([[70],{6070:function(e,a,s){s.r(a),s.d(a,{default:function(){return g}});var t=s(3396),n=s(7139);const r=e=>((0,t.dD)("data-v-ab332228"),e=e(),(0,t.Cn)(),e),u={key:0,class:"main-container"},l=r((()=>(0,t._)("h1",null,"All users: ",-1)));function o(e,a,s,r,o,i){const c=(0,t.up)("v-btn");return e.users?((0,t.wg)(),(0,t.iD)("div",u,[l,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.users,(e=>((0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("span",null,(0,n.zw)(e.email),1),(0,t._)("span",null,[(0,t.Wm)(c,{color:"red"},{default:(0,t.w5)((()=>[(0,t.Uk)("Ban")])),_:1})])])))),256))])):(0,t.kq)("",!0)}var i=s(4161),c=(0,t.aZ)({data(){return{users:[]}},async mounted(){this.getUsers()},methods:{async getUsers(){const e=await i.Z.get("http://localhost:5000/users",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});this.users=e.data}}}),d=s(89);const h=(0,d.Z)(c,[["render",o],["__scopeId","data-v-ab332228"]]);var g=h}}]);
//# sourceMappingURL=70.075dbdfe.js.map