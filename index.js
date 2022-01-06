function add(a, b) {
    return a + b
  } 

  function subtract(a, b) {
    return a - b
  } 

  function multiply(a, b) {
    return a *= b
  } 

  function divide(a, b) {
    return a /= b
  } 
   
function increment(n)  {
    return n + 1
}
function decrement(n) {
    return n - 1
}
/*

function makeInt(n) {
    parseInt("5", 10);
    return n;
}


function preserveDecimal(n) {
    parseFloat("2.222");
    return n;
}
*/

function makeInt(n) {
    return parseInt(n, 10);
}

function preserveDecimal(n) {
    return parseFloat(n);
}