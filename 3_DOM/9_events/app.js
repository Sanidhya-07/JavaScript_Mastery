// ----------- BAD WAY-----------
const second = document.querySelector(".second-btn");

second.onclick = function () {
    console.log("prem Patil");
};



// ----------- GREAT WAY-----------
const best = document.querySelector(".best");

best.addEventListener("click",()=>{
    console.log("sanidhya Naik");
    
})

// ----------- Event (e) Object -----------

best.addEventListener("click",(event)=>{
    console.log(event);
    
})