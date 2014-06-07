var repeat = function(string, times){
	var returnString = "";
	for (var i = 0; i < times; i++){
		returnString += string;
	}
	return returnString;
}

var join = function(array, splitter){
	var returnString = "";
	if (splitter) {
		for (var i = 0; i < array.length; i++) {
			if (i === array.length - 1) {
				returnString += array[i];
			}
			else{
				returnString += array[i] + splitter;
			}
		}
	}
	else {
		for (var i = 0; i < array.length; i++){
			returnString += array[i];
		}
	}
	return returnString;
}

var sum = function(array) {
	var returnNumber = 0;
	for (var i = 0; i < array.length; i++){
		returnNumber += array[i];
	}
	return returnNumber;
}

var paramify = function(object){
	var returnString = "";
	var keyArray = [];
	var propertyArray = [];

	//put everything in an array for sorting
	for (var key in object) {
		if(object.hasOwnProperty(key)){
			keyArray.push(key);
			propertyArray.push(object[key]);
		}
	}

	//bubble sort
	var doneSort = true;
	while (doneSort){
		doneSort = false;
		for (var i = 0 ; i < keyArray.length; i++) {
			if (keyArray[i] > keyArray[i + 1]) {
				var keyTemp = keyArray[i];
				var propertyTemp = propertyArray[i];

				keyArray[i] = keyArray[i + 1];
				propertyArray[i] = propertyArray[i + 1];

				keyArray[i+1] = keyTemp;
				propertyArray[i+1] = propertyTemp;

				doneSort = true;
			}
		}
	}

	for (var i = 0; i < keyArray.length; i++) {
		if (i === keyArray.length - 1) {
			returnString += keyArray[i] + "=" + propertyArray[i];
		}
		else {
			returnString += keyArray[i] + "=" + propertyArray[i] + "&";
		}
	}


	return returnString;
}

var factorial = function(num){
	
    //if we get a zero then 
    if (num === 0) {
        return 1;
    }

    //keep multiplying as long as it is greater than 2
    var tmp = num;
    while (num-- > 2) {
        tmp *= num;
    }

    return tmp;
}

var concat_string = function(input){
	var result = "";
	for (var i = 0; i < arguments.length; i++){
		result += arguments[i];
	}

	

	return result;
}