(function(){
	var link=document.createElement("link");
	link.rel="stylesheet";
	link.href="css/aside.css";
	document.head.appendChild(link);
	var yinru_aside=document.getElementById("yinru_aside");
	yinru_aside.innerHTML=`<div class="aside_one">
			<div class="aside_one_arvin">
				<h2>MENU</h2>
				<p></p>
				<ul>
					<li><a href="../cmz/index.html">HOME</a></li>
					<li><a href="#" class="hover">ABOUT US</a></li>
					<li><a href="../zjj/html/products.html">PROJECTS</a></li>
					<li><a href="../wjw/html/service-and-price.html">SERVICES AND PRICES</a></li>
					<li><a href="../flc/html/calculator.html">CALCULATOR</a></li>
					<li><a href="../hhf/html/partners.html">PARTNERS</a></li>
					<li><a href="../404.html">BLOG</a></li>
					<li><a href="../flc/html/team.html">TEAM</a></li>
					<li><a href="../wjw/html/Construction consulting.html">ARVHITECTURAL CONSULTATION</a></li>
				</ul> 
			</div>
			<div class="close">
				<p></p>
			</div>
			<div class="white-bgcolor-btn">
				<p></p>
			</div>
		   </div>`;
	// var script=document.createElement("script");
	//script.src="../js/aside.js";
	 //document.body.appendChild(script);

	 let concealCoverLeft = document.querySelector(".conceal-cover-left");
	 let closeBtn = document.querySelector(".close"); 
	 let body = document.querySelector("body");
	 let asideOne = document.querySelector(".aside_one");
	 let whiteBgcolorBtn = document.querySelector(".white-bgcolor-btn");
	
	 closeBtn.onclick = function () {
		body.setAttribute("style",`margin-left:320px;transition:all .5s linear`);
		asideOne.setAttribute("style",`margin-left:0;transition:all .5s linear`);
		concealCoverLeft.setAttribute("style",`opacity:1`);
		closeBtn.setAttribute("style",`display:none;z-index:999`);
		whiteBgcolorBtn.setAttribute("style",`display:block`);
	 }
	 concealCoverLeft.onclick = function(){
		body.setAttribute("style",`transition:all .5s linear`);
		asideOne.setAttribute("style",`margin-left:-320px;transition:all .5s linear;z-index:888`);
		concealCoverLeft.setAttribute("style",`opacity:0`);
		whiteBgcolorBtn.setAttribute("style",`display:none;z-index:0`);
		closeBtn.setAttribute("style",`display:block`);
	 }
	 whiteBgcolorBtn.onclick = function(){
		body.setAttribute("style",`transition:all .5s linear`);
		asideOne.setAttribute("style",`margin-left:-320px;transition:all .5s linear;z-index:888`);
		concealCoverLeft.setAttribute("style",`opacity:0`);
		whiteBgcolorBtn.setAttribute("style",`display:none;z-index:0`);
		closeBtn.setAttribute("style",`display:block`);
	 }
})()