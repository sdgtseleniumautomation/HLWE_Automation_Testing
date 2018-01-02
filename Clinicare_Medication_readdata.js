describe('Opne the clinicare website by logging into the site', function()
{
it ('Should Add a text in username and password fields and hit login button',function()
{
	

'use strict';

var testData = require('E:\LAM WAH EE_Testing Enviornment\GIT\Clinicare_Automation_Testing\Detailed_Sheet - Copy.json');

describe('your test', function() {
    testData.forEach( function (data) {
        it('should read from an external json', function(){
            element(by.model('accessCode')).sendKeys(data.User Name);
			element(by.model('password')).sendKeys(data.Password);
			
			//Perform Login:LoginButton
			element(by.css('.btn.btn-primary.pull-right')).click();
        });
    });
});




});
});


