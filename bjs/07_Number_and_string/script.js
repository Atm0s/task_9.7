let lastOperand = 0;
let operation = null;
let result;
//let firstOperand = 0;

const inputWindow = document.getElementById('inputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_calc').addEventListener('click', function () {
    console.log(operation);
    console.log(lastOperand);
 /*   if (operation === 'sqrt') {
         result = Math.sqrt(lastOperand);
    }*/
    if (operation === 'div') {
         result = lastOperand / parseFloat(inputWindow.value);
    }
    if (operation === 'mult') {
         result = lastOperand * parseFloat(inputWindow.value);
    }
    if (operation === 'sum') {
         result = lastOperand + parseFloat(inputWindow.value);
    }
    if (operation === 'def') {
        result = lastOperand - parseFloat(inputWindow.value);
    }
    inputWindow.value = result;
    operation = null;
    lastOperand = 0;
    console.log(operation);
    console.log(lastOperand);
})

document.getElementById('btn_sqrt').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sqrt';
    result = Math.sqrt(lastOperand);
    inputWindow.value = result;
})

document.getElementById('btn_dot').addEventListener('click', function () {
    inputWindow.value += '.';
})

document.getElementById('btn_div').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'div';
    inputWindow.value = '';
})

document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
})

document.getElementById('btn_def').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'def';
    inputWindow.value = '';
})

document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
})

document.getElementById('btn_9').addEventListener('click', function () {
    if (inputWindow.value == 0) {
        inputWindow.value = ''
    }
    inputWindow.value += '9';
})

document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})

document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})

document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})

document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})

document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})

document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})

document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})

document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})
