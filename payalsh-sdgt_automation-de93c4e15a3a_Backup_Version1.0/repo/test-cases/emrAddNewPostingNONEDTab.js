module.exports = {
	id: "48",
	caseletId: "48",
	name: "emrAddNewPostingNONEDTab",
	overridenExecution: false,
	data: [
		{
			caseletStepId: "1",
			data: "barakathk@hlwe.com"
		},
		{
			caseletStepId: "2",
			data: "abcd@1234"
		},
		{
			caseletStepId: "3",
			data: "hospital_123"
		},
		{
			caseletStepId: "4",
			data: ""
		}
		,
		{
			caseletStepId: "5",
			data: ""
		},
		{
			caseletStepId: "6",
			data: ""
		},
		{
			caseletStepId: "7",
			data: ""
		},
		{
			caseletStepId: "8",
			data: ""
		},
		{
			caseletStepId: "9",
			data: ""
		},
		{
			caseletStepId: "10",
			data: ""
		},
		{
			caseletStepId: "11",
			data: "1"
		},
		{
			caseletStepId: "12",
			data: "comment"
		},
		{
			caseletStepId: "13",
			data: ""
		}
		
	],

	executionHooks: [
		{
			type: "after",
			caseletStepId: "",
			hook: function() {
				
			}
		}

	],
//testcase mapping, handler mapping, controller
	execute: function() {
		
		//maincontroller.execute(testcasejson,elementHandlerMap);
		//console.log("login execute");	
	},
	overide: function(){

	},
	verify: function() {

       var deferred= protractor.promise.defer();
     
     var control=element(by.id(""));
      control.getText().then(function(text){
     if(text=='')
       {
               console.log('verify pass');
       
                return deferred.fullfill('pass');
       }
       else
       {
                console.log('verify fail');
                 return deferred.reject('fail');
       }
          
   }).catch(function(err){
	      console.log('verify fail',err.message);
	      return deferred.reject('fail');

     });
           return deferred.promise;
 
       
	}



}