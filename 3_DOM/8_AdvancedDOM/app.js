// createElement()
let name = document.createElement("h1");
name.innerText = "Sanidhya Naik";
name.style.color = "red";
console.log(name);

// appendChild()
let body = document.querySelector("body");
body.appendChild(name);

// append()
let para = document.querySelector("p");
let text = document.createElement("h4");
text.style.color = "brown";
text.innerText = "abcdefghij";

para.append(text);

// prepend()
para.prepend(text);

// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
let list = document.querySelector(".new-list");
let third = list.children[2];

list.removeChild(third);

// remove()
let firstList = document.querySelector("ul");
firstList.remove();
