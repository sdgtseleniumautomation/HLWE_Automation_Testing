	var Excel = require('exceljs');
	var XLSX = require('xlsx');
	var os = require('os');
	var TEMP_DIR = os.tmpdir();
	var wrkbook = new Excel.Workbook();

	describe('Open the clinicare website by logging into the site', function () {
	it('Should Add a text in username and password fields and hit login button', function () {
	console.log("hello6");

	var workbook = XLSX.readFile('E:\\Demo\\Data_Login.xlsx');
	//var ws = workbook.Sheets.Sheet1;
	var exceltojson = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);
	console.log("exceltojson", exceltojson);	
	
	browser.driver.manage().window().maximize();
			
	// var exceltojson = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1);
	// console.log("exceltojson", exceltojson);
			
	for(var a = 0; a < exceltojson.length ; a++){
	console.log("Test_URL", exceltojson[a].Test_URL);
	console.log("User_Name", exceltojson[a].User_Name);
	console.log("Password", exceltojson[a].Password);
	browser.get(exceltojson[a].Test_URL); 

	//Perform Login:UserName 
	try 
	{
    element(by.model('accessCod')).sendKeys(exceltojson[a].User_Name).then(function() 
	{
        console.log('keys sent successfully');
    }, function(err) 
	{
        console.error('error sending keys ' + err);
        throw err;
    });
	}
	catch(err) 
	{
    console.log('error occured');
	}
	browser.driver.sleep(2000)	

	//Perform Login:Password 
	element(by.model('password')).sendKeys(exceltojson[a].Password); 
	browser.driver.sleep(2000)
	
	//Perform Login:LoginButton 
	element(by.css('.btn.btn-primary.pull-right')).click(); 
	browser.driver.sleep(2000)
	
	//Clicking on New Tab
	element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[2]/thead/tr/th[1]/i')).click();
	browser.driver.sleep(2000)
	
	//Clicking on Image for Logout
	element(by.css('.user-auth-img.img-circle')).click();
	browser.driver.sleep(2000)
	
	//Clicking on LogOut Button
	element(by.xpath('/html/body/div[3]/div[1]/div[16]/div[1]/div/div[2]/nav/div[2]/ul/li[4]/ul/li[5]/a/span')).click();
	browser.driver.sleep(2000)
	
	//Clicking on Ok for confirmation
	element(by.id('logout')).click();
	
	console.log(exceltojson[a].User_Name + "Passed the Test");
	
			
	// //Clicking on First Patient
	// element(by.cssContainingText('span.clearfloat','16502')).element(by.xpath('/html/body/div[3]/div[1]/div[17]/div/div/table[2]/tbody/tr[1]/td[1]/div[1]/img')).click();

	// //Clicking on Arrow Button
	// element(by.id('newPatientDetailsNextArrow')).click();

	// //Clicking on Visit List
	// element(by.xpath('/html/body/div[3]/div[26]/div/div/div[2]/div/table/tbody/tr/td')).click();
	// browser.driver.sleep(2000);

	// //Medication Icon
	// element(by.id('iconMedicationPlus')).click();
	// browser.driver.sleep(2000);

	// //Mention the Name of the Medicine
	// element(by.id('opDrug')).sendKeys('Vitamin K  10mg Inj').element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div[2]/div[2]/div/div[1]/form/div/div[2]/div[1]/div/div/ul/li/a/strong')).click();

	// //Mention the Frequency of the Medicine
	// element(by.id('inputScheduleFrequency')).sendKeys('2 Times Daily').element(by.xpath('/html/body/div[3]/div[1]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div[1]/div/div/div/div/div[2]/div[2]/div/div[1]/form/div/div[3]/div[1]/div[1]/input')).click();

	// //Mention the Dosage of the Medicine
	// element(by.id('opDosage')).sendKeys('1');

	// //Mention the Quantity
	// element(by.id('inputQty')).sendKeys('4');

	// //Medication Form Page
	// element(by.id('btnSaveOpSimple')).click();
			
			};
			
		});
	});



	