import Redux from 'redux';
const log = console.log;

log(Redux);

const state0 = {counter: 0, color: '#abacac'};

const reducer1 = (state, action={}) =>
{
    let counter = state.counter;
    switch (action.type)
    {
        case 'plus': counter++; break;
        case 'minus': counter--; break;
        case 'reset': counter=0; break;
        default: log('Wrong command...');
    }
 return {...state, counter:counter}
}

const store = Redux.createStore(reducer1,state0);
store.subscribe( () =>
    {
        log(store);
    }
);
log(store.getState());

store.dispatch({type:'plus'});
store.dispatch({type:'plus'});
store.dispatch({type:'plus'});

log(store.getState());



//log(store);