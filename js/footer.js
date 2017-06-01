$(function(){
	$(".box2-right-d1 li").eq(0).mouseover(function(){
		$(".box2-right-d1 li").eq(0).css({ background:"#666666"});
		$(".box2-right-d1 li a").eq(0).css("color","#fff");
		$(".box2-right-d1 li").eq(1).css({ background:"#dddddd"});
		$(".box2-right-d1 li a").eq(1).css("color","#666666");
		$(".box-right-img img").attr("src","img/146183215705134.png");
		$(".box2-right-d1 p").html("关注领取100元现金券");
		
	})
	$(".box2-right-d1 li").eq(1).mouseover(function(){
		$(".box2-right-d1 li").eq(1).css({ background:"#666666"});
		$(".box2-right-d1 li a").eq(1).css("color","#fff");
		$(".box2-right-d1 li").eq(0).css({ background:"#dddddd"});
		$(".box2-right-d1 li a").eq(0).css("color","#666666");
		$(".box-right-img img").attr("src","img/new_1.jpg");
		$(".box2-right-d1 p").html("全球买表      国内保修");
	})
	$(".box2-right-d2 li").eq(0).mouseover(function(){
		$(".box2-right-d2 li").eq(0).css({ background:"#666666"});
		$(".box2-right-d2 li a").eq(0).css("color","#fff");
		$(".box2-right-d2 li").eq(1).css({ background:"#dddddd"});
		$(".box2-right-d2 li a").eq(1).css("color","#666666");
		$(".box-right2-img img").attr("src","img/143234662480218.png");
		$(".box2-right-d2 p").html("每日推送手表干货文章");
		
	})
	$(".box2-right-d2 li").eq(1).mouseover(function(){
		$(".box2-right-d2 li").eq(1).css({ background:"#666666"});
		$(".box2-right-d2 li a").eq(1).css("color","#fff");
		$(".box2-right-d2 li").eq(0).css({ background:"#dddddd"});
		$(".box2-right-d2 li a").eq(0).css("color","#666666");
		$(".box-right2-img img").attr("src","img/new_1.jpg");
		$(".box2-right-d2 p").html("每周推送打折促销信息");
	})
})
