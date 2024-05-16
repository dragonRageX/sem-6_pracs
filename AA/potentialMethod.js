let doubleAndCopyArray = [];
let arraySize = 1;
let insertValue = 1;
let totalCostArray = [];
let phiArray = [];
for(let i = 1; i < 11; i++)
{
    if(i > arraySize)
    {
        arraySize = 2 * arraySize;
        doubleAndCopyArray.push(i - 1);
    }
    else
    {
        doubleAndCopyArray.push(0);
    }
    totalCostArray.push(doubleAndCopyArray[i - 1] + insertValue);
    phiArray.push(2 * i - arraySize);
}

console.log("Total Cost Array: ", JSON.stringify(totalCostArray));

console.log("DC\t I\t TC\t PHI\t AM");
console.log(doubleAndCopyArray[0], "\t", insertValue, "\t", totalCostArray[0], "\t", phiArray[0], "\t", totalCostArray[0] + phiArray[0]);
for(let i = 1; i < 10; i++)
{
    console.log(doubleAndCopyArray[i], "\t", insertValue, "\t", totalCostArray[i], "\t", phiArray[i], "\t", totalCostArray[i] + phiArray[i] - phiArray[i - 1]);
}