document.querySelector('#menuBtn').addEventListener('click', function (e){
	e.preventDefault();
	document.querySelector('#menuBody').classList.toggle('show');
})