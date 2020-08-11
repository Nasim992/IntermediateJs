const nums = [1,2,3,4,5,6,7,8,9,10];
const part = nums.slice(2,5); // which index to which index
console.log(part);
console.log(nums);

const removed = nums.splice(2,5,77,78,99); // where it starts and how many delete counts  and there we can also inject elements.
console.log(removed);
console.log(nums);

const together = nums.join(",");  // join all the elements inside an array 
console.log(together);