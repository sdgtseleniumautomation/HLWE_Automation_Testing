console.log("hello");
var Excel = require('exceljs');
console.log("helloo");
var os = require('os'); 
console.log("hellooo");
var TEMP_DIR = os.tmpdir();
console.log("helloo0o");
var wrkbook = new Excel.Workbook();
console.log("hell00ooo");
describe('Open the clinicare website by logging into the site', function()
 {
    it('Should Add a text in username and password fields and hit login button', function() 
{
console.log("hello6");

wrkbook.xlsx.readFile('E:\\Demo\\Data_Login.xlsx').then(function() 

{
	console.log("hello7");
  var worksheet = wrkbook.getWorksheet('Sheet1');
  worksheet.eachRow(function (Row, rowIndex) 
  {
      var Test_URL = Row.getCell(1).value;
      var User_Name = Row.getCell(2).value;
      var Password = Row.getCell(3).value;
      // do whatever you want with those variables.
	  
  });
});
});
});

// var Excel = require('exceljs');
// console.log("hellooo");
// var wrkbook = new Excel.Workbook();
// console.log("hiiiiiii");
// wrkbook.xlsx.readFile('E:\\Login_Data.xlsx').then(function() 
// {
// console.log("hello");
// var worksheet = wrkbook.getWorksheet('Sheet1');
// console.log("hii");

// worksheet.eachRow(function (Row, value) 
// {

    // console.log("Row " + value.A1);
// });


// });