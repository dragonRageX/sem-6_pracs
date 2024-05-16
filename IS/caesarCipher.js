let plainText = "apple";
let cipherText = "";

for(let i = 0; i < plainText.length; i++)
{
    let asciiValue = plainText.charCodeAt(i);
    let shiftedAsciiValue = ((asciiValue - 97 + 3) % 26) + 97;
    console.log(shiftedAsciiValue);
    let cipherLetter = String.fromCharCode(shiftedAsciiValue);
    cipherText += cipherLetter;
}

console.log("Cipher Text: ", cipherText);