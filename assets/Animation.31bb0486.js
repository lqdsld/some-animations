import{S as e,P as s,W as t,f as a,g as n,b as o,h as i,G as r,A as c}from"./three.7b25054d.js";import{L as d}from"./LegacyThreeAnimation.99f7bac8.js";export default class extends d{constructor(d){super();const h=new e,w=new s(75,1,.1,1e3),m=new t({canvas:d}),b=new a(1,1,1),p=new n({color:16777215,emissive:0}),u=new o(b,p);h.add(u);const f=new i(16711680,1,15,2);h.add(f),h.add(new r(3,3)),h.add(new c(5)),f.position.set(0,0,2),w.position.set(0,3,5),w.lookAt(0,0,0),this.camera=w,this.renderer=m,this.cube=u,this.scene=h}animate(){this.cube.rotation.x+=.01,this.cube.rotation.y+=.02,this.render()}}
