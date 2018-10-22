$(document).ready(function() {
  $('form#word-play').submit(function(event) {
    var sentence = $("input#sentence").val();
    var myArray = sentence.split(" ");
    var newArray = [];
      myArray.map(function(word){
      if(word.length >= 3){
        newArray.push(word);
      } 
    });
    alert(newArray.reverse().toString());
});
});
