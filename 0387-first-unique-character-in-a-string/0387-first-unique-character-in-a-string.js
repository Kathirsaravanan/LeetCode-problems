/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    for(let i=0;i<s.length;i++){
       let cnt=0;
        for(let j=0;j<s.length;j++){
            if(i==j){
                cnt++
                continue;
            }
            if(s[i]===s[j]){
                break;
            }else{
                cnt++
                
            }
           
        } 
        if(cnt===s.length){
                return i;
            }
    }
    return -1
};