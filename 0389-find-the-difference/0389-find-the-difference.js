/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // let arr = new Array(26);
    // arr.fill(0);
    // for(let i=0;i<t.length;i++){
    //     arr[t.charCodeAt(i)-97]++
    //     arr[s.charCodeAt(i)-97]--
    // }
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i]>0){
    //         return String.fromCodePoint(97+i);
    //     }
    // }
    let sum1=0;
    let sum2=0;
    for(let i=0;i<s.length;i++){
        sum1+=s.charCodeAt(i);

    }
    for(let i=0;i<t.length;i++){
        sum2+=t.charCodeAt(i);
        
    }
    return String.fromCharCode(sum2-sum1);
};