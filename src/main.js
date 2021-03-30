"use strict";

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const button = document.getElementById('selectALetter');

button.addEventListener('click', getLetter);

function getRow(firstRow, secondRow, letter) {
    let resultFirstRow = 0;
    let resultSecondRow = 0;

    function getNumber(counter) {
        let result = 0;
        for (let i = 0; i < counter.length; i++) {
            if (counter.charAt(i) !== letter) {
                continue;
            }
            result++;
        }
        return result
    }

    resultFirstRow = getNumber(firstRow);
    resultSecondRow = getNumber(secondRow);

    alert((resultFirstRow > resultSecondRow) ? firstRow : secondRow);
}

function getLetter() {
    let letter = prompt('Введите букву');

    if (letter) {
        getRow(firstRow, secondRow, letter);
    } else {
        alert('Вы передумали! ;)')
    }
}