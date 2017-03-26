
var getFlvUrl = function(source, keyword){
	// find .flv
	var endWord = keyword;
	var endPtr = source.indexOf(endWord);
	console.log("endPtr = %d", endPtr);
	
	if( endPtr == -1 ){
		return "";
	}
	
	var startIdx = source.lastIndexOf("http://", endPtr);
	var len = endWord.length;
	
	console.log("idx = %d, %d, %d", startIdx, endPtr,  len );
	return source.substring(startIdx, endPtr + len  );
}

var insertString = function(source, msg, keyword){
	var idx = source.indexOf(keyword) + keyword.length;
	var front = source.substring(0, idx);
	var back =  source.substring(idx, source.length);
	
	return front + msg + back;
}

var getUrl = function(source, msg, keyword){
	
	var url;
	url = getFlvUrl(source, ".flv");
	if(url!=0){
		return url;
	}
	
	url = getFlvUrl(source, ".mp4");
	if(url!=0){
		return url;
	}
	return "Error";
}


var url = getUrl(document.body.innerHTML); 
console.log("res = %s", url);

var insert = "<P><a href=" + url + ">" + url + "</a><P>";
var html = insertString(document.body.innerHTML, insert, "點擊");
document.body.innerHTML = html;