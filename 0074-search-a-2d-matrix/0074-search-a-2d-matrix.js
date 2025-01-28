/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(arr, target) {
   let n = arr[0].length;
   
   let s=0;
   let e = n * arr.length-1;

   while(s<=e){
    let mid = Math.floor((s+e)/2);
    let mid_val = arr[Math.floor(mid/n)][mid%n]
    if(mid_val === target){
        return true
    }else if(mid_val< target){
        s= mid+1
    }else{
        e=mid-1
    }
   }
   return false
};