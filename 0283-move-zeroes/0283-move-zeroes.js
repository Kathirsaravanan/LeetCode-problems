/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
      let temp=0;
      let i=0,j=0;
      while(i<=nums.length-1){
        if(nums[i]!==0){
            temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            j++;
        }
        i++
      }
      return nums;
};