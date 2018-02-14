console.objStr = function(obj){
	console.log(JSON.stringify(obj, null, "    "));
}

class IllegalArgumentException extends Error{
	constructor(...params){
		super(...params);
		
		if (Error.captureStackTrace){
			Error.captureStackTrace(this, IllegalArgumentException);
		}
	}
}

class Util {
	static syncListProcess(list, asyncFunc, processFunc, callback){
		const testCounter = Util.syncCounter(list.length, callback);
		for(let i in list){
			asyncFunc(list[i], function(){
				process(...arguments);
				testCounter(arguments);
			}, i);
		}
	}
	
	static syncCounter(count, callback){
		return function(callbackArgs){
			if(--count === 0){
				callback(...callbackArgs);
			}
		}
	}
}