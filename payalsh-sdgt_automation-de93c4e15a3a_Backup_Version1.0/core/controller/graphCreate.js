var fs = require('fs');
var jsdom = require('jsdom/lib/old-api.js');
var path = require('path');
function createChart(moduleResults)
{
	console.log("In create Graph"+JSON.stringify(moduleResults));
	jsdom.defaultDocumentFeatures = {
	    FetchExternalResources: ["script"],
	    ProcessExternalResources: true
	};
	jsdom.env('<html><body><script type="text/javascript"></script><div id="chart-div" style="font-size:12; width:1600px; height:1600px;"><canvas id="myChart" width="800" height="800" style="width:800px;height:600px"></canvas><canvas id="myChart2" width="500" height="500" style="width:500px; height:500px;"></canvas></div></body></html>',
  ['https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.js'],
	function (err, window) 
	{
		console.log("In the main function");
	    global.window = window;
	    global.document = window.document;
	    // Comes from the Chart.js link above just like <script src="...
	    global.Chart = window.Chart;
	    var canvas = document.getElementById('myChart');
	    var canvas2 = document.getElementById('myChart2');
	    var ctx = canvas.getContext('2d');
	    var ctx2 = canvas2.getContext('2d');
	    var moduleArray=[];
	    var passArray =[];
	    var failArray = [];
	    var modulewiseTestcases = [];
	    var total = 0;
	    var pieceLabel = require('chart.pieceLabel.js');
	  	//console.log(JSON.stringify(moduleResults));
	    //moduleResults=[{"module":"Vitals","passCount":1,"failCount":2},{"module":"Surgery","passCount":1,"failCount":0},{"module":"Authentication","passCount":1,"failCount":0}]
	  
	    for(var i=0;i<moduleResults.length;i++)
	    {
	    	var ele=moduleResults[i];
	    	//console.log(ele.module);
	    	moduleArray.push(ele.module);
	    	passArray.push(ele.passCount);
	    	failArray.push(ele.failCount);
	    	total=ele.passCount+ele.failCount;
	    	//console.log("Total Testcases for Module "+ele.module+"is "+total);
	    	modulewiseTestcases.push(total);
	    	console.log(modulewiseTestcases);
	    }
	    console.log(modulewiseTestcases);
	    var myChart = new Chart(ctx, 
	    {
	        type: 'bar',
	        data: {
	            labels: moduleArray,
	            datasets: [{
	                label: 'testcases failed',
	                data: failArray,
	                backgroundColor: ['rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)','rgba(255, 99, 132, 1)'],
	                borderColor: [],
	                borderWidth: 1
	            }                   
	            ,
	            {
	                label: 'testcases passed',
	                data: passArray,
	                backgroundColor: ['rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)','rgba(0, 255, 255, 1)'],
	                borderColor: [],
	                borderWidth: 1
	            }]
	        },
	        options: {
	            responsive: false,
	            animation: false,
	            width: 400,
	            height: 400,
	            scales: {
	                yAxes: [{
	                    ticks: {
	                        beginAtZero:true
	                    }
	                }]
	            }
	        }
	    });
	    var myChart2 = new Chart(ctx2, 
	    {
	        type: 'pie',
	        data: {
	            labels: moduleArray,
	            datasets: [{
	                data: modulewiseTestcases,
                     
	                backgroundColor: [
	                    "#FF6384",
	                    "#36A2EB",
	                    "#FFCE56",
	                    "#ff0000",
	                    "#80ff00",
	                    "#4000ff",
	                    "#00ff00",
	                    "#ffff00",
	                    "#0080ff",
	                    "#ff4000",
	                    "#ff00ff",
	                    "#bf00ff",
	                    "#80ff00",
	                    "#808080",
	                    "#ffb3b3",
	                    "#80ff00"
	                ]
	            }],

	            

	        },
	        options: {
					responsive: false,
					animation: false,
					width: 400,
					height: 400,
					legend: {
						display: true
						// labels: {
						// 	generateLabels: {}
						// }
					},
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: false
							}
						}]
					},
					pieceLabel: {
						// mode 'label', 'value' or 'percentage', default is 'percentage'
						mode: 'percentage',

						// precision for percentage, default is 0
						precision: 0,

						// font size, default is defaultFontSize
						fontSize: 12,

						// font color, default is '#fff'
						fontColor: '#ffffff',

						// font style, default is defaultFontStyle
						fontStyle: 'normal',

						// font family, default is defaultFontFamily
						fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

						// draw text in arc, default is false
						arc: true,

						// draw text on the border, default is false
						position: 'default',

						// format text, work when mode is 'value'
						format: function(value) {
							return '$' + value;
						}
					}
				}
	    });
		canvas.toBlob(function(blob) 
		{
			
		    var fs = require('fs'),
		   // __dirname="";
		    //out = fs.createWriteStream("D:/test automation/reports/chart.png");
		     out = fs.createWriteStream(path.join(__dirname, './../../reports/', 'chart.png'));
		    out.write(jsdom.blobToBuffer(blob));
		}, "image/png");
		canvas2.toBlob(function(blob) 
		{
		    var fs = require('fs'),
		    //_dirname="";
		    out = fs.createWriteStream(path.join(__dirname, './../../reports/', 'pie.png'));
		    //filepath=path.join(__dirname,"/reports/pie.png");
		    //console.log('filepath'+ filepath);
		    out.write(jsdom.blobToBuffer(blob));
		}, "image/png");
		});
	
}
module.exports.createChart = createChart; 