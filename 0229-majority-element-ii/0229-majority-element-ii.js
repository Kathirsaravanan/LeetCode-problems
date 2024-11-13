/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let map = new Map();
    let out =[];
   for(let i=0;i<nums.length;i++){
    if(map[nums[i]]){
        map[nums[i]]++
    }else{
        map[nums[i]]=1
    }
   }
   let times =  nums.length/3;
   for(let i in map){
    if(map[i]>times){
        out.push(parseInt(i))
    }
   }
   return out
}