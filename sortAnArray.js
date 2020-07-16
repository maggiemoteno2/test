
var numbers = [24,8,23,32,5,62];
numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
// My answer should be like this: 
[5, 8, 23, 24, 32, 62]