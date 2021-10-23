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



// calculator


function calc(){
	let typeSite = document.getElementById('#typeSiteSelector');
	let design = document.getElementById('#designSelector');
	let adaptiv = document.getElementById('#adaptivSelector');

	let price = 0;
	price += parseInt(typeSiteSelector.options[typeSiteSelector.selectedIndex].value) + 
	parseInt(designSelector.options[designSelector.selectedIndex].value) + 
	parseInt(adaptivSelector.options[adaptivSelector.selectedIndex].value);
	document.getElementById("priceResult").innerHTML = price;
	
	let time = 0;
	time += parseInt(typeSiteSelector.options[typeSiteSelector.selectedIndex].getAttribute('time')) + 
	parseInt(designSelector.options[designSelector.selectedIndex].getAttribute('time')) + 
	parseInt(adaptivSelector.options[adaptivSelector.selectedIndex].getAttribute('time'));
	document.getElementById("timeResult").innerHTML = time;
}
calc();




/*
	let time1 = typeSiteSelector.options[typeSiteSelector.selectedIndex].text;
	if (typeSiteSelector.options[typeSiteSelector.selectedIndex].text == 'Landing'){
		time +=1
		}else if (typeSiteSelector.options[typeSiteSelector.selectedIndex].text == 'Business card'){
			time +=2
		}else if (typeSiteSelector.options[typeSiteSelector.selectedIndex].text == 'Some other type'){
			time +=3
		}else if (typeSiteSelector.options[typeSiteSelector.selectedIndex].text == 'Because we are serious company'){
			time +=4
		}
	let time2 = designSelector.options[designSelector.selectedIndex].text;
	if (designSelector.options[designSelector.selectedIndex].text == 'This is SPARTA'){
		time +=1
		}else if (designSelector.options[designSelector.selectedIndex].text == 'As cheaper as possible'){
			time +=2
		}else if (designSelector.options[designSelector.selectedIndex].text == 'We have 300 dollars, is it enough?'){
			time +=3
		}else if (designSelector.options[designSelector.selectedIndex].text == 'We have 300 dollars, is it enough?'){
			time +=4
		}else if (designSelector.options[designSelector.selectedIndex].text == 'Better'){
			time +=4
		}else if (designSelector.options[designSelector.selectedIndex].text == 'The Best'){
			time +=5
		}

	let time3 = adaptivSelector.options[adaptivSelector.selectedIndex].text;
	if (adaptivSelector.options[adaptivSelector.selectedIndex].text == 'abacus'){
		time +=1
		}else if (adaptivSelector.options[adaptivSelector.selectedIndex].text == 'Mobile'){
			time +=2
		}else if (adaptivSelector.options[adaptivSelector.selectedIndex].text == 'PC'){
			time +3
		}

time.innerHTML = time;



	





	let time = $("typeSiteSelector").attr("value");


	



	
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