var link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = "../css/footer.css";
	document.head.appendChild(link);
var foot = document.getElementsByTagName("footer")[0];
 foot.innerHTML += `<div id="footer">
	<div class="foot_lf">
		<span>
			2018. sokruta.com.ua 
			<br>
			interior design studio andrew sokruta
		</span>
	</div>
	<ul>
		<li>
			<b>T:</b>
			<span class="phone">
				+138 88 888 88 8
				<br>
				+138 66 666 66 6
			</span>
		</li>
		<li>
			<b>@:</b>
			<span>
				<a href="#">info@sokruta.com.ua</a>
			</span>
		</li>
	</ul>
		<a href="#" class="foot_ct">
			<i></i>
			like the site</a>
		<a href="#">G+</a>
		<a href="#" class="foot_rt">
			<sup>BY</sup>
			<span></span>
		</a>
	</div> ` ;


