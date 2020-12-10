let currentWidth = innerWidth;
let menuCatalogButton = document.querySelector('.catalog-button__body');
menuCatalogButton.addEventListener('click', function (e){
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

// get all modal buttons
let modals = document.querySelectorAll(".call-review-modal");

if(modals){
	Array.from(modals).forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			console.log(el.dataset.reviewModal);
			document.querySelector(el.dataset.reviewModal).classList.add('show');
			
		})
	});
}
// callback

// let callbackBody = document.getElementById('callback');
// let iconCallBack = document.getElementById('call-callback');
// let closeCallbackButton = document.getElementById('close-callback');

// function showCallbackIcon() {
// 	iconCallBack.classList.add('show')
// }
// function showCallback() {
// 	callbackBody.classList.add("show")
// 	iconCallBack.classList.remove("show")
// }
// function closeCallback() {
// 	if (callback.classList.contains("show")) {
// 		callbackBody.classList.remove("show")
// 	}
// 	setTimeout(function(){
// 		showCallbackIcon()
// 	}, 3000)
// }

// setTimeout(function(){	
// 	if(iconCallBack){
// 		showCallbackIcon()
// 		iconCallBack.addEventListener("click", function(){
// 			showCallback()
// 			closeCallbackButton.addEventListener('click', function(){
// 				closeCallback()
// 			})
// 		})
// 	}
// }, 5000)

// Catalog toggle state 
let brandsList = document.getElementById("catalog-list-brands");
let sizesList = document.getElementById("catalog-list-sizes");

if( sizesList ){
	let sizesListAll = document.querySelectorAll('#catalog-list-sizes .catalog-list-all-sizes')
	let sizesListAnotherOne = document.querySelectorAll('#catalog-list-sizes .catalog-list-another-size')
	sizesListAll.forEach((el)=>{
		el.addEventListener("click", function(){
			sizesListAnotherOne.forEach((el)=>{
				el.checked = false;
			})
		})
	})
	
	sizesListAnotherOne.forEach((el)=>{
		el.addEventListener("click", function(){
			sizesListAll.forEach((el)=>{
				el.checked = false;
			})
		})
	})
}
if (brandsList){
	let brandsListAll = document.querySelectorAll('#catalog-list-brands .catalog-all-brands')
	let brandsListAnotherOne = document.querySelectorAll('#catalog-list-brands .catalog-one-of-brands')
	brandsListAll.forEach((el)=>{
		el.addEventListener("click", function(){
			brandsListAnotherOne.forEach((el)=>{
				el.checked = false;
			})
		})
	})
	
	brandsListAnotherOne.forEach((el)=>{
		el.addEventListener("click", function(){
			brandsListAll.forEach((el)=>{
				el.checked = false;
			})
		})
	})
}
// document.getElementById("checkbox").checked = false;
// close modal 
var modal = document.getElementById('modal');
var cross = document.getElementsByClassName('modal-cross');
let closeModalBtn = document.getElementsByClassName('close-modal-btn');


function closeModals(){
	document.querySelector('#modal').classList.remove('show', 'make-review','make-order', 'review', 'success', 'modal-ask-question');
	let modalVarss = document.querySelectorAll('.modal__var');
	Array.from(modalVarss).forEach((el) => {
		el.classList.remove('show');
	});
}
if (cross) {
	Array.from(cross).forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			closeModals();
		})
	});
};


window.onclick = function(event) {	
  	if (event.target == modal) {
		closeModals();
	}
	if (document.querySelector('#catalog-button').classList.contains('show')){
		if (event.target !== menuCatalogButton) {
			document.querySelector('#catalog-button').classList.toggle('show');
			document.querySelector('#navbar-burger-desk').classList.toggle('is-active');
		}
	}
}

// review 
let modalCallers = document.getElementsByClassName('call-review-modal');
if (modalCallers) {
	Array.from(modalCallers).forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelector('#modal').classList.add('show', 'review');
		})
	});
};


let makeReviewButtons = document.getElementsByClassName('call-make-review-modal');
if (makeReviewButtons) {
	Array.from(makeReviewButtons).forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelector('#modal').classList.add('show', 'make-review');
		})
	});
};

let makeOrderButtons = document.getElementsByClassName('call-make-order-modal');
if (makeOrderButtons) {
	Array.from(makeOrderButtons).forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelector('#modal').classList.add('show', 'make-order');
			document.querySelector('#product-name-input').value = e.target.dataset.productId
		})
	});
};
 
let askQuestionModal = document.getElementsByClassName('modal-ask-question');
if (askQuestionModal) {
	Array.from(askQuestionModal).forEach((el) => {
		el.addEventListener('click', (e) => {
			e.preventDefault();
			document.querySelector('#modal').classList.add('show', 'modal-ask-question');
		})
	});
};

document.getElementById("scroll-to-search").addEventListener("click", function(e){
	e.preventDefault();	
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
	setTimeout(focusSearch, 800)

	
	
})
function focusSearch() {
	document.getElementById("header-search").focus()
}