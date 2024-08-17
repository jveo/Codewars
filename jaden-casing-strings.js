
function toJadenCase(str) {

	return words = str.split(" ").map( val => {
		console.log(val[0].toUpperCase() + val.substr(1))}).join("");
		
  }; 

  var result = toJadenCase("How can mirrors be real if our eyes aren't real")
  console.log(result);