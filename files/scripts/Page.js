class Page {
	
	/**
	 * Loads a page as a fragment given the fragment's title
	 */
	static load(title) {
		Page.pageReady = undefined;
		Page.clearTools();
		document.getElementById(Page.pageID).innerHTML = "";

		const loc = "files/fragments/" + title + '/' + title;
		Loader.loadFile(loc + ".css", function(fileCSS) {
			Loader.loadIntoPage(Page.pageID, "<style>" + fileCSS + "</style>");

			Loader.loadFile(loc + ".html", function(html) {
				Loader.loadIntoPage(Page.pageID, html);

				Loader.loadJavaScriptIntoPage(Page.pageID, loc + ".js", function() {
					if (typeof Page.pageReady === "function") Page.pageReady();
				});
			});
		});
	}
	
	/**
	 * Removes all tools from the page's toolbar.
	 */
	static clearTools() {
		document.getElementById(Page.pageToolsID).innerHTML = "";
	}
	
	/**
	 * Adds a tool to the page's toolbar.<br>
	 * <br>
	 * @param imgSrc The image path for the tool<br>
	 * @param tooltip The tooltip for the tool. Must be text<br>
	 * @param eventsObj An object containing the names of JQuery events with values equal to their event handlers. e.g. {"click":() => {console.log("Hello World");}}
	 */
	static addTool(imgSrc, tooltip, eventsObj) {
		const elem = $("<div>");
		elem.addClass("TooltipContainer");
		const tooltipElem = $("<div>");
		tooltipElem.addClass("TooltipBase");
		tooltipElem.addClass("TooltipDown");
		tooltipElem.text(tooltip);
		const buttonElem = $("<div>");
		buttonElem.addClass("PageTool");
		buttonElem.css("background-image", "url(\"" + imgSrc + "\")");
		
		
		Object.keys(eventsObj).forEach((key, index) => {
			buttonElem.on(key, eventsObj[key]);
		});
		
		elem.append(buttonElem);
		elem.append(tooltipElem);
		$(`#${Page.pageToolsID}`).append(elem);
	}
}

/* Page Static Variables */

/**
 * Function called when a fragment is loaded
 */
Page.pageReady = undefined;

/**
 * The HTML ID of the section where a page's tools can be.
 */
Page.pageToolsID = "PAGE_TOOLS";

/**
 * The HTML ID of the div to contain the page
 */
Page.pageID = "PAGE_CONTENT";
