console.objStr = function(obj) {
	console.log(JSON.stringify(obj, null, "    "));
}

class IllegalArgumentException extends Error {
	constructor(...params) {
		super(...params);

		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, IllegalArgumentException);
		}
	}
}

class Util {
	/**
	 * Given a list, this function will iterate over its contents
	 * in order and execute asyncFunc on each one. The function 
	 * will receive 3 arguments:
	 * element - This list element
	 * index - The index of the given element
	 * execFunc - The function which will be executed on each member to process them
	 * 		-This function will be given both the element and index arguments
	 * 
	 */
	static syncListProcess(list, asyncFunc, processFunc, callback) {
		const testCounter = Util.syncCounter(list.length, callback);
		for (let i in list) {
			asyncFunc(list[i], i, function(/* arguments */) {
				processFunc(...arguments);
				testCounter(arguments);
			});
		}
	}

	static syncCounter(count, callback) {
		return function(callbackArgs) {
			if (--count === 0) {
				callback(...callbackArgs);
			}
		}
	}
}