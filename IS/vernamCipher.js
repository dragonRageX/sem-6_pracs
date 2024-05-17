let plainText = "greysanatomy";
let key = "twelvedigits";
let cipherText = "";

for(let i = 0; i < plainText.length; i++)
{
    let cipherLetter = String.fromCharCode(plainText.charCodeAt(i) ^ key.charCodeAt(i));
    cipherText += cipherLetter;
}

console.log("Ciphertext: ", cipherText);