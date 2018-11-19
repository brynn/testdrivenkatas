const wrap = (line, maxLen) => {
  let finalStr = '';

  if (line.length <= maxLen) {
    return line;
  } else {
    const numLines = Math.floor(line.length / maxLen);
    let idxOfLineBreak = maxLen;

    for (let i = 0; i < numLines; i++) {
      const currentSubstring = line.substring(
        i * idxOfLineBreak,
        (i + 1) * (maxLen - 1)
      );
      console.log('substring: ', currentSubstring);

      if (i === numLines - 1) {
        finalStr += line.substring(i * idxOfLineBreak);
        break;
      }

      if (line.charAt((i + 1) * (maxLen - 1)) === ' ') {
        finalStr += currentSubstring;
      } else {
        const idxOfLastSpace = currentSubstring.lastIndexOf(' ');
        finalStr += line.substring(i * idxOfLineBreak, idxOfLastSpace + 1);
        idxOfLineBreak = idxOfLastSpace + 1;
      }
      finalStr += '\n';
    }
    return finalStr;
  }
};

module.exports = wrap;
