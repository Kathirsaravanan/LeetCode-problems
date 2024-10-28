/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    
   let max1=-Infinity,max2=-Infinity,max3=-Infinity
   let min1=Infinity , min2=Infinity;
   for(let i=0;i<nums.length;i++){
    if(max1<nums[i]){
        max3=max2;
        max2=max1;
        max1=nums[i];
    }else if(max2<nums[i]){
        max3=max2;
        max2=nums[i];
        
    }else if(max3<nums[i]){
        max3=nums[i];
    }
   }
   for(let i=0;i<nums.length;i++){
    if(min1>nums[i]){
        min2=min1;
        min1=nums[i];
    }else if(min2>nums[i]){
        min2=nums[i];
    }
   }
   let out=max1*max2*max3>max1*min1*min2?max1*max2*max3:max1*min1*min2;
   return out;
};