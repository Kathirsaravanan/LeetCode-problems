/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let arr=['a','e','i','o','u','A','E','I','O','U'];
    let j= s.length/2;
    let cnt=0;
    for(let i=0;i<j;i++){
       if(s[i]=== 'a' ||s[i]=== 'e' ||s[i]=== 'i' ||s[i]=== 'o' ||s[i]=== 'u' ||s[i]=== 'A' ||s[i]=== 'E' ||s[i]=== 'I' ||s[i]=== 'O' ||s[i]=== 'U' ){
        cnt++;
    }
    }
    for(let i=j;i<s.length;i++){
        if(s[i]=== 'a' ||s[i]=== 'e' ||s[i]=== 'i' ||s[i]=== 'o' ||s[i]=== 'u' ||s[i]=== 'A' ||s[i]=== 'E' ||s[i]=== 'I' ||s[i]=== 'O' ||s[i]=== 'U' ){
        cnt--;
    }
    }
    if(cnt===0){
        return true
    }else return false
};