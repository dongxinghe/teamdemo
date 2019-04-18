var asideLeft=document.getElementById("asideLeft");
var all=document.getElementById("all");
var asideOne=document.getElementsByClassName("aside_one")[0];
var close=document.getElementsByClassName("close")[0];
var box_zzc=document.getElementById("box_zzc");
var body=document.getElementsByTagName("body")[0];
//var rtside= document.getElementsByClassName("right-menu")[0];
asideLeft.onclick=function(){
	asideOne.style.marginLeft="0px";
	asideLeft.style.display="none";
	all.style.marginLeft="320px";
	close.style.display="block";
	document.body.classList.add("yc");
	box_zzc.style.display="block";
//	rtside.style.marginRight="-320px";
}
close.onclick=function(){
	asideOne.style.marginLeft="-320px";
	asideLeft.style.display="block";
	all.style.marginLeft="0px";
	close.style.display="none";
	document.body.classList.remove("yc");
	box_zzc.style.display="none";
//	rtside.style.marginRight="0px";
}

//zzc点击时,禁止滚轮事件

