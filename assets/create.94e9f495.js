import{S as o,P as a,W as s,r as t,h as e,d as n,p as i,b as r,s as h,t as d,D as c}from"./three.7b25054d.js";import{c as w}from"./tools.f4cfa2c9.js";import"./index.0851d2b1.js";class p{constructor(o,a){const s=new h;for(let n=0,i=0;n<3;n++,i+=Math.PI/3*2){(0===n?s.moveTo:s.lineTo).call(s,1*Math.cos(i),1*Math.sin(i))}const t=new d(s),e=new i({color:16777215,side:c});this.obj=new r(t,e),o.add(this.obj),this.obj.position.x=a.x,this.obj.position.y=a.y,this.obj.castShadow=!0,this.obj.rotation.x=Math.random()*Math.PI*2,this.obj.rotation.y=Math.random()*Math.PI*2}}export default h=>{const d=new o,c=new a,l=new s({canvas:h,antialias:!0});l.shadowMap.enabled=!0,l.shadowMap.type=t;const m=new e(16777215,1,100);d.add(m),m.castShadow=!0,m.shadow.camera.near=1,m.shadow.camera.far=60,m.shadow.mapSize.width=2048,m.shadow.mapSize.height=2048,m.shadow.bias=-.005,m.position.set(0,0,15);const b=new n(30,30),M=new i({color:4734347,roughness:.8}),j=new r(b,M);j.position.z=-5,j.receiveShadow=!0,d.add(j);const f=[];for(let o=0;o<5;o++)for(let a=0;a<5;a++)f.push(new p(d,{x:10*(a/4-.5),y:10*(o/4-.5)}));c.position.z=20;const S=()=>l.render(d,c);return{setSize:w({camera:c,renderer:l,render:S}),render:S,animate:(o,a)=>{const s=.001*a*Math.PI*.1;c.position.set(10*Math.cos(s),10*Math.sin(s),20),c.lookAt(0,0,0),S()},destroy:()=>{}}};
