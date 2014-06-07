var f2c = function(input){
	return (((input - 32)* 5)/9);
}
var c2f = function(input){
	return (((input * 9) / 5) + 32);
}

function Temperature(temperatureParameter){

	if (!temperatureParameter){
		var fahrenheit = 0;
		var celcius = 0;

		var isFahrenheit = false;
		var isCelcius = false;
	}
	else {
		var fahrenheit = temperatureParameter;
		var celcius = 0;

		var isFahrenheit = true;
		var isCelcius = false;
	}

	this.setFahrenheit = function(input){
		fahrenheit = input;
		isFahrenheit = true;
	}

	this.fahrenheit = function(){
		if(isFahrenheit) {
			return fahrenheit;
		}
		else if(isCelcius) {
			return (((celcius * 9)/5)+32);
		}
	}

	this.setCelcius = function(input){
		celcius = input;
		isCelcius = true;
	}

	this.celcius = function(){
		if(isCelcius){
			return celcius;
		}
		else if (isFahrenheit){
			console.log(fahrenheit);
			return (((fahrenheit-32)*5)/9);
		}
	}

}