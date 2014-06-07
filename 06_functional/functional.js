var countWords = function(input){
  var returnNumber = 0;
  var inputSplit = input.split(" ");
  return inputSplit.length;
}

var makeAdder = function(input){

  function b(inputTwo) {
    return input + inputTwo;
  }
  return b;
}

var adderOf2function = function(input){
  makeAdder(input);
}

var forEach = function(array, functionInput) {
  for (var i = 0 ; i < array.length; i++){
    functionInput(array[i]);
  }
}

var map = function(array, functionInput){
  var returnArray = [];
  for (var i = 0; i < array.length; i++){
    returnArray.push(functionInput(array[i]));
  }
  return returnArray;
}

var filter = function(array, functionInput){
  var returnArray = [];
  for (var i =0; i < array.length; i++){
    if (functionInput(array[i])){
      returnArray.push(array[i]);
    }
  }

  return returnArray;
}

var contains = function(array, elemet){
  var doesContain = false;

  for (var key in array){
    if (array[key] == elemet){
      doesContain = true;
      break;
    }
  }

  return doesContain;
}

var countWordsInReduce = function(array_inputOne, array_inputTwo){
  var word_count = array_inputOne.split(" ");
  var word_count_two = array_inputTwo.split(" ");
  return word_count.length + word_count_two.length;
}

var reduce = function(array, element, functionInput){
  var returnValue = 0;
  var isFirst = true;

  for (var i = 0; i < array.length - 1; i++){
    if (isFirst){
      returnValue += functionInput(array[i], array[i + 1]);
      isFirst = false;
    }else{
      returnValue = functionInput(returnValue, array[i+1]);
    }
  }
  return returnValue;
}

var every = function(array, functionInput){
  var allTrue = true;
  for (var i = 0; i < array.length; i++){
    if (!functionInput(array[i])){
      allTrue = false;
    }
  }

  return allTrue;
}

var sum = function(arrayInput){

  var add = function(a, b){
    return a + b;
  }

  var returnValue = reduce(arrayInput, 0, add);
  return returnValue;
}

var any = function(arrayInput, functionInput){
  var isTrue = false;
  if (!functionInput) {
    for (var i = 0 ; i< arrayInput.length; i++){
      if (arrayInput[i] === true){
        isTrue = true;
      }
    }
  }

  else {
    for (var i = 0; i < arrayInput.length; i++){
      if(functionInput(arrayInput[i])){
        isTrue = true;
      }
    }
  }
  return isTrue;
}

var once = function(inputFunc){
  var isFirst = true;
  var returnFunction = function(){
    if (isFirst){
      inputFunc();
    }
    isFirst = false;
  }

  return returnFunction;
}

var wrapper = function(functionOne, functionTwo){
  var returnFunction = function(){
    return functionTwo(functionOne)
  }
  return returnFunction;
}