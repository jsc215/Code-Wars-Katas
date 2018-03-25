let rot13 = (str) => {
let decrypted = ''

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 109) {
      decrypted += String.fromCharCode(str.charCodeAt(i) + 13);
   } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122) {
      decrypted += String.fromCharCode(str.charCodeAt(i) - 13);
   } else {
      decrypted += str[i];
    }
  }
  return decrypted;
}

 console.log(rot13('EBG13 rknzcyr.'))
 console.log(rot13('This is my first ROT13 excercise!'))
