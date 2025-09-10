import { generateUniqueRandomNumbers } from "./randomUtils";
import { sortAscending, sortDescending } from "./sortUtils";

const randomNumbers = generateUniqueRandomNumbers(5);

const sortedArrayAsc = [...randomNumbers].sort(sortAscending);
const sortedArrayDesc = [...randomNumbers].sort(sortDescending);

console.log("Números aleatórios:", randomNumbers);
console.log("Números ordenados (crescente):", sortedArrayAsc);
console.log("Números ordenados (decrescente):", sortedArrayDesc);