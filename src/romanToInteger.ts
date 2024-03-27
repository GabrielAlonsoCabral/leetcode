const RomanValues = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const RomanValuesSpecifPairs = {
    "IV":4,
    "IX":9,
    "XL":40,
    "XC":90,
    "CD":400,
    "CM":900
}


function romanToInt(text:string):number{
    let output=0;

    for (let i = 0; i < text.length; i++) {
        const letter:keyof typeof RomanValues = text[i] as unknown as keyof typeof RomanValues
        const nextLetter = i+1<text.length ? text[i+1]:""

        const pair:keyof typeof RomanValuesSpecifPairs = letter+nextLetter as unknown as keyof typeof RomanValuesSpecifPairs

        if(Object.keys(RomanValuesSpecifPairs).includes(pair)){
            output+=RomanValuesSpecifPairs[pair]
            text = removeLetterAtIndex(text,i+1)
        }else{
            output+=RomanValues[letter]
        }
      }
         
    return output
}

function removeLetterAtIndex(str: string, index: number): string {
    if (index < 0 || index >= str.length) {
        return str;
    }

    return str.substring(0, index) + str.substring(index + 1);
}