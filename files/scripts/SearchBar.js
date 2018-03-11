class SearchBar {
    static search(query, list) {
    	// return the list if query or list is blank
    	if (query.length === 0 || list === []) {
    		return list;
    	}
    	
    	// begin search
    	const result = [];
    	query = query.toLowerCase();
        for (const element of list) {
        	if (element.toString().match(query).length > 0) {
        		result.push(element);
        	}
        }

        return result;
    }
}