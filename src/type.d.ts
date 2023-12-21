export interface NodeStructure<T> {
	val: T;
	next: NodeStructure<T> | null;
	prev?: NodeStructure<T> | null;
}

export interface IGraphNode<T> {
	val: T;
	edges: IGraphNode<T>[];
}

export interface NodeForBinaryTree<T> {
	val: T;
	left: NodeForBinaryTree<T> | null;
	right: NodeForBinaryTree<T> | null;
}

export interface BinaryTree<T> {
	root: NodeForBinaryTree<T> | null;
}

export interface LinkedList<T> {
	head: NodeStructure<T> | null;
	tail: NodeStructure<T> | null;
	length: number;
	push: Function;
	pop: Function;
	insert: Function;
	reverse: Function;
	remove: Function;
	shift: Function;
	unshift: Function;
	get: Function;
	set: Function;
}
