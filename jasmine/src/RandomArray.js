//Source: https://stackoverflow.com/questions/5836833/create-a-array-with-random-values
function randomArray(n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * n));
}

console.log(randomArray(6).sort());