function randomRangeNumber(minNumber, maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

console.log(randomRangeNumber(7, 50));
module.exports = randomRangeNumber;