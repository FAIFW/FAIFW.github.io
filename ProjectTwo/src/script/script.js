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


function calc(){
	let typeSite = document.getElementById('#typeSiteSelector');
	let design = document.getElementById('#designSelector');
	let adaptiv = document.getElementById('#adaptivSelector');
	let price = 0;
	price += parseInt(typeSiteSelector.options[typeSiteSelector.selectedIndex].value) + 
	parseInt(designSelector.options[designSelector.selectedIndex].value) + 
	parseInt(adaptivSelector.options[adaptivSelector.selectedIndex].value);
	let time = 0;
	time += parseInt(typeSiteSelector.options[typeSiteSelector.selectedIndex].dataset) + 
		parseInt(designSelector.options[designSelector.selectedIndex].dataset) + 
		parseInt(adaptivSelector.options[adaptivSelector.selectedIndex].dataset);



console.log(price);
console.log(time);
}























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