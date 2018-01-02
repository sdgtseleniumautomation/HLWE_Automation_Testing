describe('Opne the clinicare website by logging into the site', function()
{
it ('Should Add a text in username and password fields and hit login button',function()
{
browser.driver.manage().window().maximize();
browser.get ('http://172.16.99.47:3001');

//Perform Login:UserName
element(by.model('accessCode')).sendKeys('azizi@hlwe.com');

//Perform Login:Password
element(by.model('password')).sendKeys('abcd@1234');

//Perform Login:LoginButton
element(by.css('.btn.btn-primary.pull-right')).click();

//Clicking on New Tab
element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[2]/thead/tr/th[1]/i')).click();

//Clicking on First Patient
element(by.cssContainingText('span.clearfloat','16502')).element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[2]/tbody/tr[1]/td[1]/div[1]/img')).click();

//Clicking on Arrow Button
element(by.id('newPatientDetailsNextArrow')).click(); 

//Clicking on Visit List
element(by.xpath('/html/body/div[3]/div[26]/div/div/div[2]/div/table/tbody/tr/td')).click();
browser.driver.sleep(2000);

//Medication Icon
element(by.id('iconMedicationPlus')).click();
browser.driver.sleep(2000);

//Mention the Name of the Medicine
element(by.id('opDrug')).sendKeys('Vitamin K  10mg Inj').element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li/a/strong')).click();

//Mention the Frequency of the Medicine
element(by.id('inputScheduleFrequency')).sendKeys('2 Times Daily').element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div[2]/div[2]/div/div[1]/form/div/div[3]/div[1]/div[1]/input')).click();

//Mention the Dosage of the Medicine
element(by.id('opDosage')).sendKeys('1');

//Mention the Quantity
element(by.id('inputQty')).sendKeys('4');

//Save the Filled Form
element(by.id('btnSaveOpSimple')).click();
});
});


