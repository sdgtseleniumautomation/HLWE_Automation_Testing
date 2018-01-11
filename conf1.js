// var HtmlReporter = require('protractor-jasmine2-html-reporter');
	
	 // var reporter = new HtmlReporter({
     // dest: 'protractor-reports',
     // filename: 'protractor-report.html'
	 // });

// exports.config = 
	 // {
	 // directconnect: true,
	 // capabilities: {'browserName': 'chrome'},
	 // framework: 'jasmine',
	 // specs: ['example.js'],
	 // jasmineNodeOpts: {
	 // defaultTimeoutInterval: 300000
	 // },
	
	
	// onComplete: function() {
     // var browserName;
     // var capsPromise = browser.getCapabilities();
	
	// console.log("inside on complete in capspromise", capsPromise);
 
     // capsPromise.then(function (caps) {
        // browserName = caps.get('chrome');
        
	// console.log("inside capsPromise", capsPromise);
        // var HTMLReport = require('protractor-html-reporter');
 
        // testConfig = {
            // reportTitle: 'Test Execution Report',
            // outputPath: 'E:\\Demo\\Generate a test report',
            // screenshotPath: 'E:\\Demo\\Generate a test report',
            // testBrowser: 'chrome',
            // modifiedSuiteName: false,
            // screenshotsOnlyOnFailure: true
        // };
        // new HTMLReport().from('xmlresults.xml', testConfig);
    // });
 // }
	 // }
//-------------------------------------------------------------------------------------------------------------

var HtmlReporter = require('protractor-jasmine2-html-reporter');
	
	var reporter = new HtmlReporter({
		plugins: [{
        package: 'jasmine2-protractor-utils',
		dest: 'protractor-reports',
		filename: 'protractor-report.html',
		takeScreenshots: true,
		takeScreenshotsOnlyOnFailures: true
//		screenshotsFolder: 'F:\\Screeshots'
		}]
	});				
	exports.config = 
	{
		
		directconnect: true,
		capabilities: {'browserName': 'chrome'},
		framework: 'jasmine',
		specs: ['example.js'],
		jasmineNodeOpts: {
		defaultTimeoutInterval: 300000
	},
	onPrepare: function() {
	//Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
		  jasmine.getEnv().addReporter(reporter);
		  
	  }
	  }
	
	
