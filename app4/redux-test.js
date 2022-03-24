const Redux = require('redux')

const log = console.log;

log(Redux);

let initial_state = {counter: 0, data:{}, color: 'green'};

// store logic here
const reducer = (state,action={}) =>
{
    log(`++ call reducer, action: ${action}`);

    const delta = typeof(action.delta)!=='number'?1:action.delta;
    let counter = state.counter;

    if(typeof(action.type)==='string')
    {
        switch(action.type)
        {
            case 'PLUS': counter = state.counter + delta; break;
            case 'MINUS': counter = state.counter - delta; break;
            case 'RESET': counter = 0; break;
            default: log('type not found...');
        }



    }

    return {...state, counter: counter};
};


const store = Redux.createStore(reducer, initial_state);

log('--------'); log(store);
log('state0: ', store.getState());

store.dispatch({type: 'PLUS'});
log('state1: ', store.getState());

store.dispatch({type: 'PLUS', delta: 5});
log('state1: ', store.getState());