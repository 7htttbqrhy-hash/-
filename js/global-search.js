// Global Search Engine
// Connects timeline, designers, works and exam bank modules.

const SearchEngine = {
  sources: [
    { name: 'design-history', file: 'database/design-history.json' },
    { name: 'designers', file: 'database/designers.json' },
    { name: 'works', file: 'database/works.json' },
    { name: 'exam-bank', file: 'database/exam-bank.json' }
  ],

  normalize(text) {
    return String(text || '').toLowerCase();
  },

  match(item, keyword) {
    const content = this.normalize(JSON.stringify(item));
    return content.includes(this.normalize(keyword));
  },

  filterByLevel(results, level) {
    if (!level || level === 'all') return results;
    return results.filter(item => item.level === level);
  }
};

window.SearchEngine = SearchEngine;
