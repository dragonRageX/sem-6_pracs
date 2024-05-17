let plainText = "universal";
let key = "college";
let cipherText = "";

for(let i = 0; i < plainText.length; i++)
{
    let asciiValue = ((plainText.charCodeAt(i) - 97 + key.charCodeAt(i % key.length) - 97) % 26) + 97;
    let cipherLetter = String.fromCharCode(asciiValue);
    cipherText += cipherLetter;
}

console.log("Ciphertext: ", cipherText);