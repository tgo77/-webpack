const pizza = {
    _name: 'Margherita',
};

// 개별 프로퍼티에 대한 사용자 정의 동작을 정의할 수 있는 강력하고 유연한 방법
Object.defineProperty(pizza, 'name', {
    get: function(){
        console.log(`Get Property name`);
        return this._name;
    },
    set: function(value){
        console.log(`Setting property name to ${value}`);
        this._name = value;
    }
});

console.log(pizza.name);
pizza.name = 'Pepperoni';
