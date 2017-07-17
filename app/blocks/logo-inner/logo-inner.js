function hideInnerLogo() {
	var elem = document.querySelector('.logo-inner');
	
	if(window.location.pathname != '/') {
		elem.style.display = 'block';
	}
}

hideInnerLogo();

