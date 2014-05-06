function check(){
	var doc = document.forms["login"];
	var name = doc["username"].value;
	var pass = doc["password"].value;

	if(name=="" || name==null || pass=="" || pass==null){
		alert("Incorrect Information");
		return false;
	}
	else{
		
	}

}