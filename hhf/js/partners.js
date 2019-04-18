//左侧边栏,主菜单
    let asideOne = document.getElementsByClassName("aside_one")[0];
    let btn = document.getElementById("open_menu");
    let close = document.getElementsByClassName("close")[0];
    let partner = document.getElementsByClassName("partner")[0];
    let box = document.getElementsByClassName("box")[0];
	let rtAside = document.getElementsByClassName("rt_aside")[0];
    //禁用菜单栏中当前页面按钮
    document.querySelector(".aside_one_arvin>ul>li:nth-child(6)>a").className = "disabledA";
btn.onclick = function(){
    //asideOne.style.marginLeft = "0";
	asideOne.classList.add("active");
	asideOne.classList.remove("disabled");
        btn.style.display = "none";
        close.style.display = "block";
        partner.style.marginLeft = "320px";
        box.style.display = "block";
    }
	function common(){
		asideOne.classList.remove("active");
	   asideOne.classList.add("disabled");
        btn.style.display = "block";
        close.style.display = "none";
        partner.style.marginLeft = "0";
        box.style.display = "none";
		rtAside.style.marginLeft = "0";
	}
close.onclick = function(){
	   common();
    }
box.addEventListener("click",function(){
	common();
})

