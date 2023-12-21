import { TraversalGraph } from "../graph-traversal";

describe("Graph", () => {
  test("should initialize with a given number of verticies", () => {
    const vertexNumber = 22;
    const graph = new TraversalGraph(vertexNumber);
    expect(graph.vertexNumber).toBe(vertexNumber);
    expect(graph.edges.size).toBe(vertexNumber);

    graph.edges.forEach((edgeArray) => expect(edgeArray).toEqual([]));
  });
});

describe("addEdge", () => {
  test("add Edges exactly", () => {
    const graph = new TraversalGraph(5);
    graph.addEdge(2, 3);
    graph.addEdge(1, 4);
    expect(graph.getVertexEdges(2)).toEqual([3]);
    expect(graph.getVertexEdges(1)).toEqual([4]);
  });
});

describe("getVertexEdges", () => {
  test("ged Edges of Node", () => {
    const graph = new TraversalGraph(5);
    expect(graph.getVertexEdges(1)).toEqual([]);
  });
});

describe("dfs", () => {
  test("run dfs", () => {
    const vertexNumber = 22;
    const graph = new TraversalGraph(vertexNumber);

    graph.addEdge(1, 2);
    graph.addEdge(2, 4);
    graph.addEdge(2, 5);
    graph.addEdge(2, 7);

    graph.addEdge(9, 20);

    expect(graph.dfs(25).length).toBe(0);
    expect(graph.dfs(21).length).toBe(1);

    expect(graph.dfs(2).length).toBe(4);
    expect(graph.dfs(9).length).toBe(2);
  });

  describe("bfs", () => {
    test("run bfs", () => {
      const vertexNumber = 22;
      const graph = new TraversalGraph(vertexNumber);

      graph.addEdge(1, 2);
      graph.addEdge(2, 4);
      graph.addEdge(2, 5);
      graph.addEdge(2, 7);

      graph.addEdge(9, 20);

      expect(graph.dfs(25).length).toBe(0);
      expect(graph.dfs(21).length).toBe(1);

      expect(graph.dfs(2).length).toBe(4);
      expect(graph.dfs(9).length).toBe(2);
    });
  });
});
