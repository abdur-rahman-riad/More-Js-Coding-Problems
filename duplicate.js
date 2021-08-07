let myArray = [5, 10, 2, 6, 5, 11, 32, 11, 45, 67, 11];

function removeDuplicate(numbers) {
    const uniqe = [];
    /* for (let i = 0; i < numbers.length; i++) {
        let elements = numbers[i];
        console.log(elements);
    } */
    for (const element of numbers) {
        console.log(element);
        if (uniqe.indexOf(element) == -1) {
            uniqe.push(element);
        }
    }
    return uniqe;
}

let givenArray = removeDuplicate(myArray);
console.log(givenArray);