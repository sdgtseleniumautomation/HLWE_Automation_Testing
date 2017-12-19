module.exports = {
	id: "72",
	caseletId: "72",
	name: "emrNewAddDiagnosisCompalintsOnSelectofWeek",
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
			data: "null"
		}
		,
		{
			caseletStepId: "5",
			data: "null"
		},
		{
			caseletStepId: "6",
			data: "null"
		},
		{
			caseletStepId: "7",
			data: "null"
		},
		{
			caseletStepId: "8",
			data: "null"
		},
		{
			caseletStepId: "9",
			data: "A001"
		},
		{
			caseletStepId: "10",
			data: "05/18/2017"
		},
		{
			caseletStepId: "11",
			data: "null"
		},
		{
			caseletStepId: "12",
			data: "null"
		},
		{
			caseletStepId: "13",
			data: "COMMENT"
		},
		{
			caseletStepId: "14",
			data: "null"
		},
		{
			caseletStepId: "15",
			data: "null"
		},
		{
			caseletStepId: "16",
			data: "null"
		}
		
	],
//testcase mapping, handler mapping, controller
	execute: function() {
		
		//maincontroller.execute(testcasejson,elementHandlerMap);
		//console.log("login execute");	
	},
	overide: function(){

	},
	verify: function() {
     
     console.log('2nd verify')
		var testCaseUtil = require('../../core/controller/TestCaseUtility');
		var deferred = protractor.promise.defer();

		element.all(by.repeater('complaint in getPatientComplaintList')).count().then(function(count) {

			var initialRowCount = testCaseUtil.getRowCountValue();
			console.log('initialrowcount -- ', initialRowCount);
			console.log('currentrowcount -- ', count);

			if (count > initialRowCount) {

				console.log('verify pass');

				return deferred.fulfill('pass');
			} else {
				console.log('verify fail');
				return deferred.reject('verification failed');
			}

		}).catch(function(error) {
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
