const path = window.location.pathname;
const links = document.querySelectorAll('.main-menu__link');

for(let i = 0; i < links.length; i++) {

	const link = links[i];
	var href = link.getAttribute('href');
	const linkPageLev1 = href.indexOf('..');
	const linkPageLev2 = href.indexOf('../..');
	const gitHubPagesPath = path.indexOf('catalog/barbershop');

	if(linkPageLev1 != -1) {
		href = href.substring(2);
	}
	else if(linkPageLev2 != -1) {
		href = href.substring(5);
	}

	if(gitHubPagesPath != -1) {
		href = gitHubPagesPath + href;
	}

	if(href === path) {
		links[i].classList.add('main-menu__link_active');
	}

}
