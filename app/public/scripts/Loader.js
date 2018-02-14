const HTML_FILE_EXTENSION = "html";

class Loader{
	
	static loadIntoPage(id, html){
		document.getElementById(id).insertAdjacentHTML('beforeend', html);
	}
	
	static loadFile(fileLocation, callback){
		$.get(fileLocation, function(file){
			callback(file);
		});
	}
	
	static loadHTML(fileLocation, callback){
		this.loadFile(`${fileLocation}.${HTML_FILE_EXTENSION}`, function(html){
			callback(html);
		});
	}
}