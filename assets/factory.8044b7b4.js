import{c as e}from"./tools.f4cfa2c9.js";import"./index.0851d2b1.js";import{S as t,P as a,W as n,L as s,f as o,E as r,n as i}from"./three.7b25054d.js";function c(e,t,a=0,n=[]){if(e<=0)return n;const s=a+.18,o=.95*t/(Math.sin(.18)+Math.cos(.18));return n.push({size:o,angle:s}),c(e-1,o,s,n)}export default d=>{const h=new t,f=new a(65,1,.1,1e3),l=new n({canvas:d,antialias:!0}),w=new s({color:16777215,linewidth:2.5});c(10,1.2).forEach((({size:e,angle:t})=>{const a=new o(e,e,e),n=new r(a),s=new i(n,w);s.rotateY(t),h.add(s)}));let m=0;const p=()=>l.render(h,f);return{animate:e=>{m+=1.1*e*.001,f.position.set(1.5*Math.cos(m),1.5*Math.cos(Math.PI/4),1.5*Math.sin(m)),f.lookAt(0,0,0),p()},setSize:e({render:p,renderer:l,camera:f})}};
