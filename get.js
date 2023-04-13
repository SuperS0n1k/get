
	function getCookies() {
		var cookies = document.cookie.split(';');
		var ret = '';
		for(var i = 1; i <= cookies.length; i++) {
			ret += i + ' - ' + cookies[i - 1] + "<br>";
		}
		return ret;
	}

	function gfg_Run() {
		alert(getCookies());
	}
