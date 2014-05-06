function check(){


	var doc=document.forms[0];
	var inputs = doc.getElementsByTagName('input');

	for(var i=0;i<inputs.length;i++){

		current = inputs[i];
		console.log(i+","+current.value);
		if(current.type=="submit"||current.type=="reset"){
			continue;
		}

		if(current.value=="" || current.value==null){
			alert("Incorrect Information");
			return false;
		}
	}
	return true;
}

$(document).ready(function() {
	$.ajax({
	  url: "dcountries.txt",
	})
	.done(function( data ) {
		// Newline seperated file
		// Australia\nAntarctica
		countrylist = data.split("\n");
		// Split into list of countries
		// Add to the page with the html code
		// <option value="name.lower()">name</option>

		for(var key in countrylist){
			$("#countries").append("<option value=\"" + countrylist[key].toLowerCase() + "\">"+ countrylist[key] +"</option>");
		}
	});
});