/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack=[];
    for(let i=0;i<s.length;i++){
        const first = s[i];
        const top= stack[stack.length-1];
        if(first === top){
            stack.pop();
        }else{
            stack.push(first);
        }
    }
    return stack.join('');
};