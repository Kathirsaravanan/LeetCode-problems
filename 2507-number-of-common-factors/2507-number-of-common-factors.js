/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let arr1= [],arr2=[];
    for(let i=1;i<=a;i++){
        if(a%i===0){
            arr1.push(i);
        }
    }
    for(let i=1;i<=b;i++){
        if(b%i===0){
            arr2.push(i)
        }
    }
    let map = new Map();
    let cnt=0;
    for(let i=0;i<arr1.length;i++){
        map[arr1[i]]= (map[arr1[i]] || 0) +1;
    }
    for(let i=0;i<arr2.length;i++){
        map[arr2[i]]= (map[arr2[i]] || 0) +1
    }
    for(let i in map){
        if(map[i]===2){
            cnt++
        }
    }
    return cnt;
};