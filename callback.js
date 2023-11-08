function stepOne(callback){
    console.log("stepone");
    callback();
}
function stepTwo(callback){
    console.log("stepTwo");
    callback();
}
function stepThree(callback){
    console.log("stepThree");
    callback();
}
function finalStep(callback){
    console.log("alldone!");
    
}
stepOne(function(){
    stepTwo(function(){
        stepThree(function(){
            finalStep();
        });
    });
});