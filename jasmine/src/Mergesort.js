function Mergesort() {
}

Mergesort.prototype.sort = function(array) {
    if (array.length < 2) {
        return [...array];
    }
    else {
        // Step 1: divide into single elements. No real need, right?
        // Step 2: sort each pair into an array and put into array.
        return [...array];
    }
};

// Adapted from https://stackoverflow.com/questions/5836833/create-a-array-with-random-values
Mergesort.prototype.randomArray = function(n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * n));
};

console.log([2].toString() === [2].toString());