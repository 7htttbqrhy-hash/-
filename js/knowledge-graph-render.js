// Knowledge Graph Renderer
// Connects knowledge-graph configuration with interactive nodes.

class KnowledgeGraphRenderer {
  constructor(config) {
    this.config = config || { nodes: [], relations: [] };
  }

  getNodesByLevel(level) {
    return this.config.nodes.filter(node => node.level === level);
  }

  getRelatedNodes(id) {
    const relations = this.config.relations || [];
    return relations
      .filter(item => item.source === id || item.target === id)
      .map(item => item.source === id ? item.target : item.source);
  }

  createNodeCard(node) {
    return {
      title: node.name,
      type: node.type,
      importance: node.importance,
      color: node.importance === 'red' ? 'red' : node.importance === 'yellow' ? 'yellow' : 'blue'
    };
  }
}

window.KnowledgeGraphRenderer = KnowledgeGraphRenderer;
