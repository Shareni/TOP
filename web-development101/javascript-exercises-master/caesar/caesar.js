const caesar = function(string, shiftFactor) {
    function encodeDecodeAscii(character) {
        if (typeof (character) === "number") {
            return String.fromCharCode(character);
        } else if (typeof (character) === "string") {
            return character.charCodeAt(0);
        }
    }
    function shifter(character, shiftFactor, upperLimit, lowerLimit) {
        let shiftedLetter = character;
        if (shiftFactor > 0) {
            for (i = 0; i < shiftFactor; i++) {
                shiftedLetter++;
                if (shiftedLetter > upperLimit) {
                    shiftedLetter = lowerLimit;
                }
            }
            return shiftedLetter;
        } else if (shiftFactor < 0) {
            for (i = 0; i > shiftFactor; i--) {
                shiftedLetter--;
                if (shiftedLetter < lowerLimit) {
                    shiftedLetter = upperLimit;
                }
            }
            return shiftedLetter;
        } else {
            return shiftedLetter;
        }
    }
    function sorter(character, shiftFactor) {   //needs a better name
        if (character >= 65 && character <= 90) {   //if UPPERCASE
            return shifter(character, shiftFactor, 90, 65);
        } else if (character >= 97 && character <= 122) {   //else if lowercase
            return shifter(character, shiftFactor, 122, 97);
        } else {
            return character;
        }
    }

    let shiftedString = "";
    while (shiftedString.length < string.length) {
        let character = string[shiftedString.length];
        character = encodeDecodeAscii(character);
        character = sorter(character, shiftFactor);
        character = encodeDecodeAscii(character);
        shiftedString = shiftedString + character;
    }
    return shiftedString;
}
module.exports = caesar
