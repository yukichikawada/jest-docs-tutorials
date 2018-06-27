function stringMatch(sentence, string) {
  for (let i = 0; i < sentence.length; i++) {
    let endIdx = string.length + 1 + i;
    if (sentence.slice(i, endIdx) === string) {
      return sentence + " has: " + string + " => true";
    };
  }
  return sentence + " has: " + string + " => false";
}

module.exports = stringMatch;