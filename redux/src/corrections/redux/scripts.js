const {createStore} = Redux;

const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

const increment = () => ({type: 'INCREMENT'});
const decrement = () => ({type: 'DECREMENT'});
const reset = () => ({type: 'RESET'});

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;

        default:
            return state;
    }
};

const store = createStore(reducer);

incrementButton.addEventListener('click', () => {
    store.dispatch(increment());
});
decrementButton.addEventListener('click', () => {
    store.dispatch(decrement());
});
resetButton.addEventListener('click', () => {
    store.dispatch(reset());
});

const render = () => {
    counter.innerHTML = store.getState();
};

store.subscribe(() => render());

render();
