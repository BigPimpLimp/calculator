function addition(...nums) {
    return nums
    .reduce((acc, next) => {
        return acc + next;
    });
}

function subtraction(...nums) {
    return nums
    .reduce((acc, next) => {
        return acc - next;
    });
}

function muliplication(...nums) {
    return nums
    .reduce((acc, next) => {
        return acc * next;
    });
}

function division(...nums) {
    return nums
    .reduce((acc, next) => {
        return acc / next;
    });
}

let firstNum;
let operator;
let secondNum;
let displayValue;

function operate(operator, firstNum, secondNum) {
    if (operator === placeHolder) {
        addition(firstNum, secondNum);
    }
    else if (operate === placeHolder) {
        subtraction(firstNum, secondNum);
    }
    else if (operate === placeHolder) {
        muliplication(firstNum, secondNum)
    }
    else if (operate === placeHolder) {
        division(firstNum, secondNum);
    }
}

// let buttons = document.querySelectorAll('button');

// buttons.forEach((item) => {
//     item.addEventListener('click', (e) => {
//         console.log(e);
//     })
// });

const display = document.querySelector('.display');
    
const button0 = document.querySelector('.button0');
button0.addEventListener('click', (e) => {
    display.textContent = '0';
    displayValue = 0;
    console.log(displayValue);
});

const button1 = document.querySelector('.button1');
button1.addEventListener('click', (e) => {
    display.textContent = '1';
})

const button2 = document.querySelector('.button2');
button2.addEventListener('click', (e) => {
    display.textContent = '2';
})

const button3 = document.querySelector('.button3');
button3.addEventListener('click', (e) => {
    display.textContent = '3';
})

const button4 = document.querySelector('.button4');
button4.addEventListener('click', (e) => {
    display.textContent = '4';
})

const button5 = document.querySelector('.button5');
button5.addEventListener('click', (e) => {
    display.textContent = '5';
})

const button6 = document.querySelector('.button6');
button6.addEventListener('click', (e) => {
    display.textContent = '6';
})

const button7 = document.querySelector('.button7');
button7.addEventListener('click', (e) => {
    display.textContent = '7';
})

const button8 = document.querySelector('.button8');
button8.addEventListener('click', (e) => {
    display.textContent = '8';
})

const button9 = document.querySelector('.button9');
button9.addEventListener('click', (e) => {
    display.textContent = '9';
})

