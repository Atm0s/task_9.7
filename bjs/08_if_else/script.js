/*let minValue;
let maxValue;
let answerNumber;
let orderNumber;
let gameRun;*/

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

document.getElementById('btnRetry').addEventListener('click', function () {
    minValueAsk = parseInt(prompt('Минимальное знание числа для игры','0'));
    minValue = (isNaN(minValueAsk)) ? 0 : (minValueAsk < (-999)) ? -999 : minValueAsk;
    maxValueAsk = parseInt(prompt('Максимальное знание числа для игры','10'));
    maxValue = (isNaN(maxValueAsk)) ? 10 : (maxValueAsk > (999)) ? 999 : maxValueAsk;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnRetry').click();

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue === answerNumber){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${answerNumber }?` :
                (phraseRandom === 1) ? `Да это легко! Ты загадал ${answerNumber }!` :
                `Наверное, это число ${answerNumber }.` ;
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 2);
            const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${answerNumber }?` :
                (phraseRandom === 1) ? `Да это легко! Ты загадал ${answerNumber }!` :
                `Наверное, это число ${answerNumber }.` ;
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})