import { modal } from './../modal/modal'

const mapLinks = [
	document.querySelector('.footer__map-link'),
	document.querySelector('.contacts__map-link')
];

for(let i = 0; i < mapLinks.length; i++) {
	
	if(mapLinks[i] != null) {
		mapLinks[i].onclick = (e) => {
			modal.start('.map')
		}
	}
}


