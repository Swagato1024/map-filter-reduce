matrix = [[1, 2, 3], [4, 5, 6]];

const transpose = (matrix) => {
  return matrix[0].map((_, index) => matrix.map((list) => list[index]));  
}

console.log(transpose(matrix))

list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const map = (matrix) => {
  return matrix[0].map((_, index) => {
    return Math.max(...matrix.map((list) => list[index]));
  });
}
