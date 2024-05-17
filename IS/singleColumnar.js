let plainText = ["W", "E", "A", "R", "E", "D", "I", "S", "C", "O", "V", "E", "R", "E", "D", "F", "L", "E", "E", "A", "T", "O", "N", "C", "E"];
let key = ["Z", "E", "B", "R", "A", "S"];

let sortedKey = [...key];
sortedKey.sort();
console.log("Sorted Key: ", sortedKey);

let order = [];
for(let i = 0; i < key.length; i++)
{
    order.push(sortedKey.indexOf(key[i]));
}
console.log("Order: ", order);

//encryption
let matrix = [];
let k = 0;

for(let i = 0; i < Math.ceil(plainText.length / key.length); i++)
{
    matrix[i] = [];
    for(let j = 0; j < key.length; j++)
    {
        if(k < plainText.length)
        {
            matrix[i][j] = plainText[k];
            k++;
        }
        else
        {
            matrix[i][j] = "X";
        }
    }
}

console.log("Matrix: ", matrix);

function pickColumnsAccordingToOrder(fixedColumn, matrix)
{
    let cipherBlock = [];
    for(let i = 0; i < Math.ceil(plainText.length / key.length); i++)
    {
        cipherBlock.push(matrix[i][fixedColumn]);
    }
    return cipherBlock;
}

let cipherText = [];
for(let i = 0; i < order.length; i++)
{
    let fixedColumn = order.indexOf(i);
    cipherText[i] = pickColumnsAccordingToOrder(fixedColumn, matrix);
}

console.log("Ciphertext: ", cipherText);