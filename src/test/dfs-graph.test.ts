import { DFSGraph } from "../dfs-graph";

describe("Graph", () => {
	test("should initialize with a given number of verticies", () => {
		const vertexNumber = 22;
		const graph = new DFSGraph(vertexNumber);
		expect(graph.vertexNumber).toBe(vertexNumber);
		expect(graph.edges.length).toBe(vertexNumber);

		graph.edges.forEach((edgeArray) => expect(edgeArray).toEqual([]));
	});
});
