export function generateUniqueRandomNumbers(items: number, min: number = 1, max: number =100): number[] {
    const arr: number[] = [];
    while(arr.length < items){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(!arr.includes(randomNumber)){
            arr.push(randomNumber);
        }
    }
    return arr;
}