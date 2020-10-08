FIND-THREE-LARGEST-NUMBERS-ALGORITHM 

function findThreeLargestNumbers(array){
    const threeLargest = [null,null,null]
    for (const num of array) {
        updateLargest(threeLargest, num)
    }
    return threeLargest
}

function updateLargest(threeLargest, num){
    if (threeLargest[2] === null || num > threeLargest[2]){
        shiftAndUpdate()
    }
    else if (threeLargest[1] === null || num > threeLargest[1]){
        shiftAndUpdate()
    }
    else if (threeLargest[0] === null || num > threeLargest[0]){
        shiftAndUpdate()
    }
}

function shiftAndUpdate(array, num, idx){
    for (let i = 0; i <= idx; i++){
        if (i === idx){
            array[i] = num 
        } else { 
            array[i] = array[i + 1]
        }
    }
}