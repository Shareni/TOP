const fibonacci = function(member) {
    let x = 1;
    let y = 1
    if (member < 0) {
        return "OOPS";
    } else if (member < 3) {
        return x;
    } else {
        for (i = 1; i < (member / 2); i++) {
            x = x + y;
            y = y + x;
        }
        if (member % 2 === 0) {
            return y;
        } else {
            return x;
        }
    }
}

module.exports = fibonacci
