/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=  s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    let i=0;
    let j=s.length-1;
    while(i<=j){
        if(s[i]!==s[j]){
            return false
        }else if(s[i]===s[j]){
            i++;
            j--;
        }
        
    }
    return true;
};