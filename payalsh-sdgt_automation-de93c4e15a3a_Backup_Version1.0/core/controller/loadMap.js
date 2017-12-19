var map;
var elementHandlerMap;
var jsFileMap;

function loadMap() {

	var DynRequire = require('dyn-require');
	var appRoot = require('app-root-path');

	var jsonModules = new DynRequire(appRoot + '/repo/caselet');
	var jsonArray = jsonModules.requireAll();

	var handlerModules = new DynRequire(appRoot + '/core/element-handler');
	var handlerArray = handlerModules.requireAll();

	var jsFiles = new DynRequire(appRoot + '/repo/test-cases');
	var jsFileArray = jsFiles.requireAll();

	var Map = require("collections/map");
	map = new Map();

	for (var i = 0; i < jsonArray.length; i++) {
		map.set(jsonArray[i].name, jsonArray[i]);
	}

	elementHandlerMap = new Map();
	for (var j = 0; j < handlerArray.length; j++) {
		elementHandlerMap.set(handlerArray[j].type, handlerArray[j]);
	}


	jsFileMap = new Map();

	// var jsjsonfileMap = jsonMap.get("jsFileMapping");

	// for (var k = 0; k < jsjsonfileMap.steps.length; k++) {
	// 	jsFileMap.set(jsjsonfileMap.steps[k].jsonFile, jsjsonfileMap.steps[k].jsFile);
	// }

	for(var k = 0 ; k < jsFileArray.length ; k++){
			jsFileMap.set(jsFileArray[k].name, jsFileArray[k]);
	}
	
	var mapArray = {
		map,
		elementHandlerMap,
		jsFileMap
	};

	return mapArray;

}

module.exports.loadMap = loadMap;
