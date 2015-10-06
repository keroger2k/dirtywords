
var dirtyWords = $('#dirty-word-text'),
    startingInt = $('#starting-integer'),
    outputContainer = $('#output-container'),
    executionLabel = $('#execution-time');

$('#btn-create').on('click', function(e) {

	var rawInput = dirtyWords.val();
	var dirtyWordsArray = rawInput.split(',');
	var startInt = parseInt(startingInt.val());
	var vdom = $('#vdom-name').val();

	var start = new Date().getTime();

	outputContainer.empty();
	if(dirtyWordsArray[0] !== "") {
		outputContainer.append('config vdom<br/>');	
		outputContainer.append('edit ' + vdom + '<br/>');	
		outputContainer.append('&nbsp;&nbsp;config dlp sensor<br/>');	
		outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;edit "xmpp"<br/>');	
		outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config filter<br/>');	
	
		dirtyWordsArray.forEach(function(entry) {
			if(entry.indexOf("//") > -1) {
				entry = entry.replace('//', '\\/\\/');
			}
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;edit ' + startInt++ +'<br/>');	
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;set name "xmpp-ban-word"<br/>');	
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;set proto xmpp<br/>');	
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;set filter-by regexp<br/>');	
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;set regex "' + entry + '/i"<br/>');	
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp&nbsp;&nbsp;&nbsp;&nbsp;set action block<br/>');	
			outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;next<br/>');	//end item
		});
	
		outputContainer.append('&nbsp;&nbsp;&nbsp;&nbsp;end<br/>');	//end config filter
		outputContainer.append('end<br/>');	
		
		outputContainer.fadeOut(0).fadeIn(500);
	}

	var end = new Date().getTime();
	var time = end - start;

	executionLabel.text("Execution time: " + time + "ms");

});