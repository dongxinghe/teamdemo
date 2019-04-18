var gotop=document.getElementById("toTop");

gotop.onclick=function () {
    var scrollg=window.scrollY;
    var timer=setInterval(function () {
        scrollg-=50;
        if(scrollg<0){
            window.clearInterval(timer);
        }
        window.scrollTo(0,scrollg);
    },20)
}