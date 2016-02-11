var getFlvUrl = function(source){
	// find .flv
	var endWord = ".flv";
	var endPtr = source.indexOf(endWord);
	var startIdx = source.lastIndexOf("http://", endPtr);
	var len = endWord.length;
	return source.substring(startIdx, endPtr + len  );
}

var insertString = function(source, msg, keyword){
	var idx = source.indexOf(keyword) + keyword.length;
	var front = source.substring(0, idx);
	var back =  source.substring(idx, source.length);
	return front + msg + back;
}

var url = getFlvUrl(document.body.innerHTML); 
var insert = "<P><a href=" + url + ">" + url + "</a><P>";
var html = insertString(document.body.innerHTML, insert, "點擊");
document.body.innerHTML = html;
