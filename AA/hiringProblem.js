let candidates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Normal Hiring Problem
let interviewedCandidates = [];
let hiredCandidates = [];

for(let i = 0; i < candidates.length; i++)
{
    interviewedCandidates.push(candidates[i]);
    if(candidates[i] > Math.max.apply(null, hiredCandidates) && !hiredCandidates.includes(candidates[i]))
    {
        hiredCandidates.push(candidates[i]);
    }
}

console.log("Interviewed Candidates = ", interviewedCandidates);
console.log("No. of Interviewed Candidates = ", interviewedCandidates.length);
console.log("Hired Candidaets = ", hiredCandidates);
console.log("No. of Hired Candidates = ", hiredCandidates.length);
console.log("Cost of Firing = ", hiredCandidates.length - 1);

//Randomised Hiring Problem
interviewedCandidates = [];
hiredCandidates = [];
for(let i = 0; i < 10; i++)   //Randomly select and interview candidates
{
    let selectedCandidateIndex = Math.floor(Math.random() * candidates.length);
    let selectedCandidate = candidates[selectedCandidateIndex];
    interviewedCandidates.push(selectedCandidate);
    candidates.splice(selectedCandidateIndex, 1);
}

console.log("Interviewed Candidates = ", interviewedCandidates);
console.log("No. of Interviewed Candidates = ", interviewedCandidates.length);

let max = -1;
for(let i = 0; i < interviewedCandidates.length; i++)
{
    if(interviewedCandidates[i] > max)
    {
        max = interviewedCandidates[i];
        hiredCandidates.push(interviewedCandidates[i]);
    }
}

console.log("Hired Candidaets = ", hiredCandidates);
console.log("No. of Hired Candidates = ", hiredCandidates.length);
console.log("Cost of Firing = ", hiredCandidates.length - 1);