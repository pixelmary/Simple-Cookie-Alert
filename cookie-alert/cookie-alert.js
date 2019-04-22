/** 
 * Cookie alert in VANILLA JS
*/

var cookieAlert = document.querySelector('#cookie-alert');

document.addEventListener('click', function(event) { 
	
	if (!event.target.classList.contains('button-alert')) return;
	event.preventDefault();
	var cookieData = 'hide alert';
	localStorage.setItem('hideCookies',cookieData);

	cookieAlert.classList.remove('show');
 })

/** I get the localstorage value to check it on DOM loading*/
 	var cookieAdvice = 	localStorage.getItem('hideCookies');

document.addEventListener("DOMContentLoaded", function() {
	if(cookieAdvice){
		cookieAlert.classList.remove('show');
	} else {
		cookieAlert.classList.add('show');
	}
});
