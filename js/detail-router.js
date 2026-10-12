// Knowledge detail routing module
// Connects search/timeline/graph results to a unified detail panel.

const DetailRouter = {
  current: null,

  open(item) {
    this.current = item;
    const panel = document.querySelector('#detail-panel');
    if (!panel) return;

    panel.innerHTML = `
      <div class="detail-header">
        <span class="level ${item.level || ''}">${item.level || 'knowledge'}</span>
        <button class="detail-close" onclick="DetailRouter.close()">×</button>
      </div>
      <h2>${item.name || ''}</h2>
      <p>${item.summary || ''}</p>
      <div class="detail-meta">
        ${item.time ? `<span>${item.time}</span>` : ''}
        ${item.type ? `<span>${item.type}</span>` : ''}
      </div>
    `;

    panel.classList.add('active');
  },

  close() {
    const panel = document.querySelector('#detail-panel');
    if (panel) panel.classList.remove('active');
    this.current = null;
  }
};

window.DetailRouter = DetailRouter;
