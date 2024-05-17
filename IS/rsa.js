let p = 7;
let q = 17;   //p, q have to be prime numbers
let n = p * q;
let phi = (p - 1) * (q - 1);

function lowestNonFactor(phi)
{
    for(let i = 2; i < phi; i++)
    {
        if(phi % i !== 0)
        {
            return i;
        }
    }
    return phi;
}

let e = lowestNonFactor(phi);

function findD(e, phi)
{
    for(let d = 0; d < phi; d++)
    {
        if((d * e) % phi === 1)
        {
            return d;
        }
    }
}

let d = findD(e, phi);

// Function for modular exponentiation
function modPow(plainText, e, n) {
    if (n === 1) return 0;
    let result = 1;
    plainText = plainText % n;
    while (e > 0) {
        if (e % 2 === 1) {
            result = (result * plainText) % n;
        }
        e = e >> 1;
        plainText = (plainText * plainText) % n;
    }
    return result;
}

let plainText = 10;
let cipherText = modPow(plainText, e, n); // Using modular exponentiation function

plainText = modPow(cipherText, d, n); // Decrypting ciphertext

console.log(p, q, n, phi, e, d, plainText, cipherText); // plainText should be 10