
exports.config = 
{

directconnect: true,

  
capabilities: 
{'browserName': 'chrome'}
,

  
framework: 'jasmine',

  
specs: ['Read_Data.js'],

  
jasmineNodeOpts: {
defaultTimeoutInterval: 300000
}


};
