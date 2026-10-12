const data=[
{year:'1760-1840',title:'工业革命',level:'red',book:'何人可《工业设计史》',info:'设计史的重要转折。机器生产取代手工生产，推动标准化、批量生产和现代设计形成。',exam:'★★★★★ 名词解释｜简答｜论述'},
{year:'1851',title:'水晶宫国际博览会',level:'yellow',book:'何人可《工业设计史》',info:'展示工业革命成果，同时暴露机械生产与审美之间的矛盾。',exam:'★★★★'},
{year:'1880s',title:'工艺美术运动 Arts and Crafts',level:'red',book:'何人可《工业设计史》',info:'威廉·莫里斯与拉斯金倡导恢复手工艺价值。',exam:'★★★★★'},
{year:'1890s',title:'新艺术运动 Art Nouveau',level:'red',book:'何人可《工业设计史》',info:'强调自然曲线和有机形态。',exam:'★★★★'},
{year:'1907',title:'德意志制造联盟',level:'red',book:'何人可《工业设计史》',info:'推动艺术、工业与商业结合。',exam:'★★★★★'},
{year:'1919-1933',title:'包豪斯 Bauhaus',level:'red',book:'何人可《工业设计史》',info:'艺术与技术的新统一，现代设计教育体系的重要基础。',exam:'★★★★★'},
{year:'1920s',title:'装饰艺术运动',level:'yellow',info:'几何形式与现代都市文化结合。',exam:'★★★★'},
{year:'1930s',title:'美国商业设计与流线型设计',level:'yellow',info:'设计成为促进消费的重要手段。',exam:'★★★★'},
{year:'1950s',title:'国际主义设计',level:'red',info:'强调理性、功能和标准化。',exam:'★★★★★'},
{year:'1960s',title:'波普设计',level:'yellow',info:'大众文化进入设计领域。',exam:'★★★★'},
{year:'1970s',title:'后现代主义',level:'red',info:'强调文脉、象征和多元文化。',exam:'★★★★★'},
{year:'1980s',title:'解构主义设计',level:'blue',info:'碎片化、不稳定结构表达。',exam:'★★★'},
{year:'2000+',title:'绿色设计与可持续设计',level:'red',info:'关注生态、资源与社会责任。',exam:'★★★★★'}
];

const box=document.querySelector('#timeline');
const search=document.createElement('input');
search.placeholder='搜索设计运动 / 人物 / 关键词';
search.className='search';
box.parentNode.insertBefore(search,box);
let current='all';
function render(keyword='',level=current){
box.innerHTML='';
data.filter(i=>(level==='all'||i.level===level)&&(i.title+i.info).includes(keyword)).forEach(i=>{
box.innerHTML+=`<section class="node ${i.level}"><h2>${i.year}｜${i.title}</h2><div class="card"><p>${i.info}</p><p>教材：${i.book||'相关设计史知识'}</p><p>考研价值：${i.exam}</p></div></section>`;
});
}
function renderLevel(level){current=level;render(search.value,level)}
render();
search.addEventListener('input',e=>render(e.target.value));