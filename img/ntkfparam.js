var wb_ntkf={url:"{$chat}chat/chatClient/chatbox.jsp?vid=$vidEx&companyID=8965&configID=",config:{query:10,service:11},info:"",remark:"",remarkSet:{},companyID:8965,scriptDone:{}};
function ntkf_url(){wb_ntkf.cookie=function(c){for(var b=document.cookie.split(";"),a=0;a<b.length;a++){var d=b[a].split("=");if(d[0].replace(/(^\s*)|(\s*$)/g,"")==c)return decodeURI(d[1])}};var a=wb_ntkf.user_id=wb_ntkf.cookie("_uid"),d=wb_ntkf.user_uname=wb_ntkf.cookie("_uname_for_ntalker"),d=decodeURI(d),e=0;0<parseInt(a)?e=1:d=a="";var t=$("#goods_id").val(),q=$(".psm .osm p span").html(),r=$("#sum").html(),u=$("#order_amount").html(),b=$(".gdfw .gilw").length,h=$("#goods_list li").length,p=$(".goods_lists .goods_wrap .lists_units").length,
g=[],l=[],v=[];if(0!=h||0!=b)u;else if(0==b||0==h)u=0;0!=h?b=h:0!=p?b=p:b;for(var f=0;f<b;f++){var m=$(".gdfw .gilw").eq(f).attr("goods_id"),n=$(".glw table .gnw .num").eq(f).val();0!=h?(m=$("#goods_list li").eq(f).attr("goods_id"),n=$(".goods .opw .op .num").eq(f).val()):0!=p?(m=$(".goods_lists .goods_wrap .lists_units").eq(f).attr("goods_id"),n=$(".goods_lists .lists_wrap .lists_units .units_info").eq(f).children("p:eq(1)").html().substring(1)):(m,n);g.push(m);l.push(n)}for(b=0;b<g.length;b++)v.push({id:g[b],
count:l[b]});0<$("#search_area .s_result a[key=b]").length?(g=$("#search_area .s_result a[key=b]").children("b").html().indexOf("<"),g=$("#search_area .s_result a[key=b]").children("b").html().substring(0,g)):g=""!=$("#brand_urlname dd").html()?$.trim($("#brand_urlname dd").html()):"";if(0<$("#search_area .s_result a[key=ev]").length)for(l=$("#search_area .s_result a[key=ev]"),b=0;b<l.length;b++)var s=$("#search_area .s_result a[key=ev]").eq(b).children("b").html().indexOf("<"),s=$("#search_area .s_result a[key=ev]").eq(b).children("b").html().substring(0,
s);else s="全部"!=$.trim($("#crowd_id dd").html())?$.trim($("#crowd_id dd").html()):"";var c=window.location.href,l=/list/.test(c),b=/search/.test(c),h=/-watches/.test(c),p=/shoubiao/.test(c),f=/peijian/.test(c),m=/jewellery/.test(c),n=/tiaobiaoqi/.test(c),y=RegExp("-g"+t).test(c);if("undefined"==typeof cart_wbiao_cn)cart_wbiao_cn="";else{var k=cart_wbiao_cn;/https/.test(c)?k:k=cart_wbiao_cn.replace("https","http");var z=RegExp(k).test(c),A=RegExp(k+"pay").test(c),k=RegExp(k+"order").test(c),w=/success/.test(c)}var B=
/cart/.test(c),C=/order/.test(c),x=/order\/pay/.test(c);(c=/pay_method/.test(c))?(q=$(".pay_now_wrap p:eq(1) span").children("span").html(),r=$(".pay_now_wrap .this_amount em").html()):x&&(q=wb_orderid_m,r=wb_orderprice_m);w&&(q=$(".pyifw .ttl .odid .em").html(),r=$(".pyifw .ttl .pyam .em").html());NTKF_PARAM=l||b||h||p||f||m||n?{siteid:"kf_9516",settingid:"kf_9516_1480155083795",uid:a,uname:d,isvip:e,userlevel:"0",ntalkerparam:{category:s,brand:g}}:y?{siteid:"kf_9516",settingid:"kf_9516_1480155083795",
uid:a,uname:d,isvip:e,userlevel:"0",itemid:t,itemparam:t}:A||w||c||x?{siteid:"kf_9516",settingid:"kf_9516_1480155083795",uid:a,uname:d,isvip:e,userlevel:"0",orderid:q,orderprice:r}:k||C?{siteid:"kf_9516",settingid:"kf_9516_1480155083795",uid:a,uname:d,isvip:e,userlevel:"0",ntalkerparam:{items:v}}:z||B?{siteid:"kf_9516",settingid:"kf_9516_1480155083795",uid:a,uname:d,isvip:e,userlevel:"0",ntalkerparam:{cartprice:u,items:v}}:{siteid:"kf_9516",settingid:"kf_9516_1480155083795",uid:a,uname:d,isvip:e,
userlevel:"0"}}ntkf_url();function write_js(){var a=document.createElement("script");a.type="text/javascript";a.src="//dl.wbiao.com/js/xn6/ntkfstat.js?siteid=kf_9516";document.body.appendChild(a)}write_js();
function pc_add_ntkf(){var a=$.cookie("is_ws");1==parseInt(a)?$("body").find(".ntalk_icon,.pc_to_ntalk,.to_ntalk").click(function(){NTKF.im_openInPageChat("kf_9516_1491789413494")}):0==parseInt(a)?$("body").find(".ntalk_icon,.pc_to_ntalk,.to_ntalk").click(function(){NTKF.im_openInPageChat("kf_9516_1480155083795")}):$.ajax({async:!1,url:cps_wbiao_cn+"cps/get_cps_cookies",method:"post",cache:!1,data:{},type:"json",xhrFields:{withCredentials:!0},crossDomain:!0,success:function(a){var e=0;0==a.code&&
(a.data.cps_source_id&&1022102==a.data.cps_subsource_id?(e=1,$("body").find(".ntalk_icon,.pc_to_ntalk,.to_ntalk").click(function(){NTKF.im_openInPageChat("kf_9516_1491789413494")})):$("body").find(".ntalk_icon,.pc_to_ntalk,.to_ntalk").click(function(){NTKF.im_openInPageChat("kf_9516_1480155083795")}));$.cookie("is_ws",e)}});wb_ntkf.cookie("is_ws")||$("body").find(".ntalk_icon,.pc_to_ntalk,.to_ntalk").click(function(){NTKF.im_openInPageChat("kf_9516_1480155083795")});$("body").find(".bankcomm_to_ntalk").click(function(){NTKF.im_openInPageChat("kf_9516_1491029086488")});
$("body").find(".pc_to_ntalk_ser").click(function(){NTKF.im_openInPageChat("kf_9516_1480155110097")});wb_ntkf.cookie("CPSAPI")&&$(".goods_operate_wx,.m_cart .cart_summary_wx").removeClass("h").siblings(".goods_operate_m,.m_cart .cart_summary").addClass("h")}pc_add_ntkf();
