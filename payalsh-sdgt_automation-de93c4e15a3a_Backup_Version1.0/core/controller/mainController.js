//need to handle all controllers here and mapping of controller
//latest way 3rd way
var count = 0;
var LoginPage = require("./LoginPage.js");

function execute(json, elementHandlerMap, testdatamap, testCaseFile) {

	var loginPage = new LoginPage();
	loginPage.loginEMR();

	var deferred = protractor.promise.defer();

	var stepCount = json.steps.length;
	var callbackResult = {};
	
	var i = 4;
	stepdetail = getValues(i, json, testdatamap);

	var handler = elementHandlerMap.get(stepdetail.elementType.toString());

	handler.execute(stepdetail.locatorType, stepdetail.locatorValue, stepdetail.data, stepdetail.action).then(function(result) {

		for (i = 5; i < stepCount; i++) {
			count = i;
			stepdetail = getValues(i, json, testdatamap);
			handler = elementHandlerMap.get(stepdetail.elementType.toString());
			handler.execute(stepdetail.locatorType, stepdetail.locatorValue, stepdetail.data, stepdetail.action)
		}

		testCaseFile.verify().then(function(result) {

			console.log('main verify - pass');
			callbackResult['id'] = json.id;
			callbackResult['name'] = json.description;
			callbackResult['result'] = result;
			callbackResult['module'] = json.module;
			callbackResult['severity'] = json.severity;
			callbackResult['error'] = 'NA';

		 }).catch(function(err) {

		 	console.log('main verify - err');
		 	callbackResult['id'] = json.id;
		 	callbackResult['name'] = json.name;
		 	callbackResult['result'] = 'fail';
			callbackResult['module'] = json.module;
		 	callbackResult['severity'] = json.severity;
		 	callbackResult['error'] = err;

		 });



		return deferred.fulfill(callbackResult);

	}).catch(function(err) {

		callbackResult['id'] = json.id;
		callbackResult['name'] = json.description;
		callbackResult['result'] = 'fail';
		callbackResult['module'] = json.module;
		callbackResult['severity'] = json.severity;
		callbackResult['error'] = err + ' step no :' + count;


		return deferred.reject(callbackResult);

	});


	return deferred.promise;

}

function getValues(stepid, jsonFile, testdatamap) {
	var stepdetail = {};
	elementType = jsonFile.steps[stepid].elementType;
	locatorType = jsonFile.steps[stepid].elementLocator.type;
	locatorValue = jsonFile.steps[stepid].elementLocator.locator;
	data = testdatamap.get(jsonFile.steps[stepid].id);
	action = jsonFile.steps[stepid].action;
	stepdetail["elementType"] = elementType;
	stepdetail["locatorType"] = locatorType;
	stepdetail["locatorValue"] = locatorValue;
	stepdetail["data"] = data;
	stepdetail["action"] = action;

	return stepdetail;
}

module.exports.execute = execute;