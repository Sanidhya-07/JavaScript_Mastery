let arr1 = [10,20,50] ; 
let arr2 = [58,96,78] ;

const clone = [...arr1,...arr2] ;
console.log(clone);


const User = {
    name : "sanidhya" ,
    age : 23 ,
    gender : "Male"
}

const userclone = {...User,std:10};
console.log(userclone);