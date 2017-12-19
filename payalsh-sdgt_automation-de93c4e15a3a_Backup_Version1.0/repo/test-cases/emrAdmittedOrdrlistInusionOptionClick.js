module.exports = {
	id: "329",
	caseletId: "329",
	name: "emrAdmittedOrdrlistInusionOptionClick",
	overridenExecution: false,
	data: [
		{
			caseletStepId: "1",
			data: "barakathk@hlwe.com"
		},
		{
			caseletStepId: "2",
			data: "abcd@1234"
		},
		{
			caseletStepId: "3",
			data: "hospital_123"
		},
		{
			caseletStepId: "4",
			data: ""
		},
		{
			caseletStepId: "5",
			data: ""
		},
		{
			caseletStepId: "6",
			data: ""
		},
		{
			caseletStepId: "7",
			data: ""
		},
		{
			caseletStepId: "8",
			data: ""
		},
		{
			caseletStepId: "9",
			data: ""
		}
	],
//testcase mapping, handler mapping, controller
	execute: function() {
		
	},
	overide: function(){

	},
	
	
	verify: function(done) {
     console.log('verify');
     var deferred= protractor.promise.defer();
     var control=element(by.xpath('//*[@id="ivPharmacyForm"]/div/div/div[1]/div/div[1]/h4'));
      control.getText().then(function(text){
       if(text=='Infusion')
       {
               console.log('verify pass');
       
                return deferred.fulfill('pass');
       }
       else
       {
                console.log('verify fail');
                 return deferred.reject('verification failed');
       }
          
   }).catch(function(error){
	      console.log(error.message);
			var errMsg = errorLookUp.getErrorMessage(error.message);
			if (errMsg == undefined) {
				errMsg = error.message;
			}
			//Error occured, reject the promise and return back the error message.
			return deferred.reject(errMsg);

     });
           return deferred.promise;
   

	}






}