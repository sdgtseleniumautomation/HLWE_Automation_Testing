var graphCreate = require('../core/controller/graphCreate.js');
var nodeEmail = require('../nodemail/nodemail');
var fs = require('fs'),
  path = require('path');
  pdf = require('html-pdf');

// load a test suite : array of testcases
const loadSuites = require('../repo/suites/test-suite-loader.js')
  // load controller 
var testcases = loadSuites.load();
//console.log(testcases);

var mainController = require('../core/controller/MainController.js');
var reportCreate = require('../core/controller/reportCreate.js');
// load testMap and element Handler Map : array of test jsons and handlers
const loadmap = require('../core/controller/loadMap.js')
var array = loadmap.loadMap();
var testcasescount = testcases.length;
var resultArray = [];
var moduleReport = [];

testcases.sort(function(a, b) {
  return a.id - b.id;
})

var Map = require("collections/map");

// Pass test case Map for Module
var passedTestCasesMap = new Map();
// Fail test case Map for Module
var failedTestCasesMap = new Map();
//Create Set to maintain unique module records
var uniqueModuleSet = new Set();

// Call controller and execute testcase
describe('EMR Testing', function() {

  var originalTimeout;

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 130000000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  //browser.driver.navigate().refresh();
  it('Sanity', function() {

   // browser.driver.manage().deleteAllCookies();
    //console.log(testcasescount + " " +testcases.length);
    for (i = 0; i < testcasescount; i++) {
      var testcasesname = testcases[i].name;
      //console.log(testcasesname);
      //var testcasefile = require('../repo/test-cases/'+ array.jsFileMap.get(testcases[i].name));  
      var testcasefile = array.jsFileMap.get(testcases[i].name);

      if (testcasesname == 'testcaseloader') {

        return;
      }

      var testcasejson = array.map.get(testcasesname);

      var testdatalength = testcases[i].data.length;
      

      var testDataMap = new Map();

      for (var k = 0; k < testdatalength; k++) {
        testDataMap.set(testcases[i].data[k].caseletStepId, testcases[i].data[k].data);
      }


      mainController.execute(testcasejson, array.elementHandlerMap, testDataMap, testcasefile).then(function(result) {
          var id = result['id'];
          var value = result['result'];
          var testCaseName = result['name'];
          var modulename = result['module'];
          var severity = result['severity'];
          var error = result['error'];
          // Add module name to set
          uniqueModuleSet.add(modulename);

          console.log('Test case name', testCaseName);
          //Set testcase pass or fail count in Map corresponding to modules
          if (value == "pass") {
            var count = passedTestCasesMap.get(modulename);

            if (count == undefined) {
              passedTestCasesMap.set(modulename, 1);
            } else {
              passedTestCasesMap.set(modulename, count + 1);
            }
            resultArray.push(result);
          } else if (value == "fail") {
            
            var count = failedTestCasesMap.get(modulename);

            if (count == undefined) {
              failedTestCasesMap.set(modulename, 1);
            } else {
              failedTestCasesMap.set(modulename, count + 1);
            }
            resultArray.push(result);
          }

        })
        .catch(function(err) {

        });
    }

  });

  it('Report', function() {

      var modulesArray = [];
    var moduleCount = {};

    // Create array from unique set
    var uniqueArray = Array.from(uniqueModuleSet);

    for (var i = 0; i < uniqueArray.length; i++) {
      moduleCount['module'] = uniqueArray[i];
      // Put count 0 in map for passCount or failCount if not already available corresponding to module
      if (passedTestCasesMap.get(uniqueArray[i]) == undefined) {
        moduleCount['passCount'] = 0;
      } else {
        moduleCount['passCount'] = passedTestCasesMap.get(uniqueArray[i]);
      }
      if (failedTestCasesMap.get(uniqueArray[i]) == undefined) {
        moduleCount['failCount'] = 0;
      } else {
        moduleCount['failCount'] = failedTestCasesMap.get(uniqueArray[i]);
      }
      modulesArray.push(moduleCount);
      moduleCount = {};
    }
    browser.driver.sleep(2000);
    // graphCreate.createChart();
    reportCreate.reportCreate(resultArray,modulesArray);
    graphCreate.createChart(modulesArray);

    // Send Email after creation of graph
    //nodeEmail.sendEmailReport();
    
  });

});


