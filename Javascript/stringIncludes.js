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