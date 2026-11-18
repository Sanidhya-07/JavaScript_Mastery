

//setInterval
const intervalId = setInterval(() => console.log("Hi Sanidhya !!!"), 1000);



//setTimeOut
// setTimeout(
//   () => console.log("This function is execuated after 5 seconds."),
//   5000,
// );


//clearInterval
setTimeout(function(){
    clearInterval(intervalId);
    console.log("Interval is stopped");
},10000);

