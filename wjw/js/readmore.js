(function(){
var btn=document.getElementById("vip-btn");
var vipcon=document.getElementById("vip-content");
btn.onclick=function(){
	if(vipcon.style.height=="180px"){
		vipcon.style.height="100%";
		btn.querySelector("span").innerHTML="CLOSE";
	}else{
		vipcon.style.height="180px";
		btn.querySelector("span").innerHTML="to read more";
	}
}
})()