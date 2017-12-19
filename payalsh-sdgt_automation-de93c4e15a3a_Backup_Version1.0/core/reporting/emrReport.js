var excel = require("exceljs");
// create workbook by api.
var workbook = new excel.Workbook();

var sheet = workbook.addWorksheet("TestReport");

function testReport(stepNo,testCase,status){


sheet.columns = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'TestCaseName', key: 'testCaseName', width: 40 },
    { header: 'Status', key: 'status', width: 20, outlineLevel: 1 }
];



sheet.addRow({id: stepNo, testCaseName: testCase, status: status});

workbook.xlsx.writeFile("D:\\TestReport.xlsx").then(function() {
   // console.log("xlsx file is written.");
});

}
module.exports.testReport = testReport;