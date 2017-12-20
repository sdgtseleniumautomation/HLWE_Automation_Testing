
exports.config = 
{

directconnect: true,

  
capabilities: 
{'browserName': 'chrome'}
,

  
framework: 'jasmine',

  
specs: ['example1.js'],

  
jasmineNodeOpts: {
defaultTimeoutInterval: 300000
}


};
