/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
   let arr = new Array(26);
   for(i=0;i<s.length;i++){
    if(arr[s.charCodeAt(i)-97]== undefined){
        arr[s.charCodeAt(i)-97]=s[i];
    }else{
        return s[i];
    }
   }
    
};