	function myfunc(){
			var x = document.getElementById("menu1");
			if(x.className === 'navbar1'){
				x.className = x.className + " resp";
			}else{
				x.className = 'navbar1';
			}
