function pigIt(str) {
  let newStr = str.split(' ');
  let pigLatin = [];

  for (let i = 0; i < newStr.length; i++) {
    let word = newStr[i];
    let choppedLetter = word.slice(0, 1);
    pigLatin.push(word.slice(1) + choppedLetter + 'ay');
  }
  return pigLatin.join(' ');
}
