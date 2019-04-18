(function(){
var gotop = document.getElementsByClassName("gotop")[0];
gotop.onclick = function(){
	var top = document.documentElement.scrollTop;
	var timer=setInterval(function(){
		top-=50;
		if(top>0){
			window.scrollTo(0,top);
		}else{
			clearInterval(timer);
			window.scrollTo(0,top);
		}
	},20);
}
})()