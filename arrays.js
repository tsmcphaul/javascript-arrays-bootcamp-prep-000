var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"];
  
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, candyString){
  return chocolateBars.unshift("foo");
  return chocolateBars;
}