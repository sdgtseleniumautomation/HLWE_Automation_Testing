var TestCaseUtility = function() {
	TestCaseUtility.rowCount;

	this.getTableRowCount = function(locatorValue) {

		element.all(by.repeater(locatorValue)).count().then(function(count) {
			console.log('TestCaseUtility-row count', TestCaseUtility.rowCount);
			console.log('TestCaseUtility-count', count);
			TestCaseUtility.rowCount = count;
		}).catch(function(error) {
			console.log(error.message);
			throw error;
		});

	}

	this.getRowCountValue = function() {
		return TestCaseUtility.rowCount;
	}
}

module.exports = new TestCaseUtility();