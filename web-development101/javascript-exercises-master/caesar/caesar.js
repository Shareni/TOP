const caesar = function(string, shiftFactor) {
    function asciiEncoderDecoder(char) {
        if (typeof (char) === "number") {
            return String.fromCharCode(char);
        } else if (typeof (char) === "string") {
            return char.charCodeAt(0);
        }
    }
    function shifter(character, shiftFactor, upperLimit, lowerLimit) {
        shiftedLetter = character;
        if (shiftFactor > 0) {
            for (i = 0; i < shiftFactor; i++) {
                shiftedLetter++;
                if (shiftedLetter > upperLimit) {
                    shiftedLetter = lowerLimit;
                }
            }
        } else if (shiftFactor < 0) {
            for (i = 0; i > shiftFactor; i--) {
                shiftedLetter--;
                if (shiftedLetter < lowerLimit) {
                    shiftedLetter = upperLimit;
                }
            }
        }
    }
    function sorter(character, shiftFactor) {
        if (character >= 65 && character <= 90) {
            return shifter(character, shiftFactor, 65, 90);
        } else if (character >= 97 && character <= 122) {
            return shifter(character, shiftFactor, 97, 122);
        } else {
            return character;
        }
    }

    let encryptedString = "";
    for (i = 0; i < string.length; i++) {
        let character = string[i];
        character = asciiEncoderDecoder(character);
        character = sorter(character, shiftFactor);
        character = asciiEncoderDecoder(character);
        encryptedString = encryptedString + character;
    }
    return encryptedString;
}
module.exports = caesar
