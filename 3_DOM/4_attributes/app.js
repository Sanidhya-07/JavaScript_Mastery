// 1. Select the anchor tag
const a = document.querySelector("a");
console.log(a);

// 2. Use getAttribute(attrName) to check the attribute.
console.log(a.getAttribute("href"));

//value changed
a.href = "https://youtube.com";
console.log(a.getAttribute("href"));

// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)
const udemy = document.querySelector(".a-two");
udemy.setAttribute("href","https://udemy.com")
