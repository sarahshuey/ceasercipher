//string for forloop to run through
const letters = 'abcdefghijklmnopqrstuvwxyz';

function encipher(str, shift) {
  let output = '';
  // you are going through the string and looking at each letter in here you are theoretically assigning a number to each letter this way you know how many to move in order to change the meaning of the word
  for (var i = 0; i < str.length; i++) {
    let startString = letters.indexOf(str[i]);
    console.log(startString);

        if (startString + shift > letters.length - 1) {
          let remaining = letters.length - 1 - startString;
          console.log(remaining);
          output += letters[shift - remaining - 1];
        }
        else {
          output += letters[startString + shift];
        }
  }
  return output;
}
// this is going to read the encipher and look at how many letters it needs to go back, this is done by giving it a
function decipher(str, shift) {
  let output = '';
  for (var i = 0; i < str.length; i++) {
    let startString = letters.indexOf(str[i]);
    console.log(startString);

    if (startString - shift < 0) {
      let remaining = startString - shift;
      console.log(remaining);
      output += letters[letters.length + remaining];
    }
    else {
      output += letters[startString - shift];
    }

  }
  return output;
  console.log(output);
}

module.exports = {
  encipher,
  decipher
}
