function Mergesort() {
}


Mergesort.prototype.sort = function(array) {
    if(array.length <= 1) {
        return [...array];
    }
    else {
        var middle = array.length / 2;
        var leftArray = this.sort(array.slice(0, middle));
        var rightArray = this.sort(array.slice(middle));
        return merge(leftArray, rightArray);
    }
};

function merge(leftArray, rightArray) {

    var result = [];

    while(leftArray.length !== 0 && rightArray.length !== 0) {
        if(leftArray[0] <= rightArray[0]) {
            result.push(leftArray.shift());
        }
        else {
            result.push(rightArray.shift());
        }
    }

    //If either array is empty, concatenate the other with the result.
    if(leftArray.length === 0) {
       result = result.concat(rightArray);
    }
    else {
       result = result.concat(leftArray);
    }

    return result;
}

// Adapted from https://stackoverflow.com/questions/5836833/create-a-array-with-random-values
Mergesort.prototype.randomArray = function(n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * n));
};