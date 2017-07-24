// получаем ссылку с href из адресной строки
var elem = document.querySelectorAll('.main-menu__link');
let path = window.location.pathname;

for(var i = 0; i < elem.length; i++) {

	let hrefElem = elem[i].getAttribute('href');

	// такая проверка нужна для сайта с портфолио
	if( (hrefElem === path) || (hrefElem === `..${path}`) || (hrefElem === `../..${path}`) ) {
		elem[i].classList.add('main-menu__link_active');
	}

}


