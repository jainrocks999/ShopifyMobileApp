// 'use strict';
// data types in java script
/*
**** Primitive datatypes

1. String ====>

It represents a series of charecter writtent with qoutes.
I can be represented using single qoutes or double qoutes
*/

// exmaple
var str1 = 'raju barde';
var str2 = 'bare raju';
console.log(
  str1 +
  ' is ' +
  typeof str1 +
  ' type' +
  '\n' +
  str2 +
  ' is ' +
  typeof str2 +
  ' type',
);

/*
2. Number ====>

It respresents a number and can be writtent with or without decimal

*/
//example

let a = 10;
let b = 20.45;
console.log(
  a + ' is ' + typeof a + ' type' + '\n' + b + ' is ' + typeof b + ' type',
);

/*
  3. BigInt ===>
    this data type is used to store numbers wich are above the limitation of Number data type*/

var int = BigInt(393232329849809809859898990834980390);
console.log(int + ' is ' + typeof int + ' type');
/*
4. Boolean
It represents logical entity and can have two values true and false; booleans are gnraly use to condtional testing
*/
let d = 3;
let e = 5;
let f = 3;
console.log(d == e);
console.log(d === f);
/*
 4. Undifined ===>

 If a variable ius declared but not assigned any value. It hase the value undifined and its type also undifined
*/

let ba;
let ba2 = undefined; //we can also intialize the variable with undinined
console.log(ba, ba2);
/*

Null ==> it respresents  A non existent or invailid value
 */
let aa = null;
console.log(aa);

/*
   Symbole
*   It is a new data type introduced in the ES6 version of javascript. It is used to store an anonymous and unique value.
Example :
*/
var Symbole = Symbol('symoble');
console.log('thjis is ', Symbole);

// Hosting
// all varialble and function declartion is moved to top is called hosting it is default behavior of javascript
x = 10;
console.log(x);
var x;

sum();
function sum() {
  console.log('this is from sonne funxction', 1 + 2);
}

// const and let are not support hosting
// hostinh end
// we can avoid the hostibng usifng use strict
// examplke

var xx = 23; // Gives an error since 'x' is not declared

/*
  Difference between == and ===
  == it use to compare only value,
 === it used to compare both value and type
*/
let bb = 2;
// let cc = '2';
let cc = 2;
console.log(bb != cc);
console.log(bb !== cc);
console.log(cc);

let obj = {
  name: 'raju',
  brae: 'raju',
  somechanfr: 'raju',
  barde: 'ragjussss',
};

class app {
  xx;
  constructor(props, pro2) {
    this.xx = pro2;
  }

  app() {
    const newarr = Object.keys(obj);
    return 'RJRRJ' + 'newarr' + 'SSSSSS' + newarr.map(item => item);
  }
}
let apps = new app(15, 123);
