/**
 * Shortest Word Distance
 *
 * Given a list of words and two words word1 and word2, return the shortest distance between these two words in the
 * list.
 *
 * Example:
 * Assume that words = ["practice", "makes", "perfect", "coding", "makes"].
 *
 * Input: word1 = “coding”, word2 = “practice”
 * Output: 3
 *
 * Input: word1 = "makes", word2 = "coding"
 * Output: 1
 *
 * Note:
 * You may assume that word1 does not equal to word2, and word1 and word2 are both in the list.
 */

/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 const shortestDistance = (words, word1, word2) => {
    let index = -1;
    let min = words.length;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word1 || words[i] === word2) {
        if (index !== -1 && words[index] !== words[i]) {
          min = Math.min(i - index, min);
        }
        index = i;
      }
    }
  
    return min;
  };
  
  export { shortestDistance };