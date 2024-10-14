/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let t=s;
    let i=0;
    let j=1;
    let n= s.length;
    while(i<n){
        if(s.charCodeAt(i) - s.charCodeAt(j)=== 32 || s.charCodeAt(j) - s.charCodeAt(i)=== 32){
           s=s.replace(s[i]+s[j],''); 
           n-=2;
           i--;
           j--;
           
        }else{
            i++;
        j++;
        }
        
    }
    return s;
};