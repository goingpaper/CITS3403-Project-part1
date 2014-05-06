function check(){

	var doc = document.forms["comment"];
	var comment = doc["this_comment"].value;

	if(comment==null||comment==""){
		alert("incorrect information");
		return false;
	}
	return true;
}