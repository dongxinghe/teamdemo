(function(){
	let rt_aside = document.getElementById("yinru_rt_aside");
	let link = document.createElement("link");
	link.rel="stylesheet";
	link.href = "../css/rt_aside.css";
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
	<canvas id="yzm" width="100" height="40"></canvas>
	<input name="" type="text" id="yzmvalue" />
	</div>
	<div class="row">
	<a class="btn" id="send" href="#">SEND</a>
	</div>
	</form>
	<div class="close_btn"></div>
	</div>`;
	let	sr_btn = document.getElementById("selection-btn");
	let contact_form = document.getElementsByClassName("contact-form")[0];
	let close_btn = document.getElementsByClassName("close_btn")[0];
	let box = document.getElementById("bgzzc");
	//页面底部sendrequest按钮点击效果
	sr_btn.onclick = function(e){
		e.preventDefault();
		contact_form.classList.add("active");
		contact_form.classList.remove("away");
		close_btn.style.display = "block";
		box.style.display = "block";
		box.style.zIndex = "998"
	};
	function same(){
		contact_form.classList.remove("active");
		contact_form.classList.add("away");
		close_btn.style.display = "none";
		box.style.display = "none";
	}
	//右侧栏 close按钮点击效果
	close_btn.onclick = function(e){
		e.preventDefault();
		same();
	};
box.addEventListener("click",function(){
	same();
})
	var code = "";
function createCode(){
//	验证码
	var c = document.getElementById("yzm");
	var ctx = c.getContext("2d");
	//1. 创建两个函数 rn  返回指定范围内的随机数
//                      rc 返回指定范围内颜色
	//random number  返回指定范围的随机数
	function rn(min,max){
		var n = Math.random()*(max-min)+min;
		return Math.floor(n);
	}
	//random color  返回指定范围的随机数
	function rc(min,max){
		var r = rn(min,max);
		var g = rn(min,max);
		var b = rn(min,max);
		return `rgb(${r},${g},${b})`;
	}
	//2.创建两个变量保存验证码宽度和高度 120 30
	var w = 100;
	var h = 40;
	//3.修改画布的高度和宽度
	c.width = w;
	c.height = h;
	//4.获取画布和画笔对象
	//5.填充背景颜色(浅)180 230
	ctx.fillStyle = rc(0,40);
	ctx.fillRect(0,0,w,h);
	//6.创建字符串池
	var str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	//创建循环4次,4个验证码
	for(var i=0;i<4;i++){
		//8.获取其中一个随机数
		var s = str[rn(0,str.length)];
		//9.随机字体大小
		var fs = rn(16,24);
		ctx.font = fs+"px SimHei";
		//10.随机旋转角度
		var deg = rn(-45,45);
		//11.随机填充颜色
		ctx.fillStyle = rc(220,255);
		//12.设置基线
		ctx.textBaseline = "top";
		//13.保存状态
		ctx.save();
		//14.平移原点
		ctx.translate(25*i+5,15);
		//15旋转
		ctx.rotate(deg*Math.PI/180)
		//16.绘制当前字符
		ctx.fillText(s,0,0);
		//17.恢复画笔状态
		ctx.restore();
		//小圆点
		for(var d=1;d<100;d++){
			var x = Math.random()*200;
			var y = Math.random()*100;
			var n = Math.random();
			ctx.beginPath();
			ctx.arc(x,y,n,w,h);
			ctx.fillStyle = rc(0,255);
			ctx.fill();
		}
		code += s;
	}
}
	createCode();
	//	验证码前端验证
 	var sendbtn = document.getElementById("send");
 	sendbtn.onclick = function(){//验证验证码输入是否正确
 		var val1 = document.getElementById("yzmvalue").value;
 		var val2 = code;
  		if(val1 != val2){
 			alert("验证码错误!");
 			document.getElementById('yzmvalue').value="";
			createCode();
 		}
 	}

	//	点击验证码图片,刷新
	var yzm = document.getElementById('yzm');
	yzm.onclick = function(){
		createCode();
	}
})()