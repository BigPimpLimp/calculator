let firstNum;
let operator;
let secondNum;
let displayValue;
let total;

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
        if (next === 0) {
            return 'Fuck you!!!'
        }
        else {
            let x = acc / next;
            return round(x, 1); 
        }
    });
}

function operate(operator, firstNum, secondNum) {
    let x;
    if (operator === 1) {
        x = addition(firstNum, secondNum);
        return x;
    }
    else if (operator === 2) {
        x = subtraction(firstNum, secondNum);
        return x;
    }
    else if (operator === 3) {
        x = muliplication(firstNum, secondNum)
        return x;
    }
    else if (operator === 4) {
        x = division(firstNum, secondNum);
        return x;
    }
}

function continueCheck() {
    if (operator === 0) {
        display.textContent = '';
    }
}

function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

const display = document.querySelector('.display');
    
const button0 = document.querySelector('.button0');
button0.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '0';
    displayValue = Number(display.textContent);
});

const button1 = document.querySelector('.button1');
button1.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '1';
    displayValue = Number(display.textContent);
})

const button2 = document.querySelector('.button2');
button2.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '2';
    displayValue = Number(display.textContent);
})

const button3 = document.querySelector('.button3');
button3.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '3';
    displayValue = Number(display.textContent);
})

const button4 = document.querySelector('.button4');
button4.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '4';
    displayValue = Number(display.textContent);
})

const button5 = document.querySelector('.button5');
button5.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '5';
    displayValue = Number(display.textContent);
})

const button6 = document.querySelector('.button6');
button6.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '6';
    displayValue = Number(display.textContent);
})

const button7 = document.querySelector('.button7');
button7.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '7';
    displayValue = Number(display.textContent);
})

const button8 = document.querySelector('.button8');
button8.addEventListener('click', (e) => {
    continueCheck()
    display.textContent += '8';
    displayValue = Number(display.textContent);
})

const button9 = document.querySelector('.button9');
button9.addEventListener('click', (e) => {
    continueCheck()
        display.textContent += '9';
        displayValue = Number(display.textContent);
 });

 const buttonAdd = document.querySelector('.buttonAdd');
 buttonAdd.addEventListener('click', (e) => {
    firstNum = displayValue;
    operator = 1;
    display.textContent = '';
    displayValue = 0;
})

const buttonSubtract = document.querySelector('.buttonSubtract');
buttonSubtract.addEventListener('click', (e) => {
   firstNum = displayValue;
   operator = 2;
   display.textContent = '';
   displayValue = 0;
})

const buttonMultiply = document.querySelector('.buttonMultiply');
buttonMultiply.addEventListener('click', (e) => {
   firstNum = displayValue;
   operator = 3;
   console.log(operator);
   display.textContent = '';
   displayValue = 0;
})

const buttonDivide = document.querySelector('.buttonDivide');
buttonDivide.addEventListener('click', (e) => {
   firstNum = displayValue;
   operator = 4;
   display.textContent = '';
   displayValue = 0;
})

const buttonEquals = document.querySelector('.buttonEquals');
buttonEquals.addEventListener('click', (e) => {
   secondNum = displayValue;
   total = operate(operator, firstNum, secondNum);
   display.textContent = total;
   displayValue = total;
   operator = 0;
})

const buttonClear = document.querySelector('.buttonClear');
buttonClear.addEventListener('click', (e) => {
  displayValue = 0;
  operator = '';
  display.textContent = '';
})

