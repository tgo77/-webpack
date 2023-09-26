const handler = {
    get: (target, property) => {
        console.log(`Getting property ${property}` );
        return target[property];
    },
    set: (target, property, value) => {
        console.log(`Setting Property ${property} to ${value}`);
        target[property] = value;
        return true;
    }
};

const pizza = { 
    name: 'Margherita',
    toppings: ['tomato sauce', 'mozzarella']
};
const proxiedPissa = new Proxy(pizza, handler);

console.log(proxiedPissa.name);
proxiedPissa.name = 'Pepperoni';