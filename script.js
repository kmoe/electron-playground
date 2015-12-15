var fs = require('fs');

console.log(fs);

var fileText = fs.readFileSync('something.txt', 'utf8');

document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('wordButton');

  button.addEventListener('click', function() {
    var inputValue = document.getElementById('wordInput').value;

    fileText = fileText.replace(/Lorem/, inputValue);

    document.write(fileText);
  });

});
