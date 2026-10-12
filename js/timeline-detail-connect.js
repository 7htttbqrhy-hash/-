// Timeline Detail Connector
// Connect timeline cards with unified detail panel

function bindTimelineDetails(items, detailRouter) {
  if (!items || !detailRouter) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      const type = item.dataset.type || 'history';

      detailRouter.open({
        id,
        type
      });
    });

    item.addEventListener('mouseenter', () => {
      item.classList.add('knowledge-hover');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('knowledge-hover');
    });
  });
}

window.bindTimelineDetails = bindTimelineDetails;
