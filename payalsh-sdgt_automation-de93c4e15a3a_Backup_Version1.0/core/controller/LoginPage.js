var loginData = require('../loginData/loginData');

var LoginPage = function (){

	this.loginEMR = function(){
		browser.get(loginData.baseUrl);

		//perform login
		//username
		element(by.model("accessCode")).clear();
		element(by.model("accessCode")).sendKeys(loginData.username);

		//password
		element(by.model("password")).clear();
		element(by.model("password")).sendKeys(loginData.password);


		//hospital name
		//element(by.model("code")).clear();
		//element(by.model("code")).sendKeys(loginData.hospitalName);


		//login button click
		element(by.css("[ng-click='validate()']")).click();

	}
}

module.exports =  LoginPage;