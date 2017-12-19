var errorCodes = require('../../repo/caselet/errorLookup.json');
module.exports={

	getErrorMessage : function(errorMsg){
		var error ;
		for (var i=0 ; i< errorCodes.errors.length ; i++){
			console.log(i);
			if(errorMsg.includes(errorCodes.errors[i].errorSearchText)){
				error = errorCodes.errors[i].errorMessage;
				break;
			}
		}
		console.log('error', error);
		return error;
	}
}