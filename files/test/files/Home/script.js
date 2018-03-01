function fragmentReady(){
	Loader.loadFile("files/Home/headings/headings.txt", function(file){
		const sections = [];
		const lines = file.split('\n');
		for(const line of lines){
			const info = line.split(':');
			if(info.length != 2) continue;
			const id = info[0];
			const title = info[1].trim();
			const section = {};
			section.id = id;
			section.title = title;
			section.content = null;
			sections.push(section);
		}
		let waitingIndex = 0;
		Util.syncListProcess(sections,
			/* Async Load Files */
			function(section, index, callback){
				Loader.loadFile("files/Home/headings/" + section.id + ".html", function(file){
					/* Callback to File process function */
					callback(file, index);
				});
			}, 
			/* File process function */
			function(file, index){
				sections[index].content = file;
				if(index == waitingIndex){
					while(waitingIndex < sections.length && sections[waitingIndex].content != null){
						addSection(sections[waitingIndex]);
						waitingIndex++;
					}
				}
			},
			/* Function called after all files are loaded */
			function(){
				/* Do Nothing */
			});
	});
}

function addSection(section){
	const html = `<div id="HEADING_${section.id}" class="Heading">${section.title}</div>
	<div class="Line"></div>
	<div class="Spacer"></div>
	${section.content}
	<div class="Spacer"></div>
	<a class="LinkTop" href="#WECLOME">To Top</a>
	<div class="Spacer"></div>
	<div class="Spacer"></div>`
	
	Loader.loadIntoPage("PAGE", html);
}