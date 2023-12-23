function LongestWord(sen) {
    const words = sen.split(" ");
    let longest = "";
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
  
    return longest;
  }
  
  console.log(LongestWord("Hello world123 567")); 
  console.log(LongestWord("This is a test sentence")); 
  