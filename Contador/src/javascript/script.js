const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');

const updateValue = () => {
    value.innerHTML = count
};

let count = 0;
let intervalId = 0;

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 70);
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 70);
});

resetButton.addEventListener('mousedown', () => {
    count = 0;
    updateValue();
});

document.addEventListener('mouseup', ()=> clearInterval(intervalId))