// the scope of the variable refers to the part of the Program 
// where the vaiable can be accessed.
// there are two types of scopes:
// global scope and local scope
// global scope refers to variables that are declared outside of any function and 
// are accesible throught the programm.
// local scope are declared inside function ,loop,or other code 
// blocks.and are accesible within the block of code.Program 

let a=69;
function exampleFunction(){
    let b=45;
    console.log(a);
    console.log(b);
}
exampleFunction();
console.log(a);
console.log(b);