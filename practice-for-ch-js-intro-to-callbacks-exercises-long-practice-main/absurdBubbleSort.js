const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function askIfGreaterThan(el1, el2, callback) {
        reader.question(`Is ${el1} greater than ${el2}?: Yes or No`, function (input) {
            let _response = input
            if (input === "Yes") {
                callback(true)
            } else {
                callback(false)
            }
        })

}
console.log(askIfGreaterThan(1, 2, 10))


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    
}