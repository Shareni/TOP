const reverseString = function(string) {
    if (typeof (string) === "string") {
        stringReversed = "";
        for (i = string.length - 1; i > -1; i--) { //This looks janky as fuck
            stringReversed = stringReversed + string[i]
        }
        return stringReversed;
    }
    else {
        return "ERROR";
    }
}

module.exports = reverseString
