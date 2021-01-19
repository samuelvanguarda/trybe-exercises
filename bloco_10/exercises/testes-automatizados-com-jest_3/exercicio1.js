function generateRandomNumber() {
    let number = Math.random();
    return Math.round(number * 100);
}

module.exports = { generateRandomNumber };