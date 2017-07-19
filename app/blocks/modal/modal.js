function Popup(options) {
	this.modal = document.querySelector(options.modal);
	this.overlay = document.querySelector(options.overlay);
	this.closeBtn = document.querySelector(options.closeBtn);

	var popup = this;

	this.open = function(elem) {
		popup.modal.classList.add('modal_open');
		document.querySelector(elem).style.display = 'block'
	}

	this.close = function() {
		popup.modal.classList.remove('modal_open');
	}

	this.overlay.onclick = popup.close;
	this.closeBtn.onclick = popup.close;
}

var modal = new Popup({
	modal: '.modal',
	overlay: '.modal__blur',
	closeBtn: '.modal__close-btn'
});

function goToModal(trigger, elem) {
	document.querySelector(trigger).onclick = function() {
		modal.open(elem);
	}
}

export { goToModal };
