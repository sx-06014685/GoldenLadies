var divs=document.querySelectorAll(".mainN div");
var jie=document.querySelectorAll(".jie");
var p=document.querySelectorAll(".main .main_tit>div>p");
console.log(p)
for (var i=0;i<divs.length;i++) {	
	divs[i].onclick=function(){
		for (var i=0;i<divs.length;i++) {
			divs[i].firstElementChild.className="";
			divs[i].lastElementChild.innerHTML="+";
		}
		this.lastElementChild.innerHTML="-";
		this.firstElementChild.className="active";
		
		
		var j=this.getAttribute("dy");
		console.log(this.getAttribute("dy"));
		for (var i=0;i<divs.length;i++) {
			jie[i].className="jie";
			p[i].className="";
		}
		jie[j].className="jie active";
		p[j].className="active"
	}
}



