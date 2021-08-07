function animalCount(miles) {
    let inFirst10Miles = 10;
    let inSecond10Miles = 50;
    let inRestMiles = 100;

    if (miles <= 10) {
        const totalInFirst10Miles = miles * inFirst10Miles;
        return totalInFirst10Miles;
    }
    else if (miles > 10 && miles <= 20) {
        const firstDenseAnimal = 10 * inFirst10Miles;
        const secondDenseAnimal = miles - 10;
        const animalInSecond10Miles = secondDenseAnimal * inSecond10Miles;
        const totalInFirst20Miles = firstDenseAnimal + animalInSecond10Miles;
        return totalInFirst20Miles;
    }
    // else{
    //     const firstDenseAnimal = 10 * inFirst10Miles;
    //     const secondDenseAnimal = miles - 10;
    //     const animalInSecond10Miles = miles - secondDenseAnimal;
    //     const second10MilesAnimal = animalInSecond10Miles * inSecond10Miles;
    //     const restDense = miles - second
    // }
}

console.log(animalCount(15));