const add = (a,b)=> {
    return a+b
}

function subtract(c,d){
    return c-d;
}
module.exports.add = add;
module.exports.subtract = subtract
console.log("module.exports", module.exports)