let numbers = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
};

const romanNumbers = (string) => {
    if (string.length === 1) {
        return numbers[string.toUpperCase()];
    } else {
        let result = 0;
        let counter = string.length - 1;
        let caracterTwo = numbers[string[counter].toUpperCase()];
        let index = string.length - 2;
        let caracterOne = numbers[string[index].toUpperCase()];

        if (caracterTwo > caracterOne) {
            result = caracterTwo - caracterOne;
        } else if (caracterTwo <= caracterOne) {
            result = caracterTwo + caracterOne;
        }

        for (i = counter - 1; i < string.length && i > 0; i -= 1) {
            let caracterOne = numbers[string[i - 1].toUpperCase()];
            let caracterTwo = numbers[string[i].toUpperCase()];
            if (caracterTwo > caracterOne) {
                result -= caracterOne;
            } else if (caracterTwo <= caracterOne) {
                result += caracterOne;
            }
        }
        return result;
    }
}

console.log(romanNumbers('MDCCCLXXXVIII'));