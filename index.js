const buttonElement = document.querySelector('button');
const resultElement = document.querySelector('p');

const getRandomNumber = (minimum, maximum) => {
    const min = Math.ceil(minimum);
    const max = Math.floor(maximum);

    return Math.round(min + Math.random() * (max - min));
}

const getRandomNumbersArray = () => {
    const numbers = [];

    for (let i = 0; i < 10; i++) {
        numbers.push(getRandomNumber(1, 20));
    }

    return numbers;
}

const renderSortedNumbers = () => {
    resultElement.textContent = 'Запускаем…';

    setTimeout(() => {
        const randomNumbersArray = getRandomNumbersArray();

        randomNumbersArray.sort();

        resultElement.textContent = randomNumbersArray.join(', ');
    }, 1000);

    resultElement.textContent = 'Считаем…';
};

buttonElement.addEventListener('click', renderSortedNumbers);