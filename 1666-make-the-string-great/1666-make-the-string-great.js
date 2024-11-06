/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(str) {
    let out='';
    function stringGreat(s){
        let j =1;
        out='';
        let k=0;
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i)-s.charCodeAt(j) === 32 || s.charCodeAt(j)-s.charCodeAt(i) === 32){
            s=s.replace(s[i]+s[j], '');
            k=1;
        }
        j++;
    }
    
    if(k===1){
        s= stringGreat(s);
    }
         return s;
   
    }
    
    out=stringGreat(str);
    return out;
}; 