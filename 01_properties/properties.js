	var object = {};

	var setSomePropertiesOn = function(input){
		input.x = 7;
		input['y'] = 8;

		input.onePlus = function(insert){
			insert++;
			return insert;
		}
	};

	
	setSomePropertiesOn(object);

	

