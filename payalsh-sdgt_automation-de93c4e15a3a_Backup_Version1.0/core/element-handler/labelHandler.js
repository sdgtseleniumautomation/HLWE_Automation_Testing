var errorLookUp = require('../controller/errorLookUp');
module.exports = {
    type:"label",

    execute: function(locatorType, locatorValue, inputData, action) {
        switch(action.toString().toLowerCase())
        {
               case 'gettext': 
              this.getText(locatorType, locatorValue,inputData).then(function(result){
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
    
    getText: function(locatorType, locatorValue,inputData)
    {
        var deferred = protractor.promise.defer();
        switch(locatorType.toString().toLowerCase())
        {
            case 'model':
                var control=element(by.binding(locatorValue));              
               
               control.getText().then(function(text){
                   
                   return deferred.fulfill("pass");
                }).catch(function(error){

                    //console.log('Error : ' + error.message);
                   return deferred.reject(error.message);
                });
                break; 

            case 'css':                
                var control=element(by.css(locatorValue));
                
                control.getText().then(function(text){
                  
               return deferred.fulfill("pass");
                }).catch(function(error){
                   
                    //console.log('Error : ' + error.message);
                   return deferred.reject(error.message);
                });
                break;

              case 'id':                
                var control=element(by.id(locatorValue));               
                control.getText().then(function(text){                    
                 return deferred.fulfill("pass");
                }).catch(function(error){
                    //console.log(error.message);
                     return deferred.reject(error.message);
                });
                break;

                case 'xpath':                
                var control=element(by.xpath(locatorValue));
                 control.getText().then(function(result){
                   
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
