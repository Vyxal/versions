(self.webpackChunkvyxal_github_io=self.webpackChunkvyxal_github_io||[]).push([[547],{3616:t=>{var e;self,e=()=>{return t=e={},Object.defineProperty(t,"__esModule",{value:!0}),t.FitAddon=void 0,t.FitAddon=class{activate(t){this._terminal=t}dispose(){}fit(){const t=this.proposeDimensions();if(!t||!this._terminal||isNaN(t.cols)||isNaN(t.rows))return;const e=this._terminal._core;this._terminal.rows===t.rows&&this._terminal.cols===t.cols||(e._renderService.clear(),this._terminal.resize(t.cols,t.rows))}proposeDimensions(){if(!this._terminal)return;if(!this._terminal.element||!this._terminal.element.parentElement)return;const t=this._terminal._core,e=t._renderService.dimensions;if(0===e.css.cell.width||0===e.css.cell.height)return;const n=0===this._terminal.options.scrollback?0:t.viewport.scrollBarWidth,r=window.getComputedStyle(this._terminal.element.parentElement),i=parseInt(r.getPropertyValue("height")),s=Math.max(0,parseInt(r.getPropertyValue("width"))),a=window.getComputedStyle(this._terminal.element),o=i-(parseInt(a.getPropertyValue("padding-top"))+parseInt(a.getPropertyValue("padding-bottom"))),l=s-(parseInt(a.getPropertyValue("padding-right"))+parseInt(a.getPropertyValue("padding-left")))-n;return{cols:Math.max(2,Math.floor(l/e.css.cell.width)),rows:Math.max(1,Math.floor(o/e.css.cell.height))}}},e;var t,e},t.exports=e()},2256:(t,e,n)=>{n.r(e),n.d(e,{default:()=>c});var r=n(4848),i=n(6540),s=n(7856),a=n(3616),o=class extends EventTarget{dispatchTypedEvent(t,e){return super.dispatchEvent(e)}};var l;!function(t){t[t.Terminated=0]="Terminated",t[t.TimedOut=1]="TimedOut"}(l||(l={}));class u extends o{constructor(t,e){super(),this.workerCounter=0,this.outputBuffer=[],this._state="booting",this.currentGroup=0,this.runAllGroups=!0,this.splashes=t,this.version=e,this.worker=this.spawnWorker()}attach(t){if(null!=this.terminal)throw new Error("Already attached");this.terminal=new s.Terminal({scrollback:1e3,convertEol:!0}),this.fit=new a.FitAddon,this.terminal.loadAddon(this.fit),this.terminal.open(t),this.fit.fit(),new ResizeObserver((()=>requestAnimationFrame((()=>this.onResize())))).observe(t),this.terminal.writeln(`[?25lWelcome to [1;95mVyxal[0m ${this.version}`),this.terminal.writeln(`[2;3m${this.splashes[Math.floor(Math.random()*this.splashes.length)]}[0m`),console.log("Terminal attached")}onResize(){this.fit?.fit()}detach(){if(null==this.terminal)throw new Error("Not attached");this.terminal.dispose(),this.terminal=null,this.fit=null,console.log("Terminal detached")}get state(){return this._state}spawnWorker(){return console.log("Spawning new worker"),this.workerCounter+=1,new Promise((t=>{const e=new Worker(new URL(n.p+n.u(941),n.b),{type:"module"}),r=n=>{"ready"==n.data.type&&(t(e),e.addEventListener("message",this.onWorkerMessage.bind(this)),e.removeEventListener("message",r),console.log("Worker is ready"),this._state="idle",this.dispatchTypedEvent("ready",new Event("ready")))};e.addEventListener("message",r)}))}runningGroupChanged(t){this.dispatchTypedEvent("runningGroupChanged",new CustomEvent("runningGroupChanged",{detail:{group:t}}))}onWorkerMessage(t){const e=t.data;if(e.workerNumber==this.workerCounter){if(null!=this.terminal)switch(e.type){case"started":this._state="running",this.runningGroupChanged(this.currentGroup);break;case"stdout":{this.terminal.write(e.text);const t=this.outputBuffer.at(-1);t.push(e.text),t.length=Math.min(t.length,2e4);break}case"stderr":this.terminal.write(`[31m${e.text}[0m`);break;case"worker-notice":this.terminal.writeln(`[2m${e.text}[0m`);break;case"done":{null!=this.timeoutHandle&&window.clearTimeout(this.timeoutHandle);const t=performance.now();this.terminal?.writeln(`\n[0G[0;2mFinished in ${Math.round(t-this.groupStartedAt)/1e3} seconds[0m`),this.inputs.length>0&&this.outputBuffer.at(-1).join("").trim()==this.inputs[this.currentGroup].name&&this.dispatchTypedEvent("groupSucceeded",new CustomEvent("groupSucceeded",{detail:{group:this.currentGroup}})),this.runAllGroups&&this.inputs.length>0&&++this.currentGroup!=this.inputs.length&&"running"==this._state?this.runNextGroup(this.code,this.flags):(this.terminal?.writeln(`[1;92mExecution completed[0m in ${Math.round(t-this.executionStartedAt)/1e3} seconds`),this._state="idle",this.runningGroupChanged(null));break}}}else console.warn("Discarding old worker message")}runNextGroup(t,e){const n=this.inputs[this.currentGroup],r=n?.inputs??[];return null!=n&&this.terminal?.writeln(`[92mRunning group: ${n.name}[0m`),this.outputBuffer.push([]),this.worker.then((n=>{this.groupStartedAt=performance.now(),null!=this.timeout&&(this.timeoutHandle=window.setTimeout((()=>{this.terminate(l.TimedOut)}),1e3*this.timeout)),n.postMessage({code:t,flags:e,inputs:r.map((({input:t})=>t)),workerNumber:this.workerCounter})}))}async start(t,e,n,r,i){if("lyxal"!=t){if("running"==this._state)throw new Error("Attempted to start while running");await this.worker,this.terminal?.clear(),this.terminal?.reset(),this.outputBuffer.length=0,this.inputs=[...n],this.currentGroup=null!=r?r:0,this.runAllGroups=null==r,this.code=t,this.flags=e,this.timeout=i,this.runNextGroup(t,e).then((()=>{this.executionStartedAt=this.groupStartedAt}))}else window.location.assign("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}async terminate(t=l.Terminated){if("running"!=this._state)throw new Error("Attempted to terminate worker while not running");console.log("Terminating worker"),await this.worker.then((e=>{switch(this._state="booting",this.worker=this.spawnWorker(),e.terminate(),this.terminal?.writeln("\n[0G-------"),t){case l.Terminated:this.terminal?.writeln("[1;31mExecution terminated[0m");break;case l.TimedOut:this.terminal?.writeln("[1;31mExecution timed out[0m")}this.runningGroupChanged(null),null!=this.timeoutHandle&&window.clearTimeout(this.timeoutHandle)}))}getOutput(){return this.outputBuffer.join("")}showMessage(t){"idle"==this._state&&(this.terminal?.clear(),this.terminal?.reset(),this.terminal?.write(t))}}var h=n(7656);var d=n(8603);const m=(0,i.forwardRef)((function({onRunningGroupChanged:t,onGroupSucceeded:e,onReady:n},s){const a=(0,i.useRef)(null),o=(0,i.useContext)(h.i),m=(0,i.useMemo)((()=>new u("Over 200 stars on Github!\nLow-fat, no sodium\nTerse yet convenient\nCompatible with all leading brands\nKitchen sink not included\nBatteries included\nGluten free\n".trim().split("\n"),o.version)),[o]),c=(0,i.useRef)(!1),p=(0,i.useCallback)((e=>{t(e.detail.group)}),[t]),w=(0,i.useCallback)((t=>{e(t.detail.group)}),[e]);return(0,i.useImperativeHandle)(s,(()=>({start(t,e,n,r,i){m.start(t,[...(0,d.s)(o.flagDefs,e)],n,r,i)},stop:()=>m.terminate(l.Terminated),getOutput:()=>m.getOutput(),showMessage:t=>m.showMessage(t)}))),(0,i.useEffect)((()=>(m.addEventListener("runningGroupChanged",p),m.addEventListener("groupSucceeded",w),c.current||(c.current=!0,m.addEventListener("ready",(()=>n?.()),{once:!0})),()=>{m.removeEventListener("runningGroupChanged",p)})),[n,m,p,w]),(0,i.useEffect)((()=>(m.attach(a.current),()=>{m.detach()})),[m]),(0,r.jsx)("div",{ref:a,className:"terminal-wrapper"})})),c=m}}]);
//# sourceMappingURL=../maps/terminal.41c24d0b.js.map