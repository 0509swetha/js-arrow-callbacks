// console.log(this);
const person={
    firstname:"swetha",
    lastname:"bada",
    fullname:function(){
        return this.firstname+""+this.lastname;
    }
}
console.log(person.fullname());