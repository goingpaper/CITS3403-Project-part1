window.onload = function() {
    var html = 'Friends of User<table>';
	var i=0;

	while(i<15){
		html+= '<tr><td><a href="user.html">User' + i + '</a></td></tr>';
		i++;
	}
	 

	html += '</table>';
	document.getElementById('friendslist').innerHTML = html;

	var foot = document.getElementById("footer");
	var text = foot.innerHTML;
	text += " : this page last modified on: "+document.lastModified+ "";
	foot.innerHTML=text;

}