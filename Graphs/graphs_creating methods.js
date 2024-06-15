// Example Graph

//     2-------0
//     /\
//    /  \
//   /    \
//  1------3

//Edge list - two point connecting array
const graphE = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

//Adjacent List - connections array
const graphAL = [[2], [2, 3], [0, 1, 3], [1, 2]];

//Adjacent Matrix - 0 is no connection , 1 is connection
const graphAM = {
  0: [0, 0, 1, 0], // 0 connected to index 2
  1: [0, 0, 1, 1], // 2 connected to index 0,1,3
  2: [1, 1, 0, 1],
  3: [0, 1, 1, 0],
};
