// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    let testBlockLet = "initial block let value"
    console.log(testBlockLet)
    var testBlockVar = "initial block var value"
    console.log(testBlockVar)
    const testBlockConst = "initial block const value"
    console.log(testBlockConst)

    testBlockLet = "reassign value to testBlockLet within block"
    testBlockVar = "reassign value to testBlockVar within block"
    
    console.log(testBlockLet)
    console.log(testBlockVar)
    //testBlockConst = "reassign value to testBlockConst within block"
    console.log(testBlockConst)
}

//testBlockLet = "reassign value to testBlockLet outside block"
//testBlockVar = "reassign value to testBlockVar outside block"
console.log(testBlockLet)
console.log(testBlockVar)
//testBlockConst = "reassign value to testBlockConst within block"
console.log(testBlockConst)
{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
}
//Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();
    
console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
