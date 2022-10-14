'use strict';

const isValid = function (num) {
    return (!isNaN(parseFloat(num)) && isFinite(num) && num > 0 && num < 101);
};

const startGame = function () {
    const number = '88';

    const takeGuess = function () {
        const guess = prompt('Угадайте число от 1 до 100');

        switch (true) {

            case guess === null:
                alert('Игра окончена');
                break;

            case !isValid(guess):
                alert('Будьте внимательнее, введите число от 1 до 100!');
                takeGuess();
                break;

            case guess === number:
                alert('Поздравляю, Вы угадали!');
                break;

            case guess > number:
                alert('Загаданное число МЕНЬШЕ');
                takeGuess();
                break;

            case guess < number:
                alert('Загаданное число БОЛЬШЕ');
                takeGuess();
                break;
        }
    };
    takeGuess();
};
startGame();