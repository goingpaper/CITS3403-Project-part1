window.onload = function() {
	var foot = document.getElementById("footer");
	var text = foot.innerHTML;
	text += "    : this page was last modified on: "+document.lastModified+ "";
	foot.innerHTML=text;


}