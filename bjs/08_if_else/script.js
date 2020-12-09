let inputOrder = 1
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

document.getElementById('btnGame').addEventListener('click', function () {

	if (inputOrder === 1) {
		minValue = parseInt(inputWindow.value);
		if (isNaN(minValue) || minValue < -999) { minValue = -999 };
		console.log('min:', minValue);
		document.querySelector('input').value = '';
		document.querySelector('input').placeholder = 'Введите максимальное значение';
		inputOrder = 2;
		return;
	}

	if (inputOrder === 2) {
		maxValue = parseInt(inputWindow.value);
		if (isNaN(maxValue) || maxValue > 999) { maxValue = 999 };
		console.log('max:', maxValue);
		document.getElementById("inputWindow").hidden = true;
		document.getElementById("startLabel").hidden = false;
		document.querySelector("#btnGame").innerText = 'Старт игры!';
		inputOrder = 3
		document.querySelector('#startLabel').innerText = `Ну, держись!`;
		document.getElementById('headerInput').innerText = `Диапазон число от ${minValue} до ${maxValue}!`;
		return;
	}

	if (inputOrder === 3) {
		answerNumber = Math.floor((minValue + maxValue) / 2);
		orderNumber = 1;
		gameRun = true;
		$('#collapseGameStart').collapse('show');
		$("#collapseInit").collapse('hide');
		orderNumberField.innerText = orderNumber;
		answerField.innerText = `Вы загадали число ${answerNumber}?`;
	}
})

document.getElementById('btnRetry').addEventListener('click', function () {
	$('#collapseGameStart').collapse('hide');
	$("#collapseInit").collapse('show');
	document.getElementById("inputWindow").hidden = false;
	document.getElementById("startLabel").hidden = true;
	inputOrder = 1;
	document.querySelector('input').placeholder = 'Введите минимальное значение';
	document.querySelector("#btnGame").innerText = 'Далее!';
})

document.getElementById('btnLess').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === maxValue || minValue === answerNumber) {
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 1) ?
				`Вы загадали неправильное число!\n\u{1F914}` :
				`Я сдаюсь..\n\u{1F92F}`;
			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			maxValue = answerNumber - 1;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${answerNumber}?` :
				(phraseRandom === 1) ? `Да это легко! Ты загадал ${answerNumber}!` :
					`Наверное, это число ${answerNumber}.`;
			answerField.innerText = answerPhrase;
		}
	}
})

document.getElementById('btnOver').addEventListener('click', function () {
	if (gameRun) {
		if (minValue === maxValue) {
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 1) ?
				`Вы загадали неправильное число!\n\u{1F914}` :
				`Я сдаюсь..\n\u{1F92F}`;
			answerField.innerText = answerPhrase;
			gameRun = false;
		} else {
			minValue = answerNumber + 1;
			answerNumber = Math.floor((minValue + maxValue) / 2);
			orderNumber++;
			orderNumberField.innerText = orderNumber;
			const phraseRandom = Math.round(Math.random() * 2);
			const answerPhrase = (phraseRandom === 0) ? `Вы загадали число ${answerNumber}?` :
				(phraseRandom === 1) ? `Да это легко! Ты загадал ${answerNumber}!` :
					`Наверное, это число ${answerNumber}.`;
			answerField.innerText = answerPhrase;
		}
	}
})

document.getElementById('btnEqual').addEventListener('click', function () {
	if (gameRun) {
		answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
		gameRun = false;
	}
})