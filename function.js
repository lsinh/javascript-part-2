//longest string using sort() method

var words = []
    words.sort(function(a, b) { return b.length - a.length; })[0];

//by building your own constructor but not using sort()

function longestWord(string1, string2) {
    if (string1.length >= string2.length) {
  return [string1,string2];}
  else {
    return [string2, string1];
  }
}

//another way of using sort

function longestWord(arrayOfWords) {
    var sortedArray = arrayOfWords.sort(
        function(a,b) {
            if (a.length >= b.length ) {return -1;}
    else {
        return 1;
    }
    


//Function returns the square root, then this function is mapped to an array to return the square root of each element in the array

function square(number) {
     return number*number;
 }

var array = [5,6, 7, 6];
var sqrt = array.map(square);

 
console.log(sqrt);

//returning square of num property of an object

//defining function that will replace num property and putting it in objet
function squareObject(currentObject) {
    currentObject.num = currentObject.num * currentObject.num; 
    
   return currentObject;

}

var newArray = [{num: 1}, {num: 4}, {num: 6, name: "help"}];
  
  //map function
  var square = newArray.map(squareObject);

console.log(square);



