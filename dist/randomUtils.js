"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueRandomNumbers = generateUniqueRandomNumbers;
function generateUniqueRandomNumbers(items, min = 1, max = 100) {
    const arr = [];
    while (arr.length < items) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!arr.includes(randomNumber)) {
            arr.push(randomNumber);
        }
    }
    return arr;
}
