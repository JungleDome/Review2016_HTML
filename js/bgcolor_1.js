
	function redirect() {
		if(typeof(Storage) !== "undefined") {
			if (sessionStorage.rgba) {
				sessionStorage.rgba = getComputedStyle(document.getElementsByClassName('tab')[0]).backgroundColor;
			} else {
				sessionStorage.rgba = getComputedStyle(document.getElementsByClassName('tab')[0]).backgroundColor;
			}
		} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
		}
	}
/*
	if (window.addEventListener) // W3C standard
	{
	  window.addEventListener('onload', check, false); // NB **not** 'onload'
	  window.addEventListener('DOMContentLoaded', check, false); 
	}
	else if (window.attachEvent) // Microsoft
	{
	  window.attachEvent('onload', check);
	}
	*/
	window.onload = function (e) {
		if(typeof(Storage) !== "undefined") {
			if (sessionStorage.rgba) {
				var a = document.getElementsByClassName('tab')[0].style.backgroundColor;
				document.getElementsByClassName('tab')[0].style.setProperty("background-color",sessionStorage.rgba,"important");
				document.getElementsByTagName('footer')[0].style.setProperty("background-color",sessionStorage.rgba,"important");

				console.log("a");
				setTimeout(function () {
				document.getElementsByClassName('tab')[0].style.transition = "background-color 1s ease-out";
				document.getElementsByTagName('footer')[0].style.transition = "background-color 1s ease-out";
				document.getElementsByClassName('tab')[0].style.setProperty("background-color",a,"important");
				document.getElementsByTagName('footer')[0].style.setProperty("background-color",a,"important");
				},(100));
			}
		} else {
			consoloe.log("Sorry, your browser does not support web storage...");
		}
	};
