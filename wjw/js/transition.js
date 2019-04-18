(function(){
// 获取所有需要参与动画的图片
const sliderImages = document.querySelectorAll('.slide-in');
function offset(element) {
  var offest = {
    top: 0,
    left: 0
  };
  var _position;
  getOffset(element, true);
  return offest;
 
  // 递归获取 offset, 可以考虑使用 getBoundingClientRect
  function getOffset(node, init) {
    // 非Element 终止递归
    if (node.nodeType !== 1) {
      return;
    }
    _position = window.getComputedStyle(node)['position'];
    // position=static: 继续递归父节点
    if (typeof(init) === 'undefined' && _position === 'static') {
      getOffset(node.parentNode);
      return;
    }
    offest.top = node.offsetTop + offest.top; //- node.scrollTop;
    offest.left = node.offsetLeft + offest.left; //- node.scrollLeft;
    // position = fixed: 获取值后退出递归
    if (_position === 'fixed') {
      return;
    }
    getOffset(node.parentNode);
  }
}
window.onscroll=function(){
	for(var sliderimage of sliderImages){
		var sH=window.innerHeight-sliderimage.clientHeight/2;
		var a = (offset(sliderimage).top-window.scrollY)<sH&&(window.scrollY-offset(sliderimage).top)<sliderimage.clientHeight/2;
		 if(a==true){
			sliderimage.classList.add('active');
		 }else{
			sliderimage.classList.remove('active');
		 }
	}
}
})()