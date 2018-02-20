function solution(string) {
let newString = '';
let splitString = string.split('');

splitString.forEach(char => {
  if(char === char.toUpperCase()){
    newString += ' ' + char;
  } else {
      newString += char;
  }
});
  return newString;
}
console.log(solution('camelCasing'));
