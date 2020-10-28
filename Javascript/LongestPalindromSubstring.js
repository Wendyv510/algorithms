LONGEST-PALINDROME-SUBSTRING

function longestPalindromicSubstring(string) {
    let longest = '' 
    for(let i = 0; i < string.length; i++){
        for(let j = i; j < string.length; j++){
            const substring = string.slice(i, j + 1)
            if(substring.length > longest.length && isPalindrome(substring)){
                longest = substring 
            }
        }
    }
    return longest 
}

function isPalindrome(string){
    let leftIdx = 0 
    let rightIdx = string.length - 1 
    while (letIdx < rightIdx){
        if(string[leftIdx] !== string[rightIdx]) return false 
        leftIdx++ 
        rightIdx--
    }
    return true 
}



REFACTORED 

function longestPalindromicSubstring(string){
    let currentLongest = [0,1] 
    for(let i = 1; i < string.length; i++){
        const odd = getLongestPalindromFrom(string, i - 1, i+1)
        const even = getLongestPalindromFrom(string, i -1, i)
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even 
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest 
    }
    return string.slice(currentLongest[0], currentLongest[1])
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx){
    while (leftIdx >= 0 && rightIdx < string.length){
        if (string[leftIdx] !== string[rightIdx]) break 
        leftIdx--
        rightIdx++
    }
    return [leftIdx +1, rightIdx]
}