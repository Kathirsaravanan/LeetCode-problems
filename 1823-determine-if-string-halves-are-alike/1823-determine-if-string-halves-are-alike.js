/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let arr=['a','e','i','o','u','A','E','I','O','U'];
    let j= s.length/2;
    let cnt=0;
    for(let i=0;i<j;i++){
        if(arr.includes(s[i])){
            cnt++
        }
    }
    for(let i=j;i<s.length;i++){
        if(arr.includes(s[i])){
            cnt--
        }
    }
    if(cnt===0){
        return true
    }else return false
};