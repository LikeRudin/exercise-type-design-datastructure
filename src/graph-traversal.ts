interface ITraversalGraph {
  vertexNumber: number;
  edges: Map<number, number[]>;
  getVertexEdges: (vertex: number) => number[] | undefined;
  addEdge: (vertex: number, addedVertex: number) => void;
  dfs: (vertex: number) => number[];
  bfs: (vertex: number) => number[];
  visitVertex: (vertex: number, visited: Map<number, boolean>) => void;
}

export class TraversalGraph implements ITraversalGraph {
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

  bfs(vertex: number) {
    if (vertex >= this.vertexNumber || this.getVertexEdges(vertex)) {
      return [];
    }
    const stack: number[] = [];
    stack.push(vertex);
    const visited = new Map<number, boolean>();

    while (stack.length) {
      const target = stack.pop() as number;
      visited.set(target, true);
      const children = this.getVertexEdges(target)!;
      for (const child of children) {
        if (!visited.get(child)) {
          stack.push(child);
        }
      }
    }
    const result = [...visited.keys()];
    return result;
  }
}
