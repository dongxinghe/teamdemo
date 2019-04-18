(function(){
	let rt_aside = document.getElementById("yinru_rt_aside");
	let link = document.createElement("link");
		link.rel="stylesheet";
		link.href = "css/rt_aside.css";
		document.head.appendChild(link);
		rt_aside.innerHTML = `
			<div class="contact-form">
				<form id="contact-form_i" class=" contact-form_i" action="">
				<div class="title">YOUR REQUEST</div>
					<div class="row">
						<input placeholder="YOUR NAME" name="" type="text" maxlength="100" />
					</div>
					<div class="row">
						<input placeholder="YOUR PHONE" name="" type="text" />
					</div>
					<div class="row">
						<textarea placeholder="THE ESSENCE OF THE DESIGN PROJECT" name=""></textarea>
					</div>
					<div class="row captcha">
						<img id="yzm" src="imageLogo/yzm.png" alt="" />
						<input name="" type="text" />
					</div>
					<div class="row">
						<a class="btn" id="send" href="#">SEND</a>
					</div>
				</form>
				<div class="close_btn"></div>
			</div>`;
	let	sr_btn = document.getElementsByClassName("sr_btn")[0];
	let contact_form = document.getElementsByClassName("contact-form")[0];
	let close_btn = document.getElementsByClassName("close_btn")[0];
	//let close = document.getElementsByClassName("close")[0];
	sr_btn.onclick = function(e){
		e.preventDefault();
		contact_form.classList.add("active");
		contact_form.classList.remove("unactive");
		close_btn.style.display = "block";
		//close.style.display = "none";
		box.style.display = "block";
		box.style.zIndex = "999"
	}
	close_btn.onclick = function(e){
		e.preventDefault();
		contact_form.classList.remove("active");
		contact_form.classList.add("unactive");
		close_btn.style.display = "none";
		box.style.display = "none";
	}
	var zzcIndex=document.querySelector(".zzc");
	zzcIndex.addEventListener("click",function(){
		contact_form.classList.remove("active");
		contact_form.classList.add("unactive");
		close_btn.style.display = "none";
		box.style.display = "none";
	})
})()	