function file() {}
var fs = require('fs');

var a = fs.readFileSync("C:/SuzuGames/MS2/bunny", "utf8"); // URL of the local file.
console.log(a); // Read the file.

function char_count(str, letter)  // Function to count.
  {
   var letter_Count = 0;
   for (var position = 0; position < str.length; position++) 
   {
      if (str.charAt(position) == letter) 
        {
        letter_Count += 1;
        }
    }
    return letter_Count;
  }
  
  console.log(char_count(a, '.')); // Total of dots.