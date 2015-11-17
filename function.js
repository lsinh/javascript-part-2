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

//returns largest name first along with object properties

var name1 = {
       name : "Span",
       email: "spantheman@hotmail.com"
       };

var name2 = {
   name : "Stanley",
   
   email: "stantheman@hotmail.com"
   };

var name3 = {
   name : "Susie",
   email: "susieQ@hotmail.com"
   };

var arrayOfPeople =[
    name1,
    name2,
    name3
   ];

function longestWord(arrayOfPeople){
   var sortedArrayByLength = arrayOfPeople.sort(
        function(a,b){

           if (a.name.length < b.name.length){
               return 1;
           }        
           else {
               return -1;
           }
       });
   
   return sortedArrayByLength;    
}

function alphaEmails (arrayOfPeople){
   var sortedArrayByLetter = arrayOfPeople.sort(
       function(a,b){
           if (a.email < b.email){
               return -1;
           }
           else{
               return 1;
           }
       });
   return sortedArrayByLetter;
}

console.log(longestWord(arrayOfPeople));
console.log(alphaEmails(arrayOfPeople));


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



//Major difference here is returning a function that returns the different mathematical steps
function operationMaker(operation) {
  
    if (operation === 'add') {
      return function(num1, num2) {
        return num1 + num2;
      };
    }
    if (operation === 'mult') {
      return function(num1, num2) {
        return num1 * num2;
      };
    }
    if (operation === 'subtract') {
      return function(num1, num2) {
        return num1-num2;
      };
    }
    if (operation === 'div') {
        return function(num1, num2) {
      return num1/num2;
      };
    }
    return 0;
}

var adder = operationMaker('add');
var sum = adder(5, 10);

console.log(sum);


//this is a constructor function for Warrior
function Warrior(name, gender, level, weapon, power) {
    this.name = name;
    this.gender = gender;
    this.level = level ;
    this.weapon = weapon;
    this.power = power;
  
}
  
Warrior.prototype.fight = function() {
    console.log( this.name + " rushes to the arena with a" + this.weapon);
    
  };


Warrior.prototype.faceoff = function(opponent) {
  if (this.power > opponent.power) {
    console.log(this.name + "wins!");
  }  
  else if (this.power < opponent.power) {
    console.log(this.name + "loses");
  }
  else {
    console.log("draw");
  }
};

var rick = new Warrior("Rick", "M", 4, "sword", 6); //{name: "Rick", gender: "M"}


var prick3 = new Warrior("prick", "M", 5, "sword", 8);

prick3.faceoff(rick);


