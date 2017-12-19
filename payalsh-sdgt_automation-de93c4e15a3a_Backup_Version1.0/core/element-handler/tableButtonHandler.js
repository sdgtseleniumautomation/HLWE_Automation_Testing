var errorLookUp = require('../controller/errorLookUp');
module.exports = {

    type: "tableButton",

    execute: function(locatorType, locatorValue, inputData, action) {

        var def = protractor.promise.defer();
          
            switch (action.toString().toLowerCase()) {
                case 'editclick':
                    this.editclick(locatorType, locatorValue).then(function(result) {
                            
                            return def.fulfill(result);
                        },
                        function(error) {
                           
                            return def.reject(error);

                        });
                    
                    break;
                
                case 'deleteclick':
                    this.deleteclick(locatorType, locatorValue).then(function(result) {
                            //console.log("In result - " + result);
                            return def.fulfill(result);
                        },
                        function(error) {
                           
                            return def.reject(error);
                        });
                  
                    break;
                   
            }
       
        browser.driver.sleep(2000);
        return def.promise;
    },
  editclick: function(locatorType, locatorValue) {
        var deferred = protractor.promise.defer();
        switch (locatorType.toString().toLowerCase()) {
           case 'repeat':
                console.log('repeat test');
                //var repeaterLocator = locatorValue.toString().split(',');
        element.all(by.repeater(locatorValue)).get(0).element(by.css('i[title=Edit]')).click().then(function(result) {                        console.log('i tag found');
                        return deferred.fulfill("pass");
                    })
                    .catch(function(error) {
                        console.log("In error - " + error.message);
                        var errMsg = errorLookUp.getErrorMessage(error.message);
                        if (errMsg == undefined) {
                            errMsg = error.message;
                        }
                        return deferred.reject(errMsg);

                    });
                break;
        }
        return deferred.promise;
    },
    deleteclick: function(locatorType, locatorValue) {
        // console.log('I am in input');
        var deferred = protractor.promise.defer();
        switch (locatorType.toString().toLowerCase()) {
             case 'repeat':
                //console.log('repeat test');
                //var repeaterLocator = locatorValue.toString().split(',');
        element.all(by.repeater(locatorValue)).get(0).element(by.css('i[title=Cancel]')).click().then(function(result) {
                        return deferred.fulfill("pass");
                    })
                    .catch(function(error) {
                        console.log("In error - " + error.message);
                        var errMsg = errorLookUp.getErrorMessage(error.message);
                        if (errMsg == undefined) {
                            errMsg = error.message;
                        }
                        return deferred.reject(errMsg);

                    });
                break;

            
        }
        return deferred.promise;
    }
}