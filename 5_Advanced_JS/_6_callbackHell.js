// // --------------------------------------------------------------------------

// // Callback Hell Example

// // What is Callback Hell?
// // Imagine you are developing an application where you need to perform these operations:
// // 1. Get user details.
// // 2. After getting user details, get their orders.
// // 3. After getting orders, get payment details.
// // 4. After getting payment details, generate the invoice.

// //First step...1
// function getUser(callback) {
//   setTimeout(() => {
//     console.log("User identified...!");

//     callback();
//   }, 2000);
// }

// //Second step...2
// function getOrder(callback) {
//   setTimeout(() => {
//     console.log("Orders received...!");

//     callback();
//   }, 3000);
// }

// //Third step...3
// function getPayment(callback) {
//   setTimeout(() => {
//     console.log("Payment received...!");

//     callback();
//   }, 1000);
// }

// //Fourth step...4
// function generateInvoice(callback) {
//   setTimeout(() => {
//     console.log("Invoice generated...!");

//     callback();
//   }, 4000);
// }

// //we need to execute this function one after another so ...

// //this is callback hell...
// getUser(() => {
//   getOrder(() => {
//     getPayment(() => {
//       generateInvoice(() => {});
//     });
//   });
// });

// // --------------------------------------------------------------------------

function placeOrder(callback) {
  console.log("payment is in progress , please wait.. ");

  setTimeout(() => {
    console.log("Payment received and order get placed...!");
    callback();
  }, 3000);
}

function preparingOrder(callback) {
  console.log("your food preparation started..");

  setTimeout(() => {
    console.log("your order is ready...!");
    callback();
  }, 5000);
}

function pickupOrder(callback) {
  console.log(
    "Delivery boy is assigned and on its way to pick up your order..",
  );

  setTimeout(() => {
    console.log("Delivery boy reached and picked up your order");
    callback();
  }, 3000);
}

function deliverOrder() {
  console.log("Delivery boy is reached at your location..");
  setTimeout(() => {
    console.log("Order is deliveried successfully...!");
  }, 3000);
}

placeOrder(() => {
  preparingOrder(() => {
    pickupOrder(() => {
      deliverOrder();
    });
  });
});
