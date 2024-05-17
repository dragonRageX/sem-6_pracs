let g = 3;
let p = 5;

function isPrime(p)
{
    if(p <= 1)
    {
        return false;
    }
    for(let i = 2; i < Math.pow(p, 0.5) + 1; i++)
    {
        if(p % i === 0)
        {
            return false;
        }
    }
    return true;
}

function isPrimitiveRoot(g, p)
{
    let listt = [];
    for(let i = 0; i < p - 1; i++)
    {
        listt.push(Math.pow(g, i) % p);
    }
    console.log("listt: ", listt);
    let unique = [];
    for(let i = 0; i < listt.length; i++)
    {
        if(!unique.includes(listt[i]))   //push unique elements from 'listt' into 'unique'
        {
            unique.push(listt[i]);
        }
    }
    console.log("unique: ", unique);

    if(unique.length === listt.length)
    {
        return true;
    }
    else
    {
        return false;
    }
}

if(isPrime(p) && isPrimitiveRoot(g, p))
{
    let a = 1;
    let b = 4;
    if(a >= p || b >= p)
    {
        console.log(`Private Key Of Both The Users Should Be Less Than p: ${p}!`);
        return;
    }
    else
    {
        let XA = Math.pow(g, a) % p;
        let XB = Math.pow(g, b) % p;

        let AK = Math.pow(XB, a) % p;
        let BK = Math.pow(XA, b) % p;
        console.log(`AK: ${AK}, BK: ${BK}`);

        if(AK === BK)
        {
            console.log("Keys have been exchanged successfully!");
        }
        else
        {
            console.log("Keys Have Not Been Exchanged Successfully!");
        }
    }
}