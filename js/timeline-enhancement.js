// Design History Timeline interaction enhancement
// 设计史时间轴增强模块

const timelineEnhancement = {
  principles: [
    '时代变化',
    '社会问题',
    '设计回应',
    '运动形成',
    '历史影响'
  ],
  detailSections: [
    '出现原因',
    '核心矛盾',
    '代表人物',
    '代表作品',
    '后续影响',
    '考研价值'
  ],
  connectNodes(nodes){
    return nodes.map((node,index)=>({
      ...node,
      next:nodes[index+1]?.year || null
    }));
  }
};

window.timelineEnhancement = timelineEnhancement;
