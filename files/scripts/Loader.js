const HTML_FILE_EXTENSION = "html";

class Loader{
	
	static insertIntoPage(id, elem){
		const parent = document.getElementById(id).appendChild(elem);
	}
	
	static loadIntoPage(id, html){
		document.getElementById(id).insertAdjacentHTML('beforeend', html);
	}
	
	static loadFile(fileLocation, callback){
		$.get(fileLocation, function(file){
			callback(file);
		});
	}
	
	static loadJavaScriptIntoPage(id, fileLocation, callback){
		const script = document.createElement("script");
		/* Internet Explorer */
		if (script.readyState) {
			script.onreadystatechange = function() {
				if (script.readyState === "loaded" || script.readyState === "complete") {
					script.onreadystatechange = null;
					callback();
				}
			};
		/* Other Browsers */
		} else {
			script.onload = function() {
				callback();
			};
		}
		script.src = fileLocation;
		Loader.insertIntoPage(id, script);
	}
	
	static loadHTML(fileLocation, callback){
		this.loadFile(`${fileLocation}.${HTML_FILE_EXTENSION}`, function(html){
			callback(html);
		});
	}
}