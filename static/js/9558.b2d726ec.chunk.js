"use strict";(self.webpackChunk_1_react=self.webpackChunk_1_react||[]).push([[9558],{9558:(e,t,a)=>{a.d(t,{ParallaxMover:()=>i});var n=a(4409);class i{init(){}isEnabled(e){return!(0,n.B9)()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const t=e.container,a=t.actualOptions.interactivity.events.onHover.parallax;if((0,n.B9)()||!a.enable)return;const i=a.force,r=t.interactivity.mouse.position;if(!r)return;const s=t.canvas.size,o=.5*s.width,c=.5*s.height,l=a.smooth,u=e.getRadius()/i,v=(r.x-o)*u,p=(r.y-c)*u,{offset:f}=e;f.x+=(v-f.x)/l,f.y+=(p-f.y)/l}}}}]);
//# sourceMappingURL=9558.b2d726ec.chunk.js.map