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

function operate(operator, firstNum, secondNum) {

}

