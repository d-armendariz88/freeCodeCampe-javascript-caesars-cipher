const LETTER_PATTERN = /[A-Z]/


function rot13(str) {
  var results=''
  console.log(str.length)
  for( let i=0; i<str.length;i++){
    console.log(i)
    let currentChar = str[i];
    if(LETTER_PATTERN.test(currentChar)){
      console.log('current char ' + currentChar)
      let decodedChar = currentChar.charCodeAt(0)-13;
      if(decodedChar < 	65){
        decodedChar+=26;
      }
      currentChar = String.fromCharCode(decodedChar)
    }
    results += currentChar;
    console.log(results)
  }
  return results
}

var result= rot13("SERR PBQR PNZC");
console.log(result)