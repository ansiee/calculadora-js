const numbersBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const priorityBtn = document.querySelector('[data-priority]');
const clearBtn = document.querySelector('[data-clear]');
const equalsBtn = document.querySelector('[data-equals]');
const display = document.querySelector('#display');

numbersBtn.forEach((i) => {
    i.addEventListener('click', () => {
        display.value += i.innerHTML;
        console.log(display.value)
    });
});

operationBtn.forEach((i) => {
    i.addEventListener('click', () => {
        display.value += i.innerHTML;
        console.log(display.value)
    });
});


equalsBtn.addEventListener('click', () => {
    let result = eval(display.value);
    if (isNaN(result)) {
        display.value = 'Error';
        setTimeout(clear,1500)
    } else {
        display.value = result;
    }
});
function clear() {
    display.value = '';
    statusPri = true;
}
clearBtn.addEventListener('click', () => {
    console.log(clear())
})
