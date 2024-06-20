
BFS = Breadth First Search - Horizontal Search, goes level to level from root level to leaf level
DFS = Depth First Search - Vertical Search, goes deep into left and till leaf Node, then comeback and again
BFS = takes more memory as have to remember all child nodes of one level
DFS = Can be slow


//If you know a solution is not far from the root of the tree:
BFS

//If the tree is very deep and solutions are rare: 
BFS - DFS will be slower

//If the tree is very wide:
DFS - BFS will need too much memory, in a queue

//If solutions are frequent but located deep in the tree:
DFS

//Determining whether a path exists between two nodes:
DFS

//Finding the shortest path:
BFS