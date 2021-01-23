const caesar = function(string, shiftFactor) {
    function caesarise(character, shiftFactor) {
        let letter = character.charCodeAt(0);
        if (letter >= 65 && letter <= 90) {
            letter = letter + (shiftFactor);
            if (letter > 90) {
                letter = letter - 90;
                letter = 64 + letter;
            } else if (letter < 65) {
                letter = 65 - letter;
                letter = 90 - letter;
            }
        } else if (letter >= 97 && letter <= 122) {
            letter = letter + (shiftFactor);
            if (letter > 122) {
                letter = letter - 122;
                letter = 96 + letter;
            } else if (letter < 97) {
                letter = 97 - letter;
                letter = 122 - letter;
            }
        }
        return String.fromCharCode(letter);
    }
    if (typeof (string) === "string") {
        let result = "";
        for (i = 0; i < string.length; i++) {
            result = result + caesarise(string[i], shiftFactor)
        }
        return result;
    } else {
        return "ERROR";
    }
}

module.exports = caesar
