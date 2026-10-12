let data=[];
let current='all';

const box=document.querySelector('#timeline');
const search=document.createElement('input');
search.placeholder='搜索设计运动 / 人物 / 关键词';
search.className='search';
box.parentNode.insertBefore(search,box);

fetch('database/design-history.json')
.then(res=>res.json())
.then(json=>{
 data=json;
 render();
});

function render(keyword='',level=current){
 box.innerHTML='';
 data.filter(i=>
 (level==='all'||i.level===level)&&
 JSON.stringify(i).includes(keyword)
 ).forEach(i=>{
  box.innerHTML+=`
  <section class="node ${i.level}" onclick="openDetail('${i.title}')">
   <h2>${i.year}｜${i.title}</h2>
   <div class="card">
    <p>${i.summary||i.info||''}</p>
    <p>教材：${i.book||'相关设计史知识'}</p>
    <p>考研价值：${i.importance||i.exam||''}</p>
   </div>
  </section>`;
 });
}

function renderLevel(level){
 current=level;
 render(search.value,level);
}

function openDetail(title){
 const item=data.find(i=>i.title===title);
 if(!item)return;
 alert(
 `${item.title}\n\n时间：${item.year}\n\n关键词：${(item.keywords||[]).join('、')}\n\n适合题型：${(item.exam||[]).join('、')}`
 );
}

search.addEventListener('input',e=>render(e.target.value));