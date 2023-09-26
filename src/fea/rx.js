class Observable{
    constructor(producer){
        this.producer = producer;
    }
    // 구독자가 옵저버블을 구독할 수 있도록 하는 메서드
    subscribe(observer){
        // 옵저버가 필요한 기능을 가지고 있는지 확인
        if(typeof observer !== 'object' || observer === null){
            throw new Error('Observer must be an object with next, error, and complete methods');
        }
        if(typeof observer.next !== 'function'){
            throw new Error('Observer must have a next method');
        }
        if(typeof observer.error !== 'function'){
            throw new Error('Observer must have an error method');
        }
        if(typeof observer.complete !== 'function'){
            throw new Error('Observer must have an error method');
        }

        const unsubscribe = this.producer(observer);

        // 구독 취소 메서드가 있는 객체를 반환.
        return {
            unsubscribe: () => {
                if(unsubscribe && typeof unsubscribe === 'function'){
                    unsubscribe();
                }
            }
        }

    }
};

const observable = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();

    // 선택 사항입니다, 옵저버가 구독을 취소할 경우 정리를 처리하는 함수를 반환
    return () =>{
        console.log('Observer unsubscribed');
    }
});

const observer = {
    next: value => console.log('Received value : ', value),
    error : err => console.log('Error:', err),
    complete: () => console.log('Completed')
};

// 옵저버블 구독
const subscription = observable.subscribe(observer);

// 선택적으로, 나중에 구독을 취소하여 값 수신을 중지할 수 있음
subscription.unsubscribe();
