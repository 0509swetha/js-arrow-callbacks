const array=[1,2,3,4,5];
let result_array=array.map((element,index)=>{
    if(index===array.length-1){
        return element*100;
    }
    else{
        return element*2;
    }
});
console.log("result array",result_array);
