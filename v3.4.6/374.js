var e={4960:e=>{e.exports=import("./vyxal/vyxal.js")}},t={};function s(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,s),o.exports}const r="vyxal",a=Promise.all([Promise.resolve().then(s.bind(s,4960)),fetch(`${r}/ShortDictionary.txt`,{cache:"force-cache"}).then((e=>e.text())),fetch(`${r}/LongDictionary.txt`,{cache:"force-cache"}).then((e=>e.text()))]);console.log("Fallback utility worker loaded"),a.then((([{Vyxal:e},t,s])=>{e.setShortDict(t),e.setLongDict(s),self.addEventListener("message",(function(t){const s=t.data;switch(s.type){case"sbcsify":self.postMessage({data:e.getSBCSified(s.code),rqid:s.rqid});break;case"compress":self.postMessage({data:e.compress(s.text),rqid:s.rqid});break;case"decompress":self.postMessage({data:e.decompress(s.text),rqid:s.rqid})}})),self.postMessage("ready")}));
//# sourceMappingURL=374.js.map