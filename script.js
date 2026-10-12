const data=[
{year:'1851',title:'水晶宫国际博览会',level:'yellow',info:'工业革命后机械生产展示的重要事件，体现工业技术与设计关系。'},
{year:'1880s',title:'工艺美术运动',level:'red',info:'英国设计改革运动，代表人物威廉·莫里斯，强调手工艺价值。'},
{year:'1907',title:'德意志制造联盟',level:'red',info:'德国现代设计运动的重要组织，推动艺术、工业与商业结合。'},
{year:'1919',title:'包豪斯 Bauhaus',level:'red',info:'艺术与技术的新统一。代表人物格罗皮乌斯、米斯·凡德罗。'},
{year:'1960s',title:'波普设计',level:'yellow',info:'大众文化进入设计领域，关注消费社会。'},
{year:'1970s',title:'后现代主义',level:'red',info:'反思现代主义单一理性，强调文脉与象征。'}
];
const box=document.querySelector('#timeline');
data.forEach(i=>{box.innerHTML+=`<section class="node ${i.level}"><h2>${i.year}｜${i.title}</h2><div class="card">${i.info}</div></section>`})
