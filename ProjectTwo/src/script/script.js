"use strict"
$(document).ready(function(){
	$('.funnyButton').click(function(){
		$('.menuMobile').toggleClass("mobileMenuActive");
	});
});

$('a[href^="#').click(function(){
	let valHref = $(this).attr("href");
	$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

//animation loading after scroll
let options = {threshold: [0.9]}
let observer = new IntersectionObserver(onEntry, options);
let elements = $('.element-animation');
	elements.each((i,el) => {
		observer.observe(el);
	});

function onEntry(entry){
	entry.forEach(change => {
		if (change.isIntersecting){
			change.target.classList.add('show-animation');
		}
	});
}

//img-preloading

const lazyImages = document.querySelectorAll('img[data-src');
let windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];
if (lazyImages.length>0){
	lazyImages.forEach(img => {
		if (img.dataset.src){
			lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll(){
	if(document.querySelectorAll('img[data-src').length > 0){
		lazyScrollCheck();
	}
	lazyScrollCheck();
}

function lazyScrollCheck(){
	let imgIndex = lazyImagesPositions.findIndex(
		item => pageYOffset > item - windowHeight
		);
	if(imgIndex >=0){
		if(lazyImages[imgIndex].dataset.src){
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		}
	}delete lazyImagesPositions[imgIndex];
}

// automatic loading of modal window by timeout
function showStartModal(){
	if(localStorage.getItem('I wanna Cookie')!=1){ //функция для проверки If user has already said YES, we do not ask again
		setTimeout(function(){
		$('#discountForUser').modal('show');
		$('#wannaCookie').on('click', function(){ //функция для записи данных в Local storage
			//сохранить состояние: записать в локальное хранилище согласие пользователя
			localStorage.setItem('I wanna Cookie', 1);
		$('#discountForUser').modal('hide');
		})
	}, 30000);
}	
}

showStartModal();



	



let value1, value2, value3;
let term1, term2, term3;
let time;
let totalprice;

function typeSiteCounting(){
	let price = document.getElementById("#typeSiteSelector");
	value1 = typeSiteSelector.value;
	if (value1 == 'Landing'){
		value1 = 1000; 
		term1 = 1;
	} else if (value1 == 'Business card'){
		value1 = 2000;
		term1 = 2;
	} else if (value1 == 'Some other type'){
		value1 = 3000;
		term1 = 3;
	} else if (value1 == 'Because we are serious company'){
		value1 = 4000;
		term1 = 4;
	}
	console.log(value1, term1);
}












	/*
function designCounting(){
	let price = document.getElementById('#designSelector');
	value2 = designSelector.value;
	if (value2 == 'This is SPARTA'){
		value2 = 1000;
		term2 = 1;
	} else if (value2 == 'As cheaper as possible'){
		value2 = 2000;
		term2 = 2;
	} else if (value2 == 'We have 300 dollars, is it enough?'){
		value2 = 3000;
		term2 = 3;
	} else if (value2 == 'Better'){
		value2 = 4000;
		term2 = 4;
	} else if (value2 == 'The Best'){
		value2 = 5000;
		term2 = 5;
	}
}

function adaptivCounting(){
	let price = document.getElementById('#adaptivSelector');
	value3 = adaptivSelector.value;
	if (value3 == 'abacus'){
		value3 = 1000;
		term3 = 1;
	} else if (value3 == 'Mobile'){
		value3 = 2000;
		term3 = 2;
	} else if (value3 == 'PC'){
		value3 = 3000;
		term3 = 3;
	}
}
	
*/




	




	










/* i do not why it does not work
$(window).scroll(() => {
	let scrollDistance = $(window).scrollTop();

	$("section").each((i, el) => {

		if($(el).offset().top - $("PC-header").outerHeight() <= scrollDistance){
			$("PC-header a").each((i, el) => {
				if ($(el).hasClass("active")){
					$(el).removeClass("active");
				}
			});
			$('PC-header li:eq('+ i +')').find('a').addClass('active');
		}
	});
});
*/