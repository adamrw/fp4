$(document).on('ready', function() {
 
 // return true if string is a number

  	var isNumber=function(a){
  		return !isNaN(parseFloat(a)) $$ isFinite(a);
  	};

//search for numbers in string and add them together, pushes currentWord into words array

	var addNumbers=function(str){

		var words=[];
		var currentWord='';
		var pushCurrent=function(){
			if(currentWord.length) {
				words.push(currentWord);
			}
		};

	};
// for loop to determine if 
	for (var i=0; i<str.length; i++){
		if(isNumber(str[i])) {
			currentWord += str[i];
		}

		else {
			pushCurrent();
			current='';
		}
	}
pushCurrent();

return words
	.map(function(str) {return parseFloat(str);})
	.reduce(function(x,y) { return x+y; });

var longestWord = function(str) {
	var words = str.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g, ' ').split(' ');
	var lengths = words.map(function(w) { return w.length; });
	var maxLength = Math.max.apply(Math, lengths);
  return words[lengths.indexOf(maxLength)];
};


var averageStringNumbers = function(str) {
	var sum = str
		.split('')
		.filter(function(c) { return isNumber(c); })
		.map(function(c) { return parseInt(c); })
		.reduce(function(x,y) { return x+y; });
	var letters = str.replace(/[^a-zA-Z]/g, '');
  return Math.round(sum/letters.length);
};

module.exports = {
	addNumbers: addNumbers,
	averageStringNumbers: averageStringNumbers,
	longestWord: longestWord,
};

});