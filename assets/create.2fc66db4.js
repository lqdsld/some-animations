import{S as t,P as a,W as s,c as o,o as n,w as r,b as e}from"./three.7b25054d.js";import{c as i}from"./tools.f4cfa2c9.js";import"./index.0851d2b1.js";class c{constructor(){const t=new n(.05,.05,2,32),a=new r;this.stick=new e(t,a),this.stick.quaternion.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2,2).normalize(),this.stick.position.set(4*(-.5+Math.random()),4*(-.5+Math.random()),4*(-.5+Math.random()))}}export default n=>{const r=new t,e=new a(75,0,1,10),d=new s({canvas:n,antialias:!0});e.position.set(0,0,5);var h,m;(h=40,m=()=>new c,Array.from(new Array(h),((t,a)=>m(a)))).forEach((t=>r.add(t.stick)));const M=()=>d.render(r,e);return{animate:(t,a)=>{const s=.001*a;e.position.x=5*Math.cos(.2*s),e.position.z=5*Math.sin(.2*s),e.lookAt(new o(0,0,0)),M()},setSize:i({camera:e,renderer:d,render:M}),destroy:()=>{}}};
