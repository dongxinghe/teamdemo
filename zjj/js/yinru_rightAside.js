(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="../css/rightAside.css";
	document.head.appendChild(link);
	var yinru_rightAside=document.getElementById("yinru_rightAside");
	yinru_rightAside.innerHTML=`<div class="right_aside">
									<div class="right_aside_image">
										<img src="../images/logo.jpg">
										<div class="text">ANDREY SOKRUTA</div>
									</div>
									
										<i></i>
									</div>
								</div>`;
	var script=document.createElement("script");
	script.src="../js/rightAside.js";
	document.body.appendChild(script);
})()