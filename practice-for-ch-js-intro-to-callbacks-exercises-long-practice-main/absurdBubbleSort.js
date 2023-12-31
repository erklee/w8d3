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


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i === ( arr.length - 1)){
        outerBubbleSortLoop(madeAnySwaps)
        return;
    }

    askIfGreaterThan(arr[i]. arr[i+1], function(isGreaterThan){
        if (isGreaterThan){
            const temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp; 

            madeAnySwaps = true
        }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
    })
}