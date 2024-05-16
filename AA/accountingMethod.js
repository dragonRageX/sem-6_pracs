let doubleAndCopyArray = [];
let arraySize = 1;
let insertValue = 1;
let totalCostArray = [];
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
}

console.log("Total Cost Array: ", JSON.stringify(totalCostArray));

let ammortizedCost = 3;

let credit = 0;
console.log("DC\t I\t TC\t AM\t Credit");
for(let i = 0; i < 10; i++)
{
    if(ammortizedCost >= totalCostArray[i])
    {
        credit = credit + (ammortizedCost - totalCostArray[i]);
    }
    else if((ammortizedCost + credit) >= totalCostArray[i])
    {
        credit = credit - (totalCostArray[i] - ammortizedCost);
    }
    else if((ammortizedCost + credit) < totalCostArray[i])
    {
        break;
    }
    console.log(doubleAndCopyArray[i], "\t", insertValue, "\t", totalCostArray[i], "\t", ammortizedCost, "\t", credit);
}