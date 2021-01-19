function turnUpperCase(text) {
  return text.toUpperCase();
};

function firstCharacter(text) {
  return text.substr(0,1);
};

function concatenateTwoStrings(firstString, secondString) {
  return `${firstString}${secondString}`;
};


module.exports = {turnUpperCase, firstCharacter, concatenateTwoStrings};
