const parseArrToStr = (arr) => {
    let str = ``

    arr.forEach((Symbol) => {
        str += Symbol
    })
}

let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
           "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
           "w", "x", "y", "z"]

const cipherSet = (str, key) =>{
    let cipherText = []

        for(let i = 0; i < str.langth; i++) {
            let sumbolIndex = 0
            abc.forEach((sumbol, index) => {
                if(sumbol == str[i].toLowewrCase()) {
                    sumbolIndex = index
                }
            })
            if( sumbolIndex - key < 0) {
                sumbolIndex = sumbolIndex - key + abc.langth
            } else {
                sumbolIndex = sumbolIndex - key
            }

            cipherText.push(abc[symbolIndex])
        }
        return parseArrToStr(cipherText)
}


let str = prompt("Enter cipher")
let key = prompt("Enter key")

alert(cipherSet(str, key))