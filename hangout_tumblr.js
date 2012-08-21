
window.onload = function(){
	
console.log("hello world");

var ps = document.getElementsByTagName("p");

var rep = ['&#8220;'];


for(var i = 0; i < ps.length; i++){
	var psInner = (ps[i].innerHTML)



	var psInnerSlice = psInner.slice(0,1);
	
		console.log(psInnerSlice)

	if (psInnerSlice == '“'){
		var quoteFound = psInnerSlice;
		console.log("FOUND "+quoteFound)
		
		psInner =  '<span class=\"hangout\">&#8220;</span>' + psInner.substr(1,psInner.length);
		
		//ps[i].className += ' hangout';

		ps[i].innerHTML = psInner;

		//uoteFound.document.write("<span class="hangout" )

	}




}

}





