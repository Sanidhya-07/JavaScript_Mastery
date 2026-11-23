const ul = document.querySelector("ul");


//parantElement
console.log(ul.parentElement);


//children
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children[2]);
console.log(ul.children[3]);


//previousElementSibling
let fourt=document.querySelector(".fourth");
console.log(fourt.previousElementSibling);


//nextElementSibling
let li=document.querySelector("li");
console.log(li.nextElementSibling);