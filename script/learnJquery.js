//Ask by class:
//$('.titleSecond').css("border", "2px solid");

/*событие прогрузки страницы
$(document).ready(function(){
	$('.titleSecond + p').css("border", "2px solid", red);
});
*/


//события клика
$('.navMenu').click(function(){
	$(this).toggleClass("red");
//	alert("its work")
});
