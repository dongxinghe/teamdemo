var counted = false;
var previous = 0;
var display = document.getElementById('calculator_display');
display.value = '';

function calc_i(str){
    return /^\d+$/.test(str);
}

function calc_v(val) {
    if(counted) {
        calc_c('');
    }

    display.value += val;

    if(calc_i(val)) {
        previous = display.value;
    }
}

function calc_c(val) {
    display.value = val;
    counted = false;
    previous = 0;
}

function calc_e() {

    var meter_count = display.value;
    var currency = '$';

    if(meter_count != previous) {
        meter_count = previous;
    }

    if(meter_count == 0) {
        return;
    }

    if(meter_count <= 70) {
        var office_price = 30;
        var flat_price = 40;
        var house_price = 45;
    }
    else if(meter_count <= 120) {
        var office_price = 25;
        var flat_price = 30;
        var house_price = 35;
    }
    else if(meter_count <= 200) {
        var office_price = 20;
        var flat_price = 25;
        var house_price = 35;
    }
    else {
        var office_price = 20;
        var flat_price = 25;
        var house_price = 25;
    }

    if (document.getElementById('accommodation_1').checked) {
        meter_price = office_price;;
    }
    else if (document.getElementById('accommodation_2').checked) {
        meter_price = flat_price;
    }
    else {
        meter_price = house_price;
    }

    try {
        total_price = meter_count * meter_price;
        display.value =  currency + Math.round(total_price);
        counted = true;
    }
    catch(e) {
        calc_c('Error');
    }
}

/*************************************************************************************************/


//◊Û≤‡±ﬂ ¬º˛
var body=document.body;
var footer=document.getElementById("footer");
var hide=document.getElementsByClassName("hide")[0];
var closeBtn=document.querySelector("#yinru_aside>.aside_one>.close>p");
closeBtn.style.background="url(../images/icons-s38dcd512ab.png) 0 -333px no-repeat";
var asidebtn=document.getElementById("asidey");
var aside_one=document.getElementsByClassName("aside_one")[0];
var shade = document.getElementById("shade");
var center=document.getElementsByClassName('center')[0];
asidebtn.onclick=function(){
    shade.style.zIndex=100;
    center.style.transition='all .7s linear';
    shade.style.display='block';
    shade.style.transition='all .3s linear';
    body.style.transition='all .3s linear';
    aside_one.style.marginLeft=0;
    body.style.marginRight="-320px";
    footer.style.left="312px";
    footer.style.transition=" all .10s linear;"
    hide.style.diaplay="block";
    closeBtn.parentNode.style.display="block";
    overflow:hide;

}
closeBtn.parentNode.onclick=function(){
    shade.style.display='none';
    aside_one.style.marginLeft="-320px";
    body.style.marginRight=0;
    footer.style.left=0;
    hide.style.diaplay="none";
    closeBtn.parentNode.style.display="none";
}







/****************************************************************************/
//’⁄’÷≤„
//window.onload=function(){
//    var a1=document.getElementById('asidey');
//    var a2=document.getElementsByClassName("close")[0];
//    a1.onclick=shield;
//    a2.onclick=cancel_shield;
//
//    function shield(e){
//        e.preventDefault();
//        var shade = document.getElementById("shade");
//
//        shade.style.display = "block";
//
//    }
//
//    function cancel_shield(e){
//        e.preventDefault();
//        var shade = document.getElementById("shade");
//        shade.style.display = "none";
//
//    }
//};