//轮播
var arr=["images/banner1.png","images/banner2.png","images/banner3.png","images/banner4.png","images/banner6.png"]
var i=0;
$("section .circle:first").click(function(){
	if (!$(".banner img").is(":animated")) {
		i++;
		if (i==5) {
			i=0;
		}
		$(".banner").append( $(`<img class='rimg'  src="${arr[i]}">`));
		$(".banner img:last").animate({
			"left":"0%",
		},1000,function(){
			$(".banner img:eq(1)").remove();
		});
		$(".banner img:eq(1)").animate({
			"left":"-100%"
		},1000);
		$($("section ul li")[i]).addClass("active");
		$($("section ul li")[i]).siblings().removeClass()
	}	
});
$("section .circle:last").click(function(){
	if (!$(".banner img").is(":animated")) {
		i--;
		if (i==-1) {
			i=4;
		}	
		$(".banner").append( $(`<img class='limg' src="${arr[i]}">`));
		$(".banner img:last").animate({
			"left":"0%",
		},1000,function(){
			$(".banner img:eq(1)").remove();
		})
		$(".banner img:eq(1)").animate({
			"left":"100%"
		},1000);
		$($("section ul li")[i]).addClass("active");
		$($("section ul li")[i]).siblings().removeClass()
	}	
})
//绑定小点点击事件
$("section ul li").click(function(){
	if (!$(".banner img:first").is(":animated")){
		$(this).addClass("active");
		j=$("section ul .active").attr("dy");
		$(this).siblings().removeClass();
		i=$(this).attr("dy");
		if (i>j) {
			$(".banner").append( $(`<img class='rimg'  src="${arr[i]}">`));
			$(".banner img:last").animate({
				"left":"0%",
			},1000,function(){
				$(".banner img:eq(1)").remove();
			})
			$(".banner img:eq(1)").animate({
				"left":"-100%"
			},1000);
		} else{
			$(".banner").append( $(`<img class='limg' src="${arr[i]}">`));
			$(".banner img:last").animate({
				"left":"0%",
			},1000,function(){
				$(".banner img:eq(1)").remove();
			})
			$(".banner img:eq(1)").animate({
				"left":"100%"
			},1000);
		}
	}
});

//加入定时器
var time=setInterval(()=>{
	$("section .circle:first").click();
},2000);

$(".banner").mouseover(()=>{
	clearInterval(time)
});

$(".banner").mouseout(()=>{
	time=setInterval(()=>{
		$("section .circle:first").click();
	},2000);
})

//滚动监听
$(document).scroll(function(){
	var top=$(window).scrollTop();
	var elemTop=$(".place_pic").offset().top;
	var elemTop2=$(".choose").offset().top;
	if (top > parseInt( $(".nav").css("height"))){	
		console.log(1);
		$(".nav").css({
			"opacity":"1",
//			"top":"-100px",
			"position":"fixed",
			"z-index":"6",
//			"heigth":"-117px"
		},1000);
	}else if (top==0) {
		$(".nav").css({
//			"opacity":"0",
			"top":"0px",
			"position":"static",
			"z-index":"6",
//			"heigth":"-117px"
			
		},1000);
	}	
	
	//拍摄基地
	if (top>elemTop-screen.height/1.2 && top<elemTop+screen.height/1.3 ) {
		$(".place_pic").stop().animate({
			"opacity":"1",
			"top":"0px"
		},1000);
	}else{
		$(".place_pic").stop().animate({
			"opacity":"0",
			"top":"-80px"
		},1000);	
	}

	//选择摄影
	if (top>elemTop2-screen.height/1.2 && top<elemTop2+screen.height/1.3 ) {
		$(".choose").stop().animate({
			"opacity":"1",
			"top":"0px"
		},1000);
	}else{
		$(".choose").stop().animate({
			"opacity":"0",
			"top":"-80px"
		},1000);	
	}
	
	
})

