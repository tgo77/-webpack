const PubSub = {
    events:{},
    subscribe(event, callback){
        if(!this.events[event]) this.events[event] = [];
        this.events[event].push(callback);
    },
    publish(event, data){
        if(this.events[event]){
            this.events[event].forEach(callback => {
                callback(data);
            });
        }
    }
};

{
    const pizzaEvent = new CustomEvent("pissaDelivery", {
        detail:{
            name: "superme",
        }
    });

    window.addEventListener("pizzaDelivery", (e) => {
        console.log(e.detail.name);
    })
    window.dispatchEvent(pizzaEvent);
}


class PissaStore extends EventTarget {
    constructor(){
        super()
    }

    addPizza = (flavor) => {
        this.dispatchEvent(new CustomEvent("pissaAdded", {
            detail:{
                pizza: flavor
            }
        }));
    }
};

const Pissas = new PissaStore();
pizzas.addEventListener("pizzaAdded", (e) => console.log("Added Pissa:", e.detail.pizza));
Pissas.addPizza("supreme");


