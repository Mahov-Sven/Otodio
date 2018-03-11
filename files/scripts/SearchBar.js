class SearchBar {
    static search(query, list) {
    	// return the list if query or list is blank
    	if (query.length === 0 || list === []) {
    		return list;
    	}
    	
    	// begin search
    	const result = [];
        for (const element of list) {
        	if (element.toString().match(new RegExp(query, "i"))) {
        		result.push(element);
        	}
        }

        return result;
    }
}