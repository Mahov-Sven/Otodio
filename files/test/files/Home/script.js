function fragmentReady(){
	console.log("HI");/*
	Loader.loadFile("files/Home/headings/headings.txt", function(file){
		const sections = [];
		const lines = file.split('\n');
		for(const line of lines){
			const info = line.split(':');
			const id = info[0];
			const title = info[1];
			const section = {};
			section.id = id;
			section.title = title;
			section.content = null;
			section.added = false;
			sections.push(section);
		}
		let loadedIndex = -1;
		Util.syncListProcess(sections, 
			function(section, index, callback){
				Loader.loadFile(section.title + ".html", function(file){
					callback(file, index);
				});
			}, 
			function(file, index){
				sections[index].content = file;
				if(loadedIndex + 1 == index){
					let j = index;
					while(j < sections.length && sections[j].content != null){
						
						addSection(sections[j]);
						
						j++;
					}
				}
			},
			function(){
				let j = loadedIndex + 1;
				while(j < sections.length && sections[j].content != null){
					
					addSection(sections[j]);
					
					j++;
				}
			});
	});*/
}

function addSection(section){
	const html = `<div id="HEADING_${section.id}" class="Heading">${section.title}</div>
	<div class="Line"></div>
	<div class="Spacer"></div>
	${section.content}
	<div class="Spacer"></div>
	<a class="LinkTop" href="">To Top</a>
	<div class="Spacer"></div>
	<div class="Spacer"></div>`
	
	Loader.loadIntoPage("PAGE", html);
}

fragmentReady();