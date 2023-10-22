/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = []; // Initialize the result array to store justified lines.
    let currentLine = []; // Initialize an array to store words in the current line.
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
  
      if (currentLine.length === 0 || currentLine.join(' ').length + word.length + 1 <= maxWidth) {
        currentLine.push(word); // Add words to the current line as long as it doesn't exceed the maxWidth.
      } else {
        result.push(justifyLine(currentLine, maxWidth)); // Justify the current line and add it to the result.
        currentLine = [word]; // Start a new line with the current word.
      }
    }
  
    if (currentLine.length > 0) {
      const lastLine = currentLine.join(' ');
      result.push(lastLine.padEnd(maxWidth, ' ')); // Pad the last line to the right with spaces to reach maxWidth.
    }
  
    return result;
  };
  
  function justifyLine(line, maxWidth) {
    if (line.length === 1) {
      return line[0].padEnd(maxWidth, ' '); // Special case for a line with a single word.
    }
  
    const totalSpaces = maxWidth - line.reduce((acc, word) => acc + word.length, 0);
    const spaceSlots = line.length - 1;
    const spacesBetweenWords = Math.floor(totalSpaces / spaceSlots);
    const extraSpaces = totalSpaces % spaceSlots;
  
    let justifiedLine = '';
  
    for (let i = 0; i < line.length; i++) {
      justifiedLine += line[i];
  
      if (i < line.length - 1) {
        const spaces = spacesBetweenWords + (i < extraSpaces ? 1 : 0);
        justifiedLine += ' '.repeat(spaces); // Add spaces between words to justify the line.
      }
    }
  
    return justifiedLine;
  };
  
  // Complexity Analysis:
  // Time Complexity: O(n) - The algorithm iterates through the words once.
  // Space Complexity: O(n) - The space used for the result array.
  
  // Possible Optimization:
  // The code is already efficient, but you can consider improving the readability of the code by breaking down complex expressions into separate statements for better understanding.  