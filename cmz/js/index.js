(function () {
    /*首页第一模块轮播图效果*/
    var bannerUl = document.querySelector("#banner>#image1");
    var bannerUl2 = document.querySelector("#banner ul:last-child");
    
    function banH() {
        for (var ban of bannerUl.children) {
            ban.style.height = window.innerHeight + "px";
        }
        for (var ban of bannerUl2.children) {
            ban.style.height = window.innerHeight + "px";
        }
        bannerUl.style.height = bannerUl.children.length * window.innerHeight + "px";
        bannerUl2.style.height = bannerUl.children.length * window.innerHeight + "px";

        bannerUl.style.width = "50%";
        var ban1H = 0;
        var ban2H = 0;
        var i = 0;
        clearInterval();
        var timer = setInterval(function () {
            i++;
            if (i >= bannerUl.children.length * 2 - 1) {
                i = 1;
            }
            if (i < bannerUl.children.length) {
                ban1H -= window.innerHeight;
                ban2H += window.innerHeight;
            } else if (i >= bannerUl.children.length - 1) {
                ban1H += window.innerHeight;
                ban2H -= window.innerHeight;
            }
            bannerUl.style.transform = "translate3d(0px," + ban1H + "px,0px)";
            bannerUl2.style.transform = "translate3d(0px," + ban2H + "px,0px)";
        }, 4000)
    }
    banH();
    window.addEventListener("resize", banH);


    /*window.addEventListener("resize",function(){
        if(document.getElementsByClassName("enabled")[0].getAttribute("id")=="banner")
            location.reload();
    })
    */



    var bannerShow = document.querySelector("#banner>.cebian_button>p");
    var asideX = document.querySelector("#yinru_aside>.aside_one>.close");
    var indexArvin = document.getElementById("index_Arvin");
    var rightAside = document.querySelector(".right_aside");
    var zzcIndex = document.querySelector(".zzc");
    var bannerTop=document.querySelectorAll('#banner>ul');

    window.addEventListener('load',function(){
        for(var key of bannerTop){
            key.style.transition='all 1s ease-in-out';
        }
        indexArvin.style.transition='all .3s linear';
    })
    /*左侧导航栏第一个home样式更改*/
    document.querySelector(".aside_one_arvin>ul>li:first-child>a").className = "disabledA";
    document.querySelector(".aside_one_arvin>ul>li:first-child>a").setAttribute("href", "javascript:void(0)");
    var requestLook = document.querySelector(".cebian_button_title");
    /*左侧导航按钮点击时，导航弹出，banner广告向右移动320px*/
    function asideShow() {
        asideX.parentNode.style.marginLeft = "0px";
        this.parentNode.classList.add("hide");
        requestLook.classList.add("hide");
        asideX.style.display = "block";
        indexArvin.style.marginLeft = "320px";
        rightAside.style.marginRight = "-320px";
        zzcIndex.style.display = "block";
    }
    bannerShow.addEventListener("click", asideShow);

    function firstBtn() {
        asideX.parentNode.style.marginLeft = "-320px";
        document.querySelector(".cebian_button.hide").classList.remove("hide");
        requestLook.classList.remove("hide");
        asideX.style.display = "none";
        indexArvin.style.marginLeft = 0;
        rightAside.style.marginRight = 0;
        zzcIndex.style.display = "none";
    }
    asideX.addEventListener("click", firstBtn);
    zzcIndex.addEventListener("click", firstBtn);

    /*鼠标点击首页往下的按钮时，第一个模块隐藏*/

    var toNext = document.querySelector("#banner>#yinru_rightAside>.right_aside>.toNext")
    var Banner = document.querySelector("#banner");
    var Wecreate = document.getElementById("weCreate");
    toNext.onclick = function (parent) {
        Banner.classList.remove("enabled");
        Banner.classList.add("disabled");
        Wecreate.classList.add("enabled");
        Wecreate.classList.remove("disabled");
    }
    /*给第二模块的weCreate设置高度，且高度自适应当前文档窗口的高度*/
    var weCreateH = document.querySelector(".weCreate_top");
    weCreateH.style.height = window.innerHeight - 180 + "px";
    window.onresize = function () {
        weCreateH.style.height = window.innerHeight - 180 + "px";
    }


    /*weCreate模块左边按钮点击时,导航栏弹出，weCreate向右移动320px*/
    var weCreateShow = document.querySelector("#weCreate>.cebian_button>p");
    weCreateShow.addEventListener("click", asideShow);
    /*attention模块左边按钮点击时，导航栏弹出，attention向右移动320px*/
    var attentionShow = document.querySelector("#attention>.cebian_button>p");
    attentionShow.addEventListener("click", asideShow);
    /*requset模块左边按钮点击时，导航栏弹出，request向右移动320px*/
    var requestShow = document.querySelector("#request>.left-menu>.cebian_button>p");
    requestShow.addEventListener("click", asideShow);

    /*点击第二模块的toNext第二模块隐藏，第三模块显示*/
    var toNext2 = document.querySelector("#weCreate>.weCreate_leftDown>.toNext");
    var Attention = document.getElementById("attention");
    toNext2.onclick = function () {
        Wecreate.classList.remove("enabled");
        Wecreate.classList.remove("arvinShow");
        Wecreate.classList.add("disabled");
        Attention.classList.add("enabled");
        Attention.classList.add("arvinShow");
        Attention.classList.remove("disabled");
    }
    /*第三模块的点击效果*/
    var itemList = document.querySelectorAll(".slide_wrap>.item");
    var slide_wrap = document.querySelector(".slide_wrap");

    function slideH() {
        for (var item of itemList) {
            item.style.width = window.innerWidth + "px";
        }
        slide_wrap.style.width = itemList.length * window.innerWidth + "px";
    }
    slideH();
    window.addEventListener("resize", slideH);

    /*第三模块页面点击事件轮播前后图，当点击第五张页面时，第三模块隐藏，第四模块显示*/
    var Request = document.getElementById("request");
    slide_wrap.onclick = function (e) {
        if (e.target.className == "toNext") {
            if (e.target.parentNode.parentNode.parentNode.parentNode.className != "it_05") {
                slide_wrap.style.marginLeft = parseFloat(slide_wrap.style.marginLeft) - window.innerWidth + "px";
                console.log(slide_wrap.style.marginLeft);
            } else {
                Request.classList.add("enabled");
                Request.classList.add("arvinShow");
                Request.classList.remove("disabled");
                Attention.classList.remove("enabled");
                Attention.classList.remove("arvinShow");
                Attention.classList.add("disabled");
            }
        }
        if (e.target.className == "toBefore") {
            slide_wrap.style.marginLeft = parseFloat(slide_wrap.style.marginLeft) + window.innerWidth + "px";
        }
    }


    /*鼠标滚轮事件，向后滚，显示下一个，向前滚，显示上一个,当页面显示为第三模块时，滚轮滚动，第三模块左右滑动*/
    indexArvin.onmousewheel = function (e) {
        var elmshow = document.querySelector(".arvinShow");
        if (e.wheelDelta < 0 && elmshow.nextElementSibling != null) {
            if (elmshow.getAttribute("id") == "attention" && parseFloat(slide_wrap.style.marginLeft) > -window.innerWidth * 4) {
                slide_wrap.style.marginLeft = parseFloat(slide_wrap.style.marginLeft) - window.innerWidth + "px";
            } else {
                elmshow.nextElementSibling.classList.add("enabled");
                elmshow.nextElementSibling.classList.add("arvinShow");
                elmshow.nextElementSibling.classList.remove("disabled");
                elmshow.classList.remove("enabled");
                elmshow.classList.remove("arvinShow");
                elmshow.classList.add("disabled");
            }
        } else if (e.wheelDelta > 0 && elmshow.previousElementSibling != null) {
            if (elmshow.getAttribute("id") == "attention" && parseFloat(slide_wrap.style.marginLeft) < 0) {
                slide_wrap.style.marginLeft = parseFloat(slide_wrap.style.marginLeft) + window.innerWidth + "px";
            } else {
                elmshow.previousElementSibling.classList.add("enabled");
                elmshow.previousElementSibling.classList.add("arvinShow");
                elmshow.previousElementSibling.classList.remove("disabled");
                elmshow.classList.remove("enabled");
                elmshow.classList.remove("arvinShow");
                elmshow.classList.add("disabled");
            }
        }
    }

    /*第四模块to—top*/

    var toTop = document.querySelector(".to_top");
    var banner = document.getElementById("banner");

    toTop.onclick = function () {
        banner.classList.add("enabled");
        banner.classList.add("arvinShow");
        banner.classList.remove("disabled");
        Request.classList.remove("enabled");
        Request.classList.remove("arvinShow");
        Request.classList.add("disabled");
        slide_wrap.style.marginLeft = "0px";
    }

    var cebianButton = document.querySelector(".left-menu>.cebian_button");

    function lastHide() {
        zzcIndex.style.display = "block";
        requestLook.classList.add("hide");
        cebianButton.classList.add("hide");
    }

    function lastShow() {
        zzcIndex.style.display = "none";
        requestLook.classList.remove("hide");
        cebianButton.classList.remove("hide");
    }
    var rightAsideBtn = document.getElementsByClassName("right_aside_btn")[0];
    rightAsideBtn.addEventListener("click", lastHide);
    var close_btn = document.getElementsByClassName("close_btn")[0];
    close_btn.addEventListener("click", lastShow);
    zzcIndex.addEventListener("click", lastShow);
})()