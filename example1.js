describe('Opne the clinicare website by logging into the site', function()
{
it ('Should Add a text in username and password fields and hit login button',function()
{
	var mainController = require('../core/controller/MainController.js');
	
browser.driver.manage().window().maximize();
browser.get ('http://172.16.99.47:3001');
element(by.model('accessCode')).sendKeys('azizi@hlwe.com');
element(by.model('password')).sendKeys('abcd@1234');
element(by.css('.btn.btn-primary.pull-right')).click();
element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[2]/thead/tr/th[1]/i')).click();
element(by.id('searchPatientImgNewF')).click();
element(by.id('newPatientDetailsNextArrow')).click();
element(by.xpath('/html/body/div[3]/div[26]/div/div/div[2]/div/table/tbody/tr/td/span[2]')).click();
element(by.id('iconMedicationPlus')).click();
element(by.id('opDrug')).sendKeys('Cravit');
});
});

