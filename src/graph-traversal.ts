interface ITraversalGraph {
  vertexNumber: number;
  edges: Map<number, number[]>;
  getVertexEdges: (vertex: number) => number[] | undefined;
  addEdge: (vertex: number, addedVertex: number) => void;

  dfsVisitVertex: (vertex: number, visited: Map<number, boolean>) => void;
  dfsWithStack: (vertex: number) => number[];
  dfsWithRecursion: (vertex: number) => number[];

  bfsVisitVertex: (edges: number[], visited: Map<number, boolean>) => void;
  bfsWithRecursion: (vertex: number) => number[];
  bfsWithQueue: (vertex: number) => number[];
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

  dfsVisitVertex(vertex: number, visited: Map<number, boolean>) {
    visited.set(vertex, true);
    const children = this.getVertexEdges(vertex) as number[];

    for (const i of children) {
      if (!visited.get(i)) {
        this.dfsVisitVertex(i, visited);
      }
    }
  }

  dfsWithRecursion(vertex: number) {
    if (vertex >= this.vertexNumber) {
      return [];
    }
    const visited = new Map<number, boolean>();
    this.dfsVisitVertex(vertex, visited);

    const result = [...visited.keys()];

    return result;
  }

  dfsWithStack(vertex: number) {
    if (this.vertexNumber <= vertex || !this.getVertexEdges(vertex)) {
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

  bfsWithQueue(vertex: number) {
    if (vertex >= this.vertexNumber) {
      return [];
    }

    const visited = new Map<number, boolean>();
    const queue: number[] = [vertex];

    while (queue.length) {
      const currentVertex = queue.shift()!;
      if (!visited.has(currentVertex)) {
        visited.set(currentVertex, true);
        const children = this.getVertexEdges(currentVertex)!;
        for (const child of children) {
          if (!visited.has(child)) {
            queue.push(child);
          }
        }
      }
    }

    return [...visited.keys()];
  }

  bfsVisitVertex(edges: number[], visited: Map<number, boolean>): void {
    if (edges.length === 0) return;

    let nextLevelNodes: number[] = [];

    for (const node of edges) {
      if (!visited.has(node)) {
        visited.set(node, true);
        const children = this.getVertexEdges(node);
        if (children) {
          nextLevelNodes.push(...children.filter((n) => !visited.has(n)));
        }
      }
    }

    this.bfsVisitVertex(nextLevelNodes, visited);
  }

  bfsWithRecursion(vertex: number) {
    if (vertex >= this.vertexNumber) {
      return [];
    }
    const visited = new Map<number, boolean>();
    const levelNodes = [vertex];

    this.bfsVisitVertex(levelNodes, visited);
    return [...visited.keys()];
  }
}
