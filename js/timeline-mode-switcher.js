// Design history timeline dual mode controller
const TimelineModes = {
  current: 'history',
  modes: {
    history: {
      title: '历史演变模式',
      subtitle: '时代变化 → 社会问题 → 设计回应 → 运动形成 → 历史影响'
    },
    exam: {
      title: '考研复习模式',
      subtitle: '知识节点 → 重要等级 → 人物作品 → 答题方向'
    }
  },
  switch(mode){
    if(!this.modes[mode]) return;
    this.current = mode;
    document.body.dataset.timelineMode = mode;
    const title=document.querySelector('.title');
    const sub=document.querySelector('.sub');
    if(title) title.textContent=this.modes[mode].title;
    if(sub) sub.textContent=this.modes[mode].subtitle;
    document.querySelectorAll('.card').forEach(card=>{
      card.classList.toggle('exam-mode',mode==='exam');
    });
  }
};
window.TimelineModes=TimelineModes;
