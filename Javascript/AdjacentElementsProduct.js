ADJACENT-ELEMENTS-PRODUCT 

function adjacentElementsProduct(inputArray) {
    return Math.max(...inputArray.slice(0, -1).map((n, i) => n * inputArray[i + 1]))
}