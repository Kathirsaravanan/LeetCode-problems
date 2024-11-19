/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length<1){
        return true
    }
    let out='';
    for(let i=0;i<s.length;i++){
        let asc = s.charCodeAt(i);
        if(asc>64 && asc< 91){
            asc+=32
        }
        if(asc>96 && asc<123 || asc>47 && asc<58){
            out+=String.fromCodePoint(asc);
        }
        
    }
    
    let j=out.length-1;
    for(let i=0;i<out.length;i++){
        if(out[i]!== out[j]){
            return false
        }
        j--;
    }
    return true
};