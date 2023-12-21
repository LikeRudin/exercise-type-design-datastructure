import type { IGraphNode } from "./type";

class GraphNode<T> implements IGraphNode<T> {
	val: T;
	edges: IGraphNode<T>[];

	constructor(val: T) {
		this.val = val;
		this.edges = [];
	}
}

export class DFSGraph<T> {
	vertexNumber: number;
	edges: IGraphNode<T>[];

	constructor(vertexNumber: number) {
		this.vertexNumber = vertexNumber;
		this.edges = new Array(vertexNumber).fill([]);
	}
}
