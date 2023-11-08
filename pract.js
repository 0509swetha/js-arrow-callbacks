// // var str="iam a engineering student";
// // console.log(str.length);
// // console.log(str.slice(1,3));
// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());
// // var str2="with 98 percentage";
// // console.log(str.concat(" ",str2));
// // str3="       in ece group";
// // console.log(str3.trim());
// // console.log(str.charAt(1));
// // console.log(str[7]);
// // console.log(str.split());
// // for(var i=0;i<str.length;i++){
// //     console.log("i===",i);
// //     console.log(str[i]);
// // }
// // for(i=str.length-1;i>0;i--){
// //     console.log(str[i])
// // }
// // for(i=0;i<str.length;i++){
// //     console.log(str[i].toUpperCase())
// // }
// // count=0;
// // for(i=0;i<str.length;i++){
// //     console.log(str[i].toLowerCase())
    
// //     if(str[i]=="e"){
// //         count++;
        
// // }
// //     }
// //     console.log(count)
    
// var array=["swetha","navya","laddu",20,30];
// console.log(array.length);
// console.log(array.join());
// console.log(array.join(""));
// console.log(array.join("+"));
// console.log(array.pop());
// console.log(array);
// console.log(array.push(50));
// console.log(array);
// console.log(array.shift());
// console.log(array);
// console.log(array.unshift("teju"));
// console.log(array);
// console.log(delete array[0]);
// console.log(array);
// var array1=[1,2,3,4];
// var array2=[5,6,7,8];
// console.log(array1.concat(array2));
// var array3=[9,10,11];
// console.log(array1.concat(array2,array3))
// var array4=[9,4,7,1,5,2,8,3,6];
// console.log(array4.sort())
// console.log(array4.splice(2,4,"swetha","priya"))
// console.log(array4)
// console.log(array4.slice(2,3))
// console.log(array4.reverse())
// console.log(Array.isArray(array4))
// console.log(array4.indexOf("8"))
// var array=[1,2,3,4,5];
// for(i=0;i<5;i++){
//     if(i===array.length-2){
//         array.splice(i+1,1);
//     }
// }
// console.log(array);

// for(i=0;i<5;i++){
//     let newElement=i+5
//    array[array.length]=newElement

// }
// // console.log(array);
// var array=[3,4,5];
// // for(i=0;i<array.length;i++){
// //     array.splice(0,1);
// // }
// // console.log(array);
// for(i=2;i>0;i--){
//     array.splice(0,0,i+3)
// }
// console.log(array)
// array=[1,2,3,4,5];
// let newarray=[];
// for(i=0;i<array.length;i++){
//  newarray[i]=array[i]*10
// }
// console.log(newarray);

// var sample_object={
//     "name":"swetha",
//     "age":22,
//     "gender":"female",
//     "city":"kadiri"
// };
// // console.log("before adding===",sample_object);
// // sample_object["colour"]="pink";
// console.log("after adding===",sample_object);
// console.log("before deleting===",sample_object)
// delete sample_object["gender"]
// console.log("after deleting===",sample_object)

// console.log(sample_object.name);




// console.log("keys===",Object.keys(sample_object))

// // var sample_object = {
// //     "name": "swapna",
// //     "marks": 70,
// //     "company": "tcs",
// //     "location": "bangalore",
// //     "salary": "50k"
// // };
// // console.log("before adding===",sample_object);
// // sample_object["citizen"]="indian";
// // delete sample_object["location"];
// // console.log("after adding===",sample_object)
// function addNumbers(a,b){
//     return a * b ;
//     // console.log(return)
// };
// console.log(addNumbers(2,3));
// console.log(result);
// addNumbers(2,3)
// const addNumbers=function(a,b){
//     return a+b;

// }
// let sum=addNumbers(2,3);
// console.log(sum)
// var array=[1,2,3,4,5.6,7,8];
// let result_array=array.filter((element,index)=>{
//     if(element%2==0){
//         return element
//     }
// })
// console.log(result_array)

// var result_array=array.sort((a,b)=>a-b)
// console.log(result_array);


// var result_array=array.map((element,index)=>{
//     if(index===array.length-1){
//         return element*100
//     }else{
//         return element*2
//     }
// });
// console.log("resultant array===",result_array)
// let array = [4, 8, 3, 8, 6, 9, 2, 1, 12, 13, 14, 15];
// for(i=0;i<array.length;i++){
//     for(j=0;j<i;j++){
//         if(array[i]<array[j]){
//            let result=array[i]
//            array[i]=array[j]
//            array[j]=result

//         }
//     }
// }console.log(array)
// const originalArray=[1,2,3];
// const copyOfArray=[...originalArray];
// console.log(originalArray);
// console.log(copyOfArray);
// const object1={"colour":"black"};
// const object2={"model":"sz"};
// const mixedObject={...object1,...object2};
// console.log(mixedObject);
// function sum(...numbers){
//     result=0;
//     for(let number of numbers){
//         result +=number;
//     }
//     return result;
// }
// console.log(sum(1,2,3,4));
// console.log(sum(3,4,5,6,7))
// const array=[1,2,3];
// const deepCopy=[...array];
// deepCopy.push(8);
// console.log(array);
// console.log(deepCopy);
// const object={
//     name:"swetha",
//     age:"22",
//     address:{
//         street:"vno colony",
//         city:"kadiri"
//     }

// };
// const deepCopy=JSON.parse(JSON.stringify(object));
// console.log(object);
// deepCopy.address.city="nepal"
// console.log(deepCopy)
// const array=[1,2,3];
// const shallow_copy=[...array];
// shallow_copy.push(2,3,4);
// console.log(shallow_copy)
    // function sum(a,b){
    //     console.log(a+b);
    // }
    // function operation(val1,val2,callback){
    //     callback(val1,val2);
    // }
    // operation(2,4,sum)
    // function multiplication(a,b){
    //     console.log(a*b);
    // }
    // function operation(x,y,callback){
    //     callback(x,y);
    // }
    // operation(2,7,multiplication)
    // function greet(name,callback){
    //     console.log("hii" +" "+name);
    //     callback();
    // }
    // function callMe(){
    //     console.log("nice to meet u");
    // }
    // greet("swetha",callMe)
// function showTime(time,callback){
//     console.log("show begins at"+" "+time);
//     callback();
// }
// function showEnds(){
//     console.log("show ends at 9PM")
// }
// showTime(6,showEnds)
// const myPromise=new Promise((resolve,reject)=>{
//     const result=false;
//     if(result){
//         resolve("the operation successful");
//     }else{
//         reject("operation failed");
//     }
// })
// myPromise
// .then((message)=>{
//     console.log(message);
// })
// .catch((error)=>{
//     console.log(error);
// })
// function resolveAfterDelay(delay){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("the opration is succesfful");
//         },delay)
//     });
// };
// async function asyncCall(){
//     console.log("calling...");
//     const result=await resolveAfterDelay(3000);
//     console.log(result);
// }
// asyncCall();






// const delay=(millisecond)=>{
//     return new Promise((resolve)=>{
//         setTimeout(resolve,millisecond);
//     });
// };
// console.log("start");
// delay(2000).then(()=>{
//     console.log("delay finished");
// });
// function resolveAfterDelay(delay){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("resolved");
//         },delay);
//     });
// }
// async function asyncCall(){
//     console.log("calling...");
//     const result=await resolveAfterDelay(2000);
//     console.log(result);
// }
// asyncCall();
// function fetchUser(userId){
//     return new Promise((resolve,reject)=>{
//         if(userId===1){
//             resolve({id:1,username:"swetha"});
//         }else{
//             reject("error")
//         }
//     })
// }
// async function getUser(userId){
//     try{
//         const user=await fetchUser(userId);
//         console.log(user);
//     }catch(error){
//         console.log(error);
//     }
// }
// getUser(1);
// getUser(2)
// function fetchData(callback){
//     setTimeout(function(){
//         const data={name:"swetha",age:22};
//         callback(data);
//     },2000);
// }
// function processResult(data){
//     console.log("process data",data);
// }
// fetchData(processResult)
// function fetchData(){

// return new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         const data={name:"swetha",age:22};
//         resolve(data);
//     },2000);
// });

// }
// function processResult(data){
//     console.log("data===",data);
// }
// fetchData()
// .then((processResult)
// )
// .catch((error)=>{
//     console.log(error)
// })