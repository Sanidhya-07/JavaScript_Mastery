console.log("Hello world started...");

const response = fetch("https://api.github.com/users") // ...promise
  .then((response) => {
    return response.json();
  })
  .then((formatedData) => {
    console.log(formatedData);
  });

console.log("Hello world end...");
