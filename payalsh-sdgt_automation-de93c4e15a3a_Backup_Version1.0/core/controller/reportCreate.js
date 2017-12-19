var fs=require('fs'),
path = require('path');
function getReportData(uniqueModuleSet)
{
    console.log(uniqueModuleSet);
}

function reportCreate(resultsArray,modulesArray)
{
    // console.log("In createTable"+resultsArray["testid"]);
    var htmlModuleTable=createModulewiseTable(modulesArray);
    var htmlTable=createTable(resultsArray);


    //console.log("html table string:"+htmlTable);
    var htmlCode="<html><head></head><body><h2 align='center' style='background:#2E86C1; height:30px; padding-top:10px; padding-bottom:10px; color:#FDFEFE; text-align:center; font-size: 25px;'>EMR Automation Report</h2><h3 style='background:#AED6F1; height:15px; padding:10px; color:#2C3E50; text-align:left; font-size: 20px;'>Summary</h3><table width='40%' cellspacing='2' cellpadding='2' border='0' align='left' bgcolor='#999999'><tbody><tr bgcolor='#ffffff'><td>Date</td><td>10-Jul-2017</td></tr><tr bgcolor='#ffffff'><td>Author</td><td>Payal Shastrakar</td></tr><tr bgcolor='#ffffff'><td>Release Date</td><td>1-September-2017</td></tr><tr bgcolor='#ffffff'><td>Version</td><td>NA</td></tr></tbody></table><br><br><br><br><br><br><h3 style='background:#AED6F1; height:15px; padding:10px; color:#2C3E50; text-align:left; font-size: 20px;'>Charts</h3><h3>Modulewise Testcase Result</h3><img src='chart.png' style='padding:30px;'><h3>Modulewise Testcase Count</h3><img src='pie.png' style='padding:30px;'><br><br><br><h3 style='background:#AED6F1; height:15px; padding:10px; color:#2C3E50; text-align:left; font-size: 20px;'>Test Results</h3><table width='99%' cellspacing='2' cellpadding='2' border='0' align='left' bgcolor='#999999' style='margin: 1%'><thead><tr bgcolor='#ffffff'><th>Modules</th><th>PassPercentage</th><th>FailPercentage</th></tr></thead><tbody>"+htmlModuleTable+"</tbody></table><br><br><br><table width='99%' cellspacing='2' cellpadding='2' border='0' align='left' bgcolor='#999999' style='margin: 1%'><thead><tr bgcolor='#ffffff'><th>ID</th><th>Description</th><th>Module</th><th>Severity</th><th>Result</th><th>FailureReason</th></tr></thead><tbody>"+htmlTable+"</tbody></table><br><br><br><br><br></body></html>"
    //var htmlCode="<html><head></head><body><h2 align='center' style='background:#2E86C1; height:30px; padding-top:10px; padding-bottom:10px; color:#FDFEFE; text-align:center; font-size: 25px;'>EMR Automation Report</h2><h3 style='background:#AED6F1; height:15px; padding:10px; color:#2C3E50; text-align:left; font-size: 20px;'>Summary</h3><table width='40%' cellspacing='2' cellpadding='2' border='0' align='left' bgcolor='#999999'><tbody><tr bgcolor='#ffffff'><td>Date</td><td>14-AUG-2017</td></tr><tr bgcolor='#ffffff'><td>Author</td><td>Payal Shastrakar</td></tr><tr bgcolor='#ffffff'><td>Release Date</td><td>14-May-2014</td></tr><tr bgcolor='#ffffff'><td>Version</td><td>NA</td></tr></tbody></table><br><br><br><br><br><br><h3 style='background:#AED6F1; height:15px; padding:10px; color:#2C3E50; text-align:left; font-size: 20px;'>Charts</h3><h3>Modulewise Testcase Result</h3><img src='chart.png' style='padding:30px;'><h3>Modulewise Testcase Count</h3><img src='pie.png' style='padding:30px;'><br><br><br><h3 style='background:#AED6F1; height:15px; padding:10px; color:#2C3E50; text-align:left; font-size: 20px;'>Test Results</h3><table width='100%' cellspacing='2' cellpadding='2' border='0' align='left' bgcolor='#999999'><thead><tr bgcolor='#ffffff'><th>ID</th><th>Description</th><th>Module</th><th>Severity</th><th>Result</th><th>FailureReason</th></tr></thead><tbody>"+htmlTable+"</tbody></table><br><br><br><br><br></body></html>"
    fs.writeFileSync(path.join(__dirname,'./../../reports/','report.html'),htmlCode,function(err){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Report created.");
        }
    });
}
function createTable(resultsArray)
{
    // console.log("In createTable"+resultsArray["testid"]);
    console.log("count"+resultsArray.length);
    var htmlTable="";
    for(var i=0;i<resultsArray.length;i++)
    {
        var id=resultsArray[i]['id'];
        var name=resultsArray[i]['name'];
        var module=resultsArray[i]['module'];
        var result=resultsArray[i]['result'];
        var severity=resultsArray[i]['severity'];
        var error = resultsArray[i]['error'];
        //console.log(id+","+name+","+module+","+result);
        htmlTable=htmlTable+"<tr bgcolor='#ffffff'><td style='border:10px;'>"+id+"</td><td>"+name+"</td><td>"+module+"</td><td>"+severity+"</td><td>"+result+"</td><td>"+error+"</td></tr>"
    }
    return htmlTable;
}


function createModulewiseTable(modulesArray)
{
   
    console.log("count"+modulesArray.length);
    var htmlModuleTable="";
    for(var i=0;i<modulesArray.length;i++)
    {
        // var id=resultsArray[i]['id'];
        // var name=resultsArray[i]['name'];
        var module=modulesArray[i]['module'];
        var passCount=modulesArray[i]['passCount'];
        var failCount=modulesArray[i]['failCount'];
        var totalCount = passCount+failCount;
        var passPercentage= Math.round((passCount/totalCount)*100);
        var failPercentage= Math.round((failCount/totalCount)*100);
        //console.log(id+","+name+","+module+","+result);
        htmlModuleTable=htmlModuleTable+"<tr bgcolor='#ffffff'><td style='border:10px;'>"+module+"</td><td>"+passPercentage+"</td><td>"+failPercentage+"</td></tr>"
    }
    return htmlModuleTable;
}


module.exports.reportCreate = reportCreate;
module.exports.getReportData = getReportData;




