const {createStore} = Redux;

const counter = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Replace with proper initialisation with redux
counter.innerHTML = 0;

const reducer = (state = 0, action) => {
    return state;
};

const store = createStore(reducer);
// store.getState() -> the state
// store.dispatch(action) -> updates the state

incrementButton.addEventListener('click', () => {
    console.log('increment');
});
decrementButton.addEventListener('click', () => {
    console.log('decrement');
});
resetButton.addEventListener('click', () => {
    console.log('reset');
});
