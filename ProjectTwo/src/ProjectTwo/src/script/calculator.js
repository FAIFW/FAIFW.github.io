"use strict"

let typeSite;
let design;
let adaptability;
let priceOne = 1000;
let priceTwo = 1000;
let priceThree = 1000;
let cost;


alert("How are you all doing this lovely morning?");

alert("Would you like to get your own website?");

//if is it posible use it like that (page 379 from testScript);


alert("What type of website would you like?");
typeSite = prompt("1 - Landing , 2 - Business, 3 - Other, 4 - We are serious company");
	while (!/^[1-4]+$/.test(typeSite)){
    alert("You did not enter a number or put unavailable number");
    typeSite = prompt("Please, enter a number between 1 and 4");
}
	if (typeSite == 1){
		alert("It is cost 1000");
		priceOne = 1000;
	} 
	if (typeSite == 2){
		alert("It is cost 2000");
		priceOne = 2000;
	}
	if (typeSite == 3){
		alert("It is cost 3000");
		priceOne = 3000;
	}
	if (typeSite == 4){
		alert("It is cost 4000");
		priceOne = 4000;
	}

console.log(priceOne);


alert("What design do you prefer?");
design = prompt("1 - this is sparta , 2 - as cheaper as possible , 3 - we have 300$ only , 4 - Better , 5 - The Best");
	while (!/^[1-5]+$/.test(design)){
    alert("You did not enter a number or put unavailable number.");
    design = prompt("Please, enter a number between 1 and 5");
}
	if (design == 1){
		alert("It is cost 1000");
		priceTwo = 1000;
	} 
	if (design == 2){
		alert("It is cost 2000");
		priceTwo = 2000;
	}
	if (design == 3){
		alert("It is cost 3000");
		priceTwo = 3000;
	}
	if (design == 4){
		alert("It is cost 4000");
		priceTwo = 4000;
	}
	if (design == 5){
		alert("It is cost 5000");
		priceTwo = 5000;
	}

console.log(priceTwo);



alert("What type of adaptability do you need?");

adaptability = prompt("1 - abacus , 2 - Mobile , 3 - computer");
	while (!/^[1-3]+$/.test(adaptability)) {
    alert("You did not enter a number or put unavailable number.");
    adaptability = prompt("Please, enter a number between 1 and 3");
}
	if (adaptability == 1){
		alert("It is cost 1000");
		priceThree = 1000;
	} 
	if (adaptability == 2){
		alert("It is cost 2000");
		priceThree = 2000;
	}
	if (adaptability == 3){
		alert("It is cost 3000");
		priceThree = 3000;
	}
	
console.log(priceThree);


cost = priceOne + priceTwo + priceThree

confirm("Your website costs " + cost + ". Please confirm your order and we getting start");