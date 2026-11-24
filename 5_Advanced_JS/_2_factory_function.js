//factory function

function vehicles(type, brand, model, year) {
  return {
    Type: type,
    Brand: brand,
    Model: model,
    Year: year,

    info: function () {
      return ` 
        Vehicle Type : ${this.Type}\n 
        Vehicle Brand : ${this.Brand}\n 
        Vehicle Model : ${this.Model}\n 
        Vehicle Year : ${this.Year}\n 
        `;
    },
  };
}

const car1 = vehicles("Sedan", "Skoda", "1.5lit turbo", "2026");
const car2 = vehicles("SUV", "KIA", "1.2lit turbo", "2016");
const car3 = vehicles("XUV", "Mahindra", "1.5lit", "2025");
const car4 = vehicles("truck", "Ashok Leyland", "1.5lit", "2022");

console.log(car1.info());
console.log(car2.info());
console.log(car3.info());
console.log(car4.info());
