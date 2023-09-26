
class AsynData{
    constructor(initalData){
        this.data = initalData;
        this.subscribers = [];
    }

    // 데이터 변경에 대한 구독
    subscribe(callback){
        if(typeof callback !== 'function'){
            throw new Error('Callback must be function');
        }
        this.subscribers.push(callback);
    };

    // 데이터를 업데이트하고 모든 업데이트가 완료될 때까지 기다립니다.
    async set(key, value){
        this.data[key] = value;

        // 구독된 함수를 호출하고 해결될 때까지 기다립니다.
        const updates = this.subscribers.map(async(callback) => {
            await callback(key, value);
        });

        await Promise.allSettled(updates);
    }
};
const data = new AsynData({
    pizza: "Pepperoni"
});

data.subscribe(async (key, value) =>{
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Update UI for ${key} : ${value}`);
});

// 데이터를 업데이트하고 모든 업데이트가 완료될 때까지 기다리는 함수
async function updateData(){
    // 구독된 함수들을 호출하고 그들의 프로미스가 해결될 때까지 기다립
    await data.set('pissa', 'Superme');
    console.log(`All updates completed`);
};


updateData();

