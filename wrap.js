const wrap = (line, maxLen) => {
  if (line.length <= maxLen) {
    return line;
  } else {
    // use % operator to calculate number of lines (line.length % maxLen)
    // for each line, find place to insert line break using maxLen
    // if place to insert is a space, add line break and go to next line
    // if its not a space, find closest space (at a smaller index and insert line break there)
    const placeToInsertLineBreak = line.indexOf(maxLen);
  }
};

module.exports = wrap;
