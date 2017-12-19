// const loadSanityTestCase =require('../repo/test-cases/SanityTestCases.js')
var testcaseModules=require('../test-cases/test-case-loader');
module.exports = {
	load: function(){
	var testcasemodule=	testcaseModules.init();

		//console.log('in test suite loader'+JSON.stringify(testcasemodule));
		return testcasemodule;
	}
}
