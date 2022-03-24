const Redux = require('redux')

const log = console.log;

log(Redux);

let initial_state = {counter: 0, data:{}, color: 'white'};

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

const reducerMicro = (state,action={}) =>
{
    log(`++ call reducer, action: ${action}`);

    const delta = typeof(action.delta)!=='number'?0.1:action.delta;
    let counter = state.counter;
    let color = state.color;

    if(typeof(action.type)==='string')
    {
        switch(action.type)
        {
            case 'PLUS': counter = state.counter + delta; color='red'; break;
            case 'MINUS': counter = state.counter - delta; color='green';break;
            case 'RESET': counter = 0; color='blue'; break;
            default: log('type not found...'); color='yellow';
        }
    }
    return {...state, counter: counter, color: color};

};

const store = Redux.createStore(reducer, initial_state);

store.subscribe( () => { log(`<listener>, counter: ${store.getState().counter}`); });


log('--------'); log(store);
log('state0: ', store.getState());

store.dispatch({type: 'PLUS'});
log('state1: ', store.getState());

store.dispatch({type: 'PLUS', delta: 5});
log('state2: ', store.getState());

store.dispatch({type: 'RESET'});
log('state3: ', store.getState());

store.replaceReducer(reducerMicro);

store.dispatch({type: 'PLUS'});
log('state4: ', store.getState());

store.dispatch({type: 'MINUS', delta: 2});
log('state5: ', store.getState());

store.dispatch({type: 'RESET'});
log('state6: ', store.getState());

//---- producer join
log('+++++++++++++++++++++++++++++++++++');

const plus = (st=0, ac) =>
{
    log(`+ st=${st}, ac.type=${ac.type}`);
    return st + 1;
}


const plus2 = (st=0, ac) => { return (ac.type === '+'? st+1 : st);}


const minus = (st=0, ac) =>
{
    log(`- st=${st}, ac.type=${ac.type}`);
    return (ac.type === '-'? st-1 : st);
}

const reset = (st=0, ac) =>
{
    log(`- st=${st}, ac.type=${ac.type}`);
    return 0;
}

const joined = Redux.combineReducers({p:plus2, m:minus, r:reset});
const storeJoined = Redux.createStore(joined, {p:0,m:0,r:0});

log('joined: state0: ', storeJoined.getState());
storeJoined.dispatch({type: '-'});

log('joined: state1: ', storeJoined.getState());

