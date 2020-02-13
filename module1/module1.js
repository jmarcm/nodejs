function add(a, b) {
    return a + b;
}

module.exports.add = add;

module.exports.mult = function(a, b) {
    return a * b;
}

console.log("dans module1.js");
console.log(module);