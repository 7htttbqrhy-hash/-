let data=[];
let current='all';

const box=document.querySelector('#timeline');
const search=document.createElement('input');
search.placeholder='搜索设计运动 / 人物 / 关键词';
search.className='search';
box.parentNode.insertBefore(search,box);

const panel=document.createElement('aside');
panel.id='detailPanel';
document.body.appendChild(panel);

fetch('database/design-history.json')
.then(res=>res.json())
.then(json=>{
 data=json;
 render();
});

function render(keyword='',level=current){
 box.innerHTML='';
 data.filter(i=>(level==='all'||i.level===level)&&JSON.stringify(i).includes(keyword)).forEach(i=>{
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

function renderLevel(level){current=level;render(search.value,level)}

function openDetail(title){
 const item=data.find(i=>i.title===title);
 if(!item)return;
 panel.innerHTML=`
 <button onclick="closeDetail()">×</button>
 <h2>${item.title}</h2>
 <h3>${item.year||''}</h3>
 <p>${item.summary||''}</p>
 <hr>
 <p><b>关键词：</b>${(item.keywords||[]).join('、')}</p>
 <p><b>教材：</b>${item.book||'相关知识点'}</p>
 <p><b>题型：</b>${(item.exam||[]).join('、')}</p>
 <p><b>重要程度：</b>${item.importance||''}</p>`;
 panel.classList.add('active');
}

function closeDetail(){panel.classList.remove('active')}
search.addEventListener('input',e=>render(e.target.value));