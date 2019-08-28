var divs=document.querySelectorAll(".mainN div");
var mainR=document.querySelectorAll(".main_rig");
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
			mainR[i].className="main_rig";
			p[i].className="";
		}
		mainR[j].className="main_rig active";
		p[j].className="active"
	}
}