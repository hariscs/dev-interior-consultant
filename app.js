const btn = document.querySelector('.mobile-menu');

const list = document.querySelector('.navbar-list');

function toggle() {
	list.classList.toggle('active');
}

btn.addEventListener('click', toggle);
