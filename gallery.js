

window.onload = function() {
    var html = 'Gallery of User<table>';
	var i=0;

	while(i<15){
		html+= '<tr><td><a href="photo.html">Photo' + i + '</a></td><td><img src="http://openclipart.org/people/dpbbm/176-Free-Cartoon-Owl-Clipart.svg" height="42" width="42"></td></tr>';
		i++;
	}
	 

	html += '</table>';
	document.getElementById('photolist').innerHTML = html;

	var foot = document.getElementById("footer");
	var text = foot.innerHTML;
	text += " :  this page last modified on: "+document.lastModified+ "";
	foot.innerHTML=text;

}