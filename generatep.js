

window.onload = function() {
    var html = 'Gallery of User<table>';
	var i=0;

	while(i<15){
		html+= '<tr><td><a href="photo.html">Photo' + i + '</a></td><td><img src="Koala.jpg" height="42" width="42"></td></tr>';
		i++;
	}
	 

	html += '</table>';
	document.getElementById('photolist').innerHTML = html;
}