const wrap = (line, maxLen) => {

  let finalStr = '';

  if (line.length <= maxLen) {
    return line;
  } else {

    const numLines = Math.floor(line.length/maxLen);

    for (let i = 0; i < numLines; i++) {

      const placeToInsertLineBreak = line.charAt((i+1)*maxLen-1);


      if (i === numLines-1) {
        finalStr += line.substring((i*maxLen));
        break;
      }

      if (placeToInsertLineBreak === ' ') {
        finalStr += line.substring((i*maxLen), line.indexOf(placeToInsertLineBreak) + 1);
      } else {
        const indexOfLastSpace = line.substring((i*maxLen), line.indexOf(placeToInsertLineBreak) + 1).lastIndexOf(' ');
      }
      finalStr += '\n';
    }
    return finalStr;
  }
};

module.exports = wrap;
