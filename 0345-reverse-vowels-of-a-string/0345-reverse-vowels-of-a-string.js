/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const isVowels = (str) => {
         if( str.charCodeAt(0)=== 65 ||str.charCodeAt(0)=== 69 ||str.charCodeAt(0)=== 73 || str.charCodeAt(0)===79 ||str.charCodeAt(0)=== 85 ||str.charCodeAt(0)=== 97 ||str.charCodeAt(0)=== 101 ||str.charCodeAt(0)=== 105 ||str.charCodeAt(0)=== 111 ||str.charCodeAt(0)=== 117 ) {
        return true
    }else return false
    }
    let i=0;
    let j=s.length-1;
    let temp='';
    s=s.split('');
    while(i<=j){
        if(isVowels(s[i]) && isVowels(s[j])){
            temp=s[i];
            s[i]=s[j];
            s[j]=temp;
            i++;
            j--;
        }else if(isVowels(s[i])){
            j--;
        }else if(isVowels(s[j])){
            i++
        }else{
            i++;
            j--;
        }
        
    }
    return s.join('');
};