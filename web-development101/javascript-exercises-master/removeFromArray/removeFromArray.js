const removeFromArray = function(array) {
    let args = Array.prototype.slice.call(arguments, 1);

    function checker(item, args) {
        let isRemoved = false;
        for (let i = 0; i < args.length; i++) {
            if (item === args[i]) {
                isRemoved = true;
                break;
            }
        }
        return isRemoved;
    }

    arrayLength = array.length;
    let returnArray = [];
    for (let i = 0; i < arrayLength; i++) {
        let arrayElement = array.pop();
        let isRemoved = checker(arrayElement, args);
        if (isRemoved === false) {
            returnArray.unshift(arrayElement)
        }

    }
    return returnArray;
}

module.exports = removeFromArray
