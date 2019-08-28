var spans = document.querySelectorAll("span");
var lis = document.querySelectorAll(".baselist>li>ul>li");
var change1 = document.querySelector("header>ul>.change1");
var change2 = document.querySelector("header>ul>.change2");
var mts = document.querySelectorAll(".mainTop");

for (var i = 0; i < spans.length; i++) {
	spans[i].onclick = function() {
		for (var i = 0; i < spans.length; i++) {
			spans[i].parentNode.className = "closed";
			spans[i].nextElementSibling.className = "hide";
		}
		this.parentNode.className = "open";
		this.nextElementSibling.className = "show";
		change1.innerHTML = this.innerHTML + ">";
	}
}

for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = function() {
		for (var i = 0; i < lis.length; i++) {
			lis[i].className = "";
		}
		this.className = "active";
		change2.innerHTML = this.innerHTML;

		num = this.getAttribute("num");
		for (var j = 0; j < mts.length; j++) {
			mts[j].className = "mainTop";
		}
		mts[num].className = "mainTop active";
	}
}
//滚动轮播部分
var bts=document.querySelectorAll(".dbox>button");
var box=document.querySelector(".box");
			var index=0;
			var arr=["images/pp2.png","images/pp3.png","images/pp5.png","images/pp6.png","images/pp7.png","images/pp8.png","images/pp9.png"];
bts[1].onclick=function(){
	index++;
	if (index==5) {
		index=0;
	}
	box.style.marginLeft=index*(-273)+"px";
}

bts[0].onclick=function(){
	index--;
	if (index==-1) {
		index=4;
	}
	box.style.marginLeft=index*(-273)+"px";
}
			
			
var imgs=document.querySelectorAll(".main_rig .mainBot img");
var mo=document.querySelector(".modal");
var mo_img=document.querySelector(".modal>div>img");
var but=document.querySelector(".modal>div>button");
for (var i=0;i<imgs.length;i++) {
	imgs[i].onclick=function(){
		mo.style.display="block";
		mo_img.src=this.src;
	}
}
but.onclick=function(){
	mo.style.display="none";
}
mo.onclick=function(){
	mo.style.display="none";
}
//开启定时器
var time=setInterval(function(){
	bts[1].onclick()
},2000);
//停止定时器
box.onmousemove=function(){
	clearInterval(time)
}
box.onmouseout=function(){
	time=setInterval(function(){
		bts[1].onclick()
	},2000);
}
