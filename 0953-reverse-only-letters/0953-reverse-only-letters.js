/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let i=0;
    let j=0;
   
    const isEnglish = (str) => {
        const asc= str.charCodeAt(0);
        if(asc>64 && asc<91 || asc>96 && asc<123){
            return true;
        }
        return false;
    } 
    
    let t=[];
    for(let i=0;i<s.length;i++){
        if(isEnglish(s[i])){
            t.push(s[i]);
        }
    }
    j=t.length-1;
    s=s.split('');
    for(let i=0; i<s.length;i++){
        if(isEnglish(s[i])){
            s[i]=t[j];
            j--
        }
    }
    return s.join('');
};