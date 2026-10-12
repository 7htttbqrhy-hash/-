const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const html=fs.readFileSync('pages/design-history-timeline-app.html','utf8');
const script=html.match(/<script>([\s\S]*?)<\/script>/)[1];
test('inline JavaScript parses',()=>new vm.Script(script));
const prefix=script.slice(0,script.indexOf('(function boot()'));
const context=vm.createContext({});
vm.runInContext(prefix+';globalThis.nodes=data;globalThis.periods=eras;',context);
test('74 nodes, unique identifiers, chronological order and complete fields',()=>{
 const nodes=context.nodes;assert.equal(nodes.length,74);assert.equal(new Set(nodes.map(x=>x.id)).size,74);
 for(const [i,n] of nodes.entries()){
  for(const k of ['year','title','summary','why','idea','people','works','legacy'])assert.ok(typeof n[k]==='string'&&n[k].length,n.id+': '+k);
  if(i)assert.ok(n.sort>=nodes[i-1].sort,'chronology: '+n.title);
  assert.equal(context.periods.filter(e=>n.sort>=e.start&&n.sort<=e.end).length,1);
  for(const title of n.related)assert.ok(nodes.some(x=>x.title===title),'unresolved: '+title);
 }
});
test('all literal element references resolve',()=>{
 const generated=['markDone','copyLink','copyStatus'];
 for(const [,id] of script.matchAll(/\$\("([A-Za-z][\w-]*)"\)/g))assert.ok(generated.includes(id)||html.includes('id="'+id+'"'),'missing '+id);
});
