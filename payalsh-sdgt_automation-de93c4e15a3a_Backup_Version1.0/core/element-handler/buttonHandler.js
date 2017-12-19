var errorLookUp = require('../controller/errorLookUp');

module.exports = {
    type:"button",

    execute : function(locatorType, locatorValue,inputData,action) {

       
        var def = protractor.promise.defer();

        switch(action.toString().toLowerCase())
        {
                case 'click':
                this.click(locatorType, locatorValue).then(function(result){
                    //console.log("In result - " + result);
                     return def.fulfill(result);
                },
                function(error){
                    //console.log("In error - " + error);
                    return def.reject(error);
                });   
        }
        browser.driver.sleep(2000);
        return def.promise;
    },
    click : function(locatorType, locatorValue)
    {
        var deferred = protractor.promise.defer();
        switch(locatorType.toString().toLowerCase())
        {
            case 'model':
                var control=element(by.model(locatorValue));
                control.click().then(function(result){
                    return deferred.fulfill("pass");
                })
                .catch(function(error){
                  console.log(error.message);
                  var errMsg = errorLookUp.getErrorMessage(error.message);
                        if (errMsg == undefined) {
                            errMsg = error.message;
                        }
                   return deferred.reject(errMsg);
                });
                break;
            case 'css':                
                var control=element(by.css(locatorValue));
                 control.click().then(function(result){
                   
                    return deferred.fulfill("pass");
                })
                .catch(function(error){
                   console.log(error.message);
                   var errMsg = errorLookUp.getErrorMessage(error.message);
                        if (errMsg == undefined) {
                            errMsg = error.message;
                        }
                   return deferred.reject(errMsg);
                });
                break;
            case 'xpath':                
                var control=element(by.xpath(locatorValue));
                 control.click().then(function(result){
                   
                    return deferred.fulfill("pass");
                })
                .catch(function(error){
                   console.log(error.message);
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