"use strict";

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function getRow(firstRow, secondRow) {
    let resultFirstRow = 0;
    let resultSecondRow = 0;

    function getNumber(counter) {
        let result = 0;
        for (let i = 0; i < counter.length; i++) {
            if (counter.charAt(i) !== 'а') {
                continue;
            }
            result++;
        }
        return result
    }

    resultFirstRow = getNumber(firstRow);
    resultSecondRow = getNumber(secondRow);

    return (resultFirstRow > resultSecondRow) ? firstRow : secondRow;
}

console.log(getRow(firstRow, secondRow));