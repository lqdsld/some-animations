import{S as t,W as s,P as n,h as o,f as a,p as e,b as i,c as r,Q as h}from"./three.7b25054d.js";import{t as c}from"./index.6898e09e.js";import{c as d}from"./tools.f4cfa2c9.js";import"./index.0851d2b1.js";const p=[.3,1];class u{constructor(t,s,n,o,h,d){const u=new a(.45,.45,.45),m=new e({color:6291456,roughness:1,metalness:.3});m.wireframeLinewidth=2,this.cube=new i(u,m),this.pos=new r(t,s,n),this.cube.position.set(t,s,n),this.dir=new r(o,h,d),this.num=Math.random(),this.amp=1*Math.random()/2,this.hz=c(p,Math.random())}update(t){const s=this.amp+this.amp*Math.sin((t*this.hz+this.num)*Math.PI*2);this.cube.position.set(this.pos.x,this.pos.y,this.pos.z);const n=new r(this.dir.x,this.dir.y,this.dir.z).multiplyScalar(s);this.cube.position.add(n)}}function m(){const t=[];t.push(new r(0,0,1));for(let n=0;n<20;n++)for(let s=0;s<20;s++)t.push(new r(.5*(s+.5)-5,.5*(n+.5)-5,-5));const s=[];return[null,[[0,1,0],Math.PI/2],[[0,1,0],Math.PI/2],[[0,1,0],Math.PI/2],[[0,0,1],Math.PI/2],[[0,0,1],Math.PI]].forEach((n=>{if(n){const[s,o]=n;!function(t,s,n){const o=new h;o.setFromAxisAngle(s,n);for(const a of t)a.applyQuaternion(o)}(t,new r(...s),o)}const o=t[0];s.push(...t.reduce(((t,s,n)=>{if(!n)return t;const a=new u(s.x-.45*o.x/2,s.y-.45*o.y/2,s.z-.45*o.z/2,o.x,o.y,o.z);return t.push(a),t}),[]))})),s}export default a=>{const e=new t,i=new s({canvas:a}),h=new n(100,0,.1,100);h.position.set(0,0,0);const c=new o(16777215,15,15,5);c.position.set(0,0,0),e.add(c);const p=m();p.forEach((t=>e.add(t.cube)));const u=new r(.01*(2*Math.random()-1),.01*(2*Math.random()-1),.01*(2*Math.random()-1)),f=()=>i.render(e,h);return{animate:(t,s)=>{const n=.001*s;p.forEach((t=>t.update(n)));const o=Math.sin(n*Math.PI*2*.05);h.fov=75+50*o,h.rotation.y=n*Math.PI*2*u.x,h.rotation.x=n*Math.PI*2*u.y,h.rotation.z=n*Math.PI*2*u.z,h.updateProjectionMatrix(),f()},setSize:d({render:f,renderer:i,camera:h}),destroy:()=>{}}};
