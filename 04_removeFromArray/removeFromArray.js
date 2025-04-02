//method one
const removeFromArray = function(arr, ...remove) {
    let filtered = arr.filter (
    text => !remove.includes(text) 
    );
    return filtered;
}

console.log(removeFromArray(['a', 'b', 'c', 'd', 'd', 'e'], 'd', 'e'));

//method 2

const cutFromArray = function(array,...cut) {
    let newArr = [];
    array.forEach(element => {
        if (!cut.includes(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}
console.log(cutFromArray(['a', 'b', 'c', 'd', 'd', 'e'], 'd', 'e'));

// Do not edit below this line
module.exports = removeFromArray;
