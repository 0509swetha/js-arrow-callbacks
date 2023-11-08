// let is a keyword in javascript that is used 
// for declaring variables with blockscope.
// when we declare  a variable using let it is 
// only accesible within a block of code in which it is defined.

function exampleFunction(){
    var a=1;
    let b=2;
    if(true){
        var a=4;
        let b=5;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    console.log(b);
}
exampleFunction();
