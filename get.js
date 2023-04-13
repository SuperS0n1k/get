
	var el_up = document.getElementById("GFG_UP");
	var el_down = document.getElementById("GFG_DOWN");
	el_up.innerHTML = "Click on the button to "
	+ "get the stored cookies.";

	function getCookies() {
		var cookies = document.cookie.split(';');
		var ret = '';
		for(var i = 1; i <= cookies.length; i++) {
			ret += i + ' - ' + cookies[i - 1] + "<br>";
		}
		return ret;
	}

	function gfg_Run() {
		el_down.innerHTML = getCookies();
	}
