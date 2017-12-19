module.exports = {

  type: "table",

  execute: function(locatorType, locatorValue, inputData, action) {
    var def = protractor.promise.defer();

    switch (action.toString().toLowerCase()) {
      case 'getrowcount':
        this.getRowCount(locatorType, locatorValue, inputData).then(function(result) {
          console.log(result);
            return def.fulfill(result);
          },
          function(error) {
            console.log(error);
            return def.reject(error);
          });
    }
    browser.driver.sleep(2000);
    return def.promise;
  },

  getRowCount: function(locatorType, locatorValue, inputData) {
    var deferred = protractor.promise.defer();
    switch (locatorType.toString().toLowerCase()) {

      case 'repeat':

  /*      element.all(by.repeater(locatorValue)).count().then(function(count) {
          console.log('getrowcount',count);
          return deferred.fulfill("pass");

        }).catch(function(error) {
          console.log(error.message);
          var errMsg = errorLookUp.getErrorMessage(error.message);
          if (errMsg == undefined) {
            errMsg = error.message;
          }
          //Error occured, reject the promise and return back the error message.
          return deferred.reject(errMsg);
        });*/

        var testCaseUtil = require('../controller/TestCaseUtility');
        testCaseUtil.getTableRowCount(locatorValue);
        console.log(testCaseUtil.getRowCountValue())
        deferred.fulfill("pass");
        break;
    }
    return deferred.promise;
  }
}