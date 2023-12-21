interface IDFSGraph {
  vertexNumber: number;
  edges: Map<number, number[]>;
  getVertexEdges: (vertex: number) => number[] | undefined;
  addEdge: (vertex: number, addedVertex: number) => void;
  dfs: (vertex: number) => number[];
  visitVertex: (vertex: number, visited: Map<number, boolean>) => void;
}

export class DFSGraph implements IDFSGraph {
  vertexNumber: number;
  edges: Map<number, number[]>;

  constructor(vertexNumber: number) {
    this.vertexNumber = vertexNumber;
    this.edges = new Map(
      Array.from({ length: vertexNumber }, (_, index) => [index, []])
    );
  }
  getVertexEdges(v: number) {
    return this.edges.get(v);
  }

  addEdge(vertex: number, addedVertex: number) {
    const existingEdges = this.edges.get(vertex);
    this.edges.set(
      vertex,
      existingEdges ? [...existingEdges, addedVertex] : [addedVertex]
    );
  }

  visitVertex(vertex: number, visited: Map<number, boolean>) {
    visited.set(vertex, true);
    const children = this.getVertexEdges(vertex) as number[];

    for (const i of children) {
      if (!visited.get(i)) {
        this.visitVertex(i, visited);
      }
    }
  }

  dfs(vertex: number) {
    if (vertex >= this.vertexNumber) {
      return [];
    }
    const visited = new Map<number, boolean>();
    this.visitVertex(vertex, visited);

    const result = [...visited.keys()];

    return result;
  }
}
