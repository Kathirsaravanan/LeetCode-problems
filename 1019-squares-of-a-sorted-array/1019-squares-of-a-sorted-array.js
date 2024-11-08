/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let out = [];
    let i=0,j=nums.length-1
    while(i<=j){
        let k=0;
        if(Math.abs(nums[i])<nums[j]){
            k=nums[j]*nums[j];
            j--
        }else{
            k= nums[i]*nums[i]
            i++
        }
        out.unshift(k);
    }
    return out;
};