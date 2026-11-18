function myfunction(para1,para2){

    //multiply given parameter
    return para1*para2;

}

let result = myfunction(20,3);
console.log(`Multiplication : ${result}`);


//CallBack Function
function showCallFunc(fn){
    let value = 10 ;
    
    fn(value) ; 
}

function fn(value2){
    console.log(`Value is : ${value2}`);
}

// showCallFunc(function fn(value2){
//     console.log(`Value is : ${value2}`);
// })

showCallFunc(fn)