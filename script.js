const data=[
{year:'1760-1840',title:'工业革命',level:'red',book:'何人可《工业设计史》',info:'设计史的重要转折。机器生产取代手工生产，推动标准化、批量生产和现代设计形成。',exam:'★★★★★ 名词解释｜简答｜论述'},
{year:'1851',title:'水晶宫国际博览会',level:'yellow',book:'何人可《工业设计史》',info:'展示工业革命成果，同时暴露机械生产与审美之间的矛盾，推动设计改革。',exam:'★★★★'},
{year:'1880s',title:'工艺美术运动 Arts and Crafts',level:'red',book:'何人可《工业设计史》',info:'英国设计改革运动，威廉·莫里斯与拉斯金倡导恢复手工艺价值，反对工业化造成的粗制滥造。',exam:'★★★★★'},
{year:'1890s',title:'新艺术运动 Art Nouveau',level:'red',book:'何人可《工业设计史》',info:'强调自然曲线和有机形态，反对历史样式复古，为现代设计探索新形式。',exam:'★★★★'},
{year:'1907',title:'德意志制造联盟 Deutscher Werkbund',level:'red',book:'何人可《工业设计史》',info:'德国现代设计组织，推动艺术、工业和商业结合。代表人物穆特修斯、贝伦斯。',exam:'★★★★★'},
{year:'1919-1933',title:'包豪斯 Bauhaus',level:'red',book:'何人可《工业设计史》',info:'现代设计教育体系的重要基础，提出艺术与技术的新统一，强调功能主义和标准化。',exam:'★★★★★'},
{year:'1920s',title:'装饰艺术运动 Art Deco',level:'yellow',info:'强调几何形式、现代都市感和装饰性，是两次世界大战之间的重要设计风格。',exam:'★★★★'},
{year:'1930s',title:'美国商业设计与流线型设计',level:'yellow',info:'设计成为促进消费的重要手段，代表人物雷蒙德·罗维。',exam:'★★★★'},
{year:'1950s',title:'国际主义设计',level:'red',info:'继承现代主义思想，强调理性、功能和标准化，代表米斯·凡德罗。',exam:'★★★★★'},
{year:'1960s',title:'波普设计 Pop Design',level:'yellow',info:'大众文化进入设计领域，回应消费社会和商业文化。',exam:'★★★★'},
{year:'1970s',title:'后现代主义',level:'red',info:'反思现代主义单一理性，强调文脉、象征和装饰意义。',exam:'★★★★★'},
{year:'1980s',title:'解构主义设计',level:'blue',info:'强调非稳定结构、碎片化和新的空间表达。',exam:'★★★'},
{year:'2000+',title:'绿色设计与可持续设计',level:'red',info:'关注生态环境、资源节约和社会责任，是当代设计的重要方向。',exam:'★★★★★'}
];

const box=document.querySelector('#timeline');
data.forEach(i=>{box.innerHTML+=`
<section class="node ${i.level}">
<h2>${i.year}｜${i.title}</h2>
<div class="card">
<p>${i.info}</p>
<p>教材：${i.book||'相关设计史知识'}</p>
<p>考研价值：${i.exam}</p>
</div>
</section>`})