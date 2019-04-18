 /*添加class*/
function addClass(kls,dom) {　　　　
     var cs=dom.getAttribute("class");
	 if(cs==null){
		dom.className=kls;
	 }else{
		dom.className=cs+" "+kls;
	 }
 }
 /*删除class*/
function removeClass(kls,dom) {
	 var cs=dom.getAttribute("class");
	 var csArr=cs.split(" ");
	 var i=csArr.indexOf(kls);
		csArr.split(i,i+1);
	 var classList=csArr.join(" ");
		dom.className=classList;
 }