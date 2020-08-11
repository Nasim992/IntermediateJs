const nums = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<nums.length;i++) {
 
//     if(nums[i]>3) {
//         break;  // break out the loop
//     }
//     console.log(nums[i]);
// }
for(let i=0;i<nums.length;i++) {
 
    if(nums[i]==9) {
        continue;  //skip the particular element 
    }
    console.log(nums[i]);
}