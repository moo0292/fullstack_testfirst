var Calculator = function(){
  this.currrentValue = 0;
  this.allNum = [];
  var isFirstTime = true;

  //get the array
  this.value = function(){
    return this.currrentValue;
  }

  //push into the array
  this.push = function(){
    this.allNum.push(arguments[0]);
  }

  this.plus = function(){

    if (this.allNum.length === 0) throw "calculator is empty";

    if (isFirstTime) {

      var two = this.allNum.pop();
      var one = this.allNum.pop();

      this.currrentValue = one + two;
      isFirstTime = false;
    }
    else {
      var one = this.allNum.pop();
      this.currrentValue += one;
    }

  }

  this.minus = function() {

    if (this.allNum.length === 0) throw "calculator is empty";

    if (isFirstTime) {
      var two = this.allNum.pop();
      var one = this.allNum.pop();

      this.currrentValue = one - two;
      isFirstTime = false;
    }
    else {
      var one = this.allNum.pop();
      this.currrentValue -= one;
    }

  }

  this.divide = function() {

    if (this.allNum.length === 0) throw "calculator is empty";

    if (isFirstTime) {
      var two = this.allNum.pop();
      var one = this.allNum.pop();

      this.currrentValue = one / two;
      isFirstTime = false;
    }
    else {
      var one = this.allNum.pop();
      this.currrentValue /= one;
    }

  }

  this.times = function() {

    if (this.allNum.length === 0) throw "calculator is empty";
    
    if (isFirstTime) {
      var two = this.allNum.pop();
      var one = this.allNum.pop();

      this.currrentValue = one * two;
      isFirstTime = false;
    }
    else {
      var one = this.allNum.pop();
      this.currrentValue *= one;
    }

  }

}

var calculator = new Calculator();
