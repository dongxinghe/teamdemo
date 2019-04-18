(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="../css/aside.css";
	document.head.appendChild(link);
	var yinru_aside=document.getElementById("yinru_aside");
	yinru_aside.innerHTML=`<div class="aside_one">
			<div class="aside_one_arvin">
				<h2>MENU</h2>
				<p><img src="../images/line.jpg" alt=""></p>
				<ul>
					<li><a href="../../cmz/index.html">HOME</a></li>
					<li><a href="../../lb/about_us.html" class="hover">ABOUT US</a></li>
					<li><a href="../../zjj/html/products.html">PROJECTS</a></li>
					<li><a href="../../wjw/html/service-and-price.html">SERVICES AND PRICES</a></li>
					<li><a href="../../flc/html/calculator.html">CALCULATOR</a></li>
					<li><a href="#">PARTNERS</a></li>
					<li><a href="../../404.html">BLOG</a></li>
					<li><a href="../../flc/html/team.html">TEAM</a></li>
					<li><a href="../../wjw/html/Construction consulting.html">ARVHITECTURAL CONSULTATION</a></li>
				</ul> 
			</div>
			<div class="close">
				<p></p>
			</div>
		   </div>`;
	// var script=document.createElement("script");
	//script.src="../js/aside.js";
	 //document.body.appendChild(script);
})()