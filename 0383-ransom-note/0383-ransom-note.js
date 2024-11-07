/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const out = new Map();
    
    for(let i=0;i<magazine.length;i++){
        if(out[magazine[i]]){
            out[magazine[i]]++
        }else{
            out[magazine[i]]=1;
        }
    }
    for(let c of ransomNote){
        if(!out[c] || out[c]<=0){
            return false
        }
        out[c]--;
    }
    return true
};