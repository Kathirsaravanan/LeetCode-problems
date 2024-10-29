/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {

    function rmvBckSpc(str){
        if(str[0]==='#'){
            str=str.replace(str[0],'')
        }
        let k=Infinity;
        for(let i=1;i<str.length;i++){
        if(str[i]==='#'){
            str=str.replace(str[i-1]+str[i],'');
            i=0;
            k=0;
            continue;
        }
        
    }
    if(k===0){
            str=rmvBckSpc(str);
        }

    return str;
    }
    s=rmvBckSpc(s);
    t=rmvBckSpc(t);
    
    if(s===t){
        return true
    }
    return false
};