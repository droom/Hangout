
window.onload = function(){
	
	var qAll = [];
	var qAll = $('blockquote').find('p');

	// var checkAgainst = "&#8220;";
	
	console.log("There are "+qAll.length+" quotation marks that need to be hanged")

	var n = String.fromCharCode(34);

	
	for(var i = 0; i < qAll.length; i++){
		//console.log([i])

		var allQuoteInner = qAll[i].innerHTML;
		var allQuoteOuter = qAll[i];
		
		//console.log(allQuoteInner);
		
		var qMark = allQuoteInner.slice(0,1);
		console.log(n)
		console.log(qMark);
		
		var p = qMark.charCode;
				console.log(p)

		if (qMark == n){
		
			console.log("yo yo yo");
		
			}
		 
		var qRem = allQuoteInner.slice(1,allQuoteInner.length);
		console.log(qRem);
		
		var qMark = "<p><span class=\"hangout\">&#8220;</span>";
		var qEnd = "</p>";
		var qHang = qMark+qRem+qEnd;

		$(allQuoteOuter).replaceWith(qHang)
	}

}