document.querySelector('#catalog-button').addEventListener('click', function (e){
	e.preventDefault();
	document.querySelector('#catalog-button').classList.toggle('show');
	document.querySelector('#navbar-burger-desk').classList.toggle('is-active');
})

document.querySelector('#navbar-collapse-burger').addEventListener('click', function (e){
	e.preventDefault();
	document.querySelector('#site').classList.toggle('overflow');
	document.querySelector('#navigation__collapse').classList.toggle('show');
	document.querySelector('#navbar-collapse-burger').classList.toggle('show');
	document.querySelector('#navbar-burger-mob').classList.toggle('is-active');
	document.querySelector('#collapse-burger__intro').classList.toggle('togle-menu');
})