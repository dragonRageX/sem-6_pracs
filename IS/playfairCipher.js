let plainText = ["I", "N", "S", "T", "R", "U", "M", "E", "N", "T", "S"];
let key = ["M", "O", "N", "A", "R", "C", "H", "Y"];

let alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let remainingLetters = alphabets.filter((letter) => !key.includes(letter));   //filter out all the letters included in the key

let matrix = [];
let k = 0;

for(let i = 0; i < 5; i++)
{
    matrix[i]= [];
    for(let j = 0; j < 5; j++)
    {
        if(k < key.length)
        {
            matrix[i][j] = key[k];
            k++;
        }
        else
        {
            matrix[i][j] = remainingLetters.shift();
        }
    }
}

console.log(matrix);

//encrypting the plain text
for(let i = 0; i < plainText.length; i++)
{
    if(plainText[i] == "J")
    {
        plainText[i] = "I";   //convert 'J' to 'I' in the plaintext to maintain consistency
    }
}

if(plainText.length / 2 != 0)
{
    plainText.push("X");
}
console.log("Modified Plaintext: ", plainText);

let cipherText = [];

function findElementInTheMatrix(element, matrix)
{
    for(let i = 0; i < 5; i++)
    {
        for(let j = 0; j < 5; j++)
        {
            if(matrix[i][j] === element)
            {
                return { i, j };
            }
        }
    }
}

for(let i = 0; i < plainText.length; i = i + 2)
{
    let { i: firstI, j: firstJ } = findElementInTheMatrix(plainText[i], matrix);
    let { i: secondI, j: secondJ } = findElementInTheMatrix(plainText[i + 1], matrix);

    if(firstI == secondI)   //same row
    {
        cipherText.push(matrix[firstI][(firstJ + 1) % 5]);
        cipherText.push(matrix[secondI][(secondJ + 1) % 5]);
    }
    else if(firstJ == secondJ)   //same column
    {
        cipherText.push(matrix[(firstI + 1) % 5][firstJ]);
        cipherText.push(matrix[(secondI + 1) % 5][secondJ]);
    }
    else
    {
        cipherText.push(matrix[firstI][secondJ]);
        cipherText.push(matrix[secondI][firstJ]);
    }
}

console.log("Ciphertext: ", cipherText);