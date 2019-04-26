/*document.getElementsByClassName("btn").addEventListener("click",() => {
	document.getElementsByClassName("header")[0].innerHTML = "1";
}); */

var liczba = 0; /*zmienna globalna*/
var liczba2 = 0;
var div = document.getElementById("zero");
var dzialanie;

$(".btn").click(function(event) { 


	console.log("you clicked:" , this.innerHTML);

	if(!(isNaN(parseInt(this.innerHTML)))) {

	if (div.innerHTML == "0") {
		div.innerHTML = this.innerHTML;
	}

	else {
		 div.innerHTML = div.innerHTML + this.innerHTML;
	}


	liczba2=div.innerHTML;

	console.log("Liczba is equal to: ", liczba)
	console.log("Liczba2 is equal to: ", liczba2)
}

} )


document.getElementById("addition").addEventListener("click", function() {
	console.log(div.innerHTML)
	liczba=parseInt(div.innerHTML)
	dzialanie = "+";
	div.innerHTML = "0"

} )

document.getElementById("substraction").addEventListener("click", function() {
	console.log(div.innerHTML)
	liczba=parseInt(div.innerHTML)
	dzialanie = "-";
	div.innerHTML = "0"

} )

document.getElementById("division").addEventListener("click", function() {
	console.log(div.innerHTML)
	liczba=parseInt(div.innerHTML)
	dzialanie = "/";
	div.innerHTML = "0"

} )

document.getElementById("percent").addEventListener("click", function() {
	console.log(div.innerHTML)
	liczba=parseInt(div.innerHTML)
	dzialanie = "%";
	div.innerHTML = "0"

} )

document.getElementById("multiplication").addEventListener("click", function() {
	console.log(div.innerHTML)
	liczba=parseInt(div.innerHTML)
	dzialanie = "x";
	div.innerHTML = "0"

} )

document.getElementById("equals").addEventListener("click", function() {
  	if (dzialanie == "+") {

	div.innerHTML = parseInt(liczba) + parseInt(liczba2);

}

	else if (dzialanie == "-") {

	div.innerHTML = parseInt(liczba) - parseInt(liczba2);


}

	else if (dzialanie == "/") {

		div.innerHTML = parseInt(liczba) / parseInt(liczba2);

}

	else if (dzialanie == "%") {

		div.innerHTML = (parseInt(liczba)/100) * parseInt(liczba2);
	}

	else if (dzialanie == "x") {

		div.innerHTML = parseInt(liczba)*parseInt(liczba2);
	}

} )

document.getElementById("AC").addEventListener("click", function() {

	div.innerHTML = 0;

} )


