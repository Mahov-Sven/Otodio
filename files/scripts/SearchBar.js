class SearchBar {
	
	static toggle(){
		$("#PAGE_SEARCH_TITLE").trigger("click");
	}
	
    static search(list, stringFunc, query) {
    	// return the list if query or list is blank
    	if (list === undefined) return [];
    	// begin search
    	const result = [];
    	const testReg = new RegExp(query, "i");
        for (const element of list) {
        	if (testReg.test(stringFunc(element))) {
        		result.push(element);
        	}
        }

        return result;
    }
    
    static searchElement(result, onClickFunc, name, img){
    	const elem = $("<div>");
    	elem.addClass("SearchResult");
    	elem.css("background-image", `url("${img}")`);
    	elem.click((event) => {onClickFunc(event, result)});
    	
    	const title = $("<div>");
    	title.text(name);
    	title.addClass("SearchResultTitle");
    	
    	elem.append(title);
    	
    	return elem;
    }
    
    static setup(searchCollection, onClickFunc, getNameFunc, getImageFunc){
    	$("#PAGE_SEARCH_BAR").on("keyup", doSearch);
    	$("#PAGE_SEARCH_TITLE").on("click", doSearch);
    	
    	function doSearch(){
    		$("#PAGE_SEARCH_RESULTS").empty();
    		const query = $("#PAGE_SEARCH_BAR").val();
    		const results = SearchBar.search(searchCollection, getNameFunc, query);
    		for(const result of results){
    			$("#PAGE_SEARCH_RESULTS").append(SearchBar.searchElement(result, onClickFunc, getNameFunc(result), getImageFunc(result)));
    		}
    	}
    }
}