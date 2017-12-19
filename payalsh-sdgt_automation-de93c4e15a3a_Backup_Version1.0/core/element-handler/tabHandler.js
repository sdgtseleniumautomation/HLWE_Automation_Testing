var errorLookUp = require('../controller/errorLookUp');
module.exports = {

    type: "tab",

    execute: function(locatorType, locatorValue, inputData, action) {
        var def = protractor.promise.defer();
        switch (action.toString().toLowerCase()) {
            case 'click':
                this.click(locatorType, locatorValue).then(function(result) {
                        //console.log("In result - " + result);
                        return def.fulfill(result);
                    },
                    function(error) {
                        console.log("In error - " + error);
                        return def.reject(error);
                    });

        }
        browser.driver.sleep(2000);
        return def.promise;
    },
    click: function(locatorType, locatorValue) {
        var deferred = protractor.promise.defer();
        switch (locatorType.toString().toLowerCase()) {
            case 'repeat':
                //console.log('repeat test');
                var repeaterLocator = locatorValue.toString().split(',');
                element.all(by.repeater(repeaterLocator[0])).get(0).element(by.tagName("img")).click().then(function(result) {
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
                  
                case 'repeatnew':
                //console.log('repeat test');
                var repeaterLocator = locatorValue.toString().split(',');
                element.all(by.repeater(repeaterLocator[0])).get(0).element(by.id(repeaterLocator[1])).click().then(function(result) {
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

            case 'id':
                var control = element(by.id(locatorValue));
                control.click().then(function(result) {
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

            case 'css':

                var cssLocator = locatorValue.toString().split(',');
                var cssControl = element.all(by.css(cssLocator[0])).get(0);
                cssControl.all(by.id(cssLocator[1])).get(1).click().then(function(result) {
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

                case 'xpath':
                var control = element(by.xpath(locatorValue));
                control.click().then(function(result) {
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