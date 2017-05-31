$(function(){
	$("li").eq(3).mouseover(function(){
		$("li").eq(3).css("background-color","#fff");
		$("li a").eq(3).css("color","#000");
		$(".li-nav1").slideDown(100);
	})
	$("li").eq(3).mouseout(function(){
		$("li").eq(3).css("background-color","#000");
		$("li a").eq(3).css("color","#ccbeb8");
		$(".li-nav1").css("display","none");
	})
	$(".li-nav1").mouseover(function(){
		$(".li-nav1").css("display","block");
	})
	$(".li-nav1").mouseout(function(){
		$(".li-nav1").css("display","none");
	})
	$(".li-nav1-bot-box1").mouseover(function(){
		$(".li-nav1-bot-box1").css({background:"#332e2e",color:"#fff"});
		$(".li-nav1-bot-box2").css({background:"#fff",color:"#000"});
		$(".li-nav1-top img").attr("src","img/QRcode_wbapp.png");
		
	})
	$(".li-nav1-bot-box2").mouseover(function(){
		$(".li-nav1-bot-box1").css({background:"#fff",color:"#000"});
		$(".li-nav1-bot-box2").css({background:"#332e2e",color:"#fff"});
		$(".li-nav1-top img").attr("src","img/3.png");
	})
	$("li").eq(5).mouseover(function(){
		$("li").eq(5).css("background-color","#fff");
		$("li a").eq(5).css("color","#000");
		$(".li-nav2").slideDown(100);
	})
	$("li").eq(5).mouseout(function(){
		$("li").eq(5).css("background-color","#000");
		$("li a").eq(5).css("color","#ccbeb8");
		$(".li-nav2").css("display","none");
	})
	$(".li-nav2").mouseover(function(){
		$(".li-nav2").css("display","block");
	})
	$(".li-nav2").mouseout(function(){
		$(".li-nav2").css("display","none");
	})
}
)
