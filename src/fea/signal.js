const context = [];
 function createSignal(value){
    const subscriptions = new Set();

    const read = () =>{
        const observer = context[context.length -1];
        if(observer) subscriptions.add(observer);
        return value;
    }

    const write  = (newValue ) => {
        value = newValue;
        for(const obsever of subscriptions){
            obsever.execute();
        }
    }

    return [
        read, 
        write
    ]
};

 function createEffect(fn){
    const effect = {
        execute(){
            context.push(effect);
            fn();
            context.pop();
        }
    }
    effect.execute();
}

const [count, setCount] = createSignal(0);
createEffect(()=>{
    console.log(count());
});

setCount(10);
