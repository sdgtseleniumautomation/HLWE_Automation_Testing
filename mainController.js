//need to handle all controllers here and mapping of controller
//latest way 3rd way
var count = 0;
var LoginPage = require("./LoginPage.js");

function execute(json, elementHandlerMap, testdatamap, testCaseFile)
 {

	var loginPage = new LoginPage();
	loginPage.loginEMR();

}

module.exports.execute = execute;