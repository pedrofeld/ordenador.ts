"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortAscending = sortAscending;
exports.sortDescending = sortDescending;
function sortAscending(a, b) {
    return a - b;
}
function sortDescending(a, b) {
    return b - a;
}
