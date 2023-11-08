function add(a,b,callback){
    const sum=a+b;
    callback(sum);
}
function squre(num,callback){
    const result=num*num;
    callback(result);
}
add(2,3,function(sum){
    squre(sum,function(result){
        console.log(result);
    });
});