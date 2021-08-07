function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 5;
    const perTableWood = 15;
    const perBedWood = 35;

    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;

    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood
}

let firstOption = woodCalculator(1, 1, 1);
console.log(firstOption);