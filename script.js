$(document).ready(function($) {
	if (navigator.userAgent.search("Edge") >= 0) {
    	manageNoSupport();
	}
	else if(navigator.userAgent.search("MSIE") >= 0){
		manageNoSupport();
	}
});
function manageNoSupport(){
	//regex to get new hyper link for support page
	var page = window.location.pathname.replace(/^.*[\\\/]/, '');
	var lastDir = window.location.pathname.replace(page,"");
	var redirect = lastDir+"no-support";
	window.location.replace(redirect);
	
}