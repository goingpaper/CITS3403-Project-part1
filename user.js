window.onload = function() {



	var insert="Sample Gallery";
	var photodiv ="<div style=\"background-color:#FFC673;\"><a href=\"photo.html\"><img src=\"http://openclipart.org/people/dpbbm/176-Free-Cartoon-Owl-Clipart.svg\" alt=\"\" width=\"50\"></a></div>"

	for(var i=0;i<9;i++){
		var thisdiv="<div class=photos>";
		for(var j=0;j<10;j++){
			thisdiv+=photodiv;
		}
		thisdiv+="</div>"
		insert+=thisdiv;
	}

	document.getElementById("sample").innerHTML=insert;

	var foot = document.getElementById("footer");
	var text = foot.innerHTML;
	text += "    : this page was last modified on: "+document.lastModified+ "";
	foot.innerHTML=text;

}