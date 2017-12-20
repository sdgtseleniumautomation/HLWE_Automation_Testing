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

		//Clicking on New Button Tab
		element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[2]/thead/tr/th[1]/i')).click();
		
		//Clicking on Patient Image Icon
		element(by.id('searchPatientImgNewF')).click();
		
		//Clicking on Arrow to navigate on next page
		element(by.id('newPatientDetailsNextArrow')).click();
		
		//Clicking on Doctor's Name related to Patient selected
		element(by.xpath('/html/body/div[3]/div[26]/div/div/div[2]/div/table/tbody/tr/td/span[2]')).click();
		element(by.id('iconMedicationPlus')).click();
		element(by.id('opDrug')).sendKeys('Cravit');		
	}
}

module.exports =  LoginPage;