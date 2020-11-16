function selectionSort(array) {
    let newMin;
    let sorted = [];
    while (array.length != 0) {
      newMin = minAndRemove(array);
      sorted.push(newMin);
    }
    return sorted;
  }

  function minAndRemove(array) {
    let min = array[0];
    let minIndex = 0;
    for (let i = 0; i < array.length; i++) {
      let currentElement = array[i];
      if (array[i] < min) {
        min = array[i];
        minIndex = i;
      }
    }
    array.splice(minIndex, 1);
    return min;
  }