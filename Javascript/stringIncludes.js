function stringIncludes(word,letter){
    let matches;
    for(let i = 0; i< word.length; i++){
        if(word[i]===letter){
            matches = true 
        }
    }
    return !!matches
}

stringIncludes("banana","a")
//true 

//Re-factor for better time complexity 

let fruit = "banana"
let letter = "b"

function stringIncludes(fruit,letter){
    alert('ask a six year old child if "banana" includes the letter"b"')
}


// adding binary search 
  function stringIncludes(string, letter){
    let matches;
    for(let i = 0; i < string.length; i++){
      if(string[i] === letter){
        matches = true
      }
    }
    return !!matches
  }

  function binarySearch(string, letter) {
    var startpoint = 0
    var endpoint = string.length - 1;
    var guessPosition = parseInt((endpoint - startpoint)/2)
    while (startpoint != endpoint) {
      console.log(`start point is ${startpoint}, endpoint is ${endpoint} and guessposition is ${guessPosition}`)
        if (string[guessPosition] < letter) {
          console.log('too low')
            startpoint = guessPosition
            guessPosition = startpoint + Math.round((endpoint - startpoint)/2)
        } else if(string[guessPosition] > letter) {
          console.log('too high')
            endpoint = guessPosition
            guessPosition = startpoint + parseInt((endpoint - startpoint)/2)
        } else {
          console.log('just right')
            return true;
        }
    }
    if(string === letter){
      return true
    } else{
      console.log('sorry')
      return false;
    }
  }
 
  let string = "aabeeeeeeffhhiiiimmooorsssssstttttttwww"
 
 
  
