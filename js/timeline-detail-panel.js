// Timeline detail interaction module
// Connects timeline nodes with expanded historical narratives

const TimelineDetailPanel = {
  open(data) {
    const panel = document.querySelector('.timeline-detail-panel');
    if (!panel || !data) return;

    panel.innerHTML = `
      <div class="detail-period">${data.period || ''}</div>
      <h2>${data.title || ''}</h2>
      <section><h3>出现原因</h3><p>${data.reason || ''}</p></section>
      <section><h3>核心问题</h3><p>${data.problem || ''}</p></section>
      <section><h3>代表人物</h3><p>${data.people || ''}</p></section>
      <section><h3>历史影响</h3><p>${data.impact || ''}</p></section>
    `;

    panel.classList.add('show');
  },

  close() {
    const panel = document.querySelector('.timeline-detail-panel');
    if (panel) panel.classList.remove('show');
  }
};

window.TimelineDetailPanel = TimelineDetailPanel;
