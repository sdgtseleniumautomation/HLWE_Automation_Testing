module.exports = {

      type:"placeholder",

    execute: function(locatorType, locatorValue, inputData, action){
      
       var def = protractor.promise.defer();
        var i=0;    
        while(i<action.length)
        {    
             // console.log(action[i]);
             // i++;
             switch(action[i].toString().toLowerCase())
             {        
                case 'clear':
                    this.clear(locatorType,locatorValue).then(function(result) {
                            console.log("In result - " + result);
                            return def.fulfill(result);
                        },
                        function(error) {
                            console.log("In error - " + error);
                            def.reject(error);

                        });
                    i++;
                    break;
                case 'input':
                    this.input(locatorType,locatorValue,inputData).then(function(result) {
                            //console.log("In result - " + result);
                            return def.fulfill(result);
                        },
                        function(error) {
                            //console.log("In error - " + error);
                            return def.reject(error);
                        });
                    i++
                    break;
                // case 'click':
                //     console.log("in switch click");
                //     break;
             }  
        }
         return def.promise;
    },
    clear: function(locatorType,locatorValue){
         var deferred = protractor.promise.defer();
        switch(locatorType.toString().toLowerCase())
        {
            case 'model':
                var control=element(by.model(locatorValue));
                control.clear().then(function(result){
               return deferred.fulfill("pass");
                })
                .catch(function(error){
                 deferred.reject(error.message);
                   //  console.log('Error : ' + err.message);
                                
                });
                break;
            case 'css':                
                var control=element(by.css(locatorValue));
                control.clear().then(function(result){
               return deferred.fulfill("pass");
                })
                .catch(function(error){
                    
                   deferred.reject(error.message);
             //console.log('Error : ' + err.message);
                   
                });
                break;
        }
        return deferred.promise;
    },
    input: function(locatorType,locatorValue,inputData){
        // console.log('I am in input');
         var deferred = protractor.promise.defer();
        switch(locatorType.toString().toLowerCase())
        {
            case 'model':
                var control=element(by.model(locatorValue));
                control.sendKeys(inputData).then(function(result){
                     return deferred.fulfill("pass");
                })
                .catch(function(error){
                   return deferred.reject(error.message);                 
            });
               
                break;
            case 'css':                
                var control=element(by.css(locatorValue));
                control.sendKeys(inputData).then(function(result){
               return deferred.fulfill("pass");
                })
                .catch(function(error){
                      return deferred.reject(error.message);
                               
               });
                break;
        }
        return deferred.promise;
    }
}