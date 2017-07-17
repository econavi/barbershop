function Popup(options) {
	this.modal = document.querySelector(options.modal);
	this.overlay = document.querySelector(options.overlay);
	this.closeBtn = document.querySelector(options.closeBtn);

	var popup = this;

	this.open = function() {
		popup.modal.classList.add('modal_open');
	}

	this.close = function() {
		popup.modal.classList.remove('modal_open');
	}

	this.overlay.onclick = popup.close;
	this.closeBtn.onclick = popup.close;
}

function modalWindow() {
	var modal = new Popup({
		modal: '.modal',
		overlay: '.modal__blur',
		closeBtn: '.modal__close-btn'
	});

	document.querySelector('.user-block__sign-in').onclick = function() {
		modal.open();
	}
}

modalWindow();