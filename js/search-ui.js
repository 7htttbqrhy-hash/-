// Global search UI integration
// Connects search engine with dashboard interface

class SearchUI {
  constructor(engine) {
    this.engine = engine;
    this.results = [];
  }

  query(keyword, level = 'all') {
    this.results = this.engine.search(keyword, level);
    return this.results;
  }

  render(results, container) {
    if (!container) return;
    container.innerHTML = results.map(item => `
      <article class="search-result-card">
        <h3>${item.title || item.name}</h3>
        <span>${item.level || ''}</span>
        <p>${item.summary || item.description || ''}</p>
      </article>
    `).join('');
  }
}

window.SearchUI = SearchUI;
