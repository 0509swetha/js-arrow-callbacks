const array=[1,2,4,5,6,7];
let result_array=array.filter((element,index)=>{
    if(element%2==0){
        return element;
    }
});
console.log("result array===",result_array);