window.onload = function() {
    var html = 'Followers of User<table>';
	var i=0;

	while(i<15){
		html+= '<tr><td><a href="user.html">User' + i + '</a></td></tr>';
		i++;
	}
	 

	html += '</table>';
	document.getElementById('followerslist').innerHTML = html;
}

