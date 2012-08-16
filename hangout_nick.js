
window.onload = function(){
	
console.log("hello world");

var ps = document.getElementsByTagName("p");

var rep = ['"'];


for(var i = 0; i < ps.length; i++){
	console.log(ps[i].innerHTML)

	var str = ps[i].innerHTML; 

	for(var j = 0; j < rep.length; j++){
		console.log(str.indexOf(rep[j]))
		str.replace(rep[j], '<span>' + rep[j] + '</span>');
	}
}

}





