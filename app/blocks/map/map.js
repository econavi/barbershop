import { modal } from './../modal/modal'

const mapLink = document.querySelector('.footer__map-link');

mapLink.onclick = (e) => {
	modal.start('.map')
}