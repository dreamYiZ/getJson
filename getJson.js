const console = {
    "log": ()=>{}
}
function isKeyOk(c) {
    const charCodeAt = c.charCodeAt(0);
    return (charCodeAt >= 48 && charCodeAt <= 57) ||
           (charCodeAt >= 65 && charCodeAt <= 90) ||
           (charCodeAt >= 97 && charCodeAt <= 122)||
           ([95, 45].includes(charCodeAt));
}

// 请实现一个方法：get(json, "a[0].b")，使其返回值为 c


function get(json, queryStr){
    let current= json;
    let token='';
    let str='';
    let OPERATOR_ARRAY_INDEX = 'OPERATOR_ARRAY_INDEX';
    for ( let char of queryStr){
        console.log("start current:", current)
        if(isKeyOk(char)){
            token += char
        }
        if(char === '['){
            reCurrent();
        }
        if(char === ']'){
            reCurrent(OPERATOR_ARRAY_INDEX);
        }
        if(char === '.'){
            reCurrent();
        }
    }
    function reCurrent(operator){
        if(token.length===0){
            return
        }
        if(operator === OPERATOR_ARRAY_INDEX) {
            token = parseInt(token, 10);
        }
        current= current[token];
        token = '';
    }
    console.log('end current', current);
    console.log('end token'  , token);
    reCurrent();
    return current;
}


module.exports = get;