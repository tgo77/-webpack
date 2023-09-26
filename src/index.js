var css = require('./app.scss');

console.log("Hello World!");

const pizzaEvent = new CustomEvent("pissaDelivery", {
    detail:{
        name: "superme",
    }
});


const pizzaStore = document.querySelector('#pizza-store');
pizzaStore.addEventListener("pizzaDelivery", (e) => console.log(e.detail.name));
pizzaStore.dispatchEvent(pizzaEvent);
