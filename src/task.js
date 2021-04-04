"use strict";

// Task #1
const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
const button = document.getElementById('selectALetter');

button.addEventListener('click', getLetter);

function getRow(firstRow, secondRow, letter) {
    let resultFirstRow = getNumber(firstRow, letter);
    let resultSecondRow = getNumber(secondRow, letter);

    alert((resultFirstRow > resultSecondRow) ? firstRow : secondRow);
}

function getNumber(counter, letter) {
    let result = 0;
    for (let i = 0; i < counter.length; i++) {
        if (counter.charAt(i) !== letter) {
            continue;
        }
        result++;
    }
    return result
}

function getLetter() {
    let letter = prompt('Введите букву');

    if (letter) {
        getRow(firstRow, secondRow, letter);
    } else {
        alert('Вы передумали! ;)')
    }
}


// Task #2
function formattedPhone(phone) {
    let result = '';

    for (let i = 0; i < phone.length; i++) {

        if (i === 1) {
            result += phone.charAt(i) + ' (';
        } else if (i === 4) {
            result += phone.charAt(i) + ') ';
        } else if (i === 7) {
            result += phone.charAt(i) + '-';
        } else if (i === 9) {
            result += phone.charAt(i) + '-';
        } else {
            result += phone.charAt(i);
        }
    }

    return console.log(result);
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90