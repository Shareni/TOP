const caesar = function(string, shiftFactor) {
    function shifter(character, shiftFactor) {
        let shiftyCharacter = "";
        if (character >= 65 && character <= 90) {
            shiftyCharacter = character + (shiftFactor);
            if (shiftyCharacter > 90) {
                shiftyCharacter = (64 + ((shiftyCharacter - 90) % 25))
                return shiftyCharacter;
            } else if (shiftyCharacter < 65) {
                shiftyCharacter = 91 - ((90 - shiftyCharacter) % 25);
                return shiftyCharacter;
            } else {
                return shiftyCharacter;
            }
        } if (character >= 97 && character <= 122) {
            shiftyCharacter = character + (shiftFactor);
            if (shiftyCharacter > 122) {
                shiftyCharacter = (96 + ((shiftyCharacter - 122) % 25))
                return shiftyCharacter;
            } else if (shiftyCharacter < 97) {
                shiftyCharacter = 123 - ((122 - shiftyCharacter) % 25);
                return shiftyCharacter;
            } else {
                return shiftyCharacter;
            }
        } else {
            return character;
        }
    }
    function asciiEncoderDecoder(char) {
        if (typeof (char) === "number") {
            return String.fromCharCode(char);
        } else if (typeof (char) === "string") {
            return char.charCodeAt(0);
        }
    }
    let encryptedString = "";
    for (i = 0; i < string.length; i++) {
        let character = string[i];
        character = asciiEncoderDecoder(character);
        character = shifter(character, shiftFactor);
        character = asciiEncoderDecoder(character);
        encryptedString = encryptedString + character;
    }
    return encryptedString;
}
module.exports = caesar
