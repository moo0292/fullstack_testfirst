var Calculator = function(){
	this.currentValue = 0;

	this.value = function(){
		return this.currentValue;
	}

	this.add = function(){
		this.currentValue += arguments[0];
	}

	this.subtract = function(){
		this.currentValue -= arguments[0];
	}

}

var calculator = new Calculator();
console.log(calculator.value());