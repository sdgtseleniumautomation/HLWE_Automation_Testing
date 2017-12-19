var DynRequire = require('dyn-require');
var appRoot = require('app-root-path');

module.exports = {
	id:"10000",
	name:"testcaseloader",
	init: function() {
		// load all test case modules in an array
		var modules = new DynRequire(appRoot + '/repo/test-cases');
		var testcaseModules = modules.requireAll();
		console.log("In test case loader");

		 //console.log(JSON.stringify(testcaseModules)+ 'loader');
		return testcaseModules;
		
	},

	get: function(testCaseId) {
		// Get matching test case by iterative over the loaded array

	},
	execute: function(map,elementHandlerMap)
	{
		console.log("Do Nothing!!");
	}

}