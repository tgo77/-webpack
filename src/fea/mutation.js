const mutationCallback = (mutationsList) => {
    for(const mutation of mutationsList){
        if(mutation.type !== 'attributes' || 
            mutation.attributeName !== 'pizza-type')
            return;


        console.log('old', mutation.oldValue);
        console.log('new', mutation.mutation.target.getAttribute('pizza-type'))
    }
}

const oberver = new MutationObserver(mutationCallback);
oberver.observe(document.getElementById('pizza-store'), {
    attributes : true
});

