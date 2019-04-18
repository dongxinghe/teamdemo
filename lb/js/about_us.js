window.addEventListener("scroll", function() {
  let containerElement = document.querySelector(".text-area-section");
  let picTxtElement = document.querySelector(".pic-text-container");
  let detailElement = document.querySelector(".detail-container");
  let infoElement = document.querySelector(".info-container");
  let pFirstElement = document.querySelector(".p-first");
  let pSecondElement = document.querySelector(".p-second");
  let pThirdElement = document.querySelector(".p-third");
  let howWorkElement = document.querySelector(".how-work-text");
  let howThirdElement = document.querySelector(".how-third-trans");
  let outerBorderElement = document.querySelector(".outer_border");
  // textArea动画
  setTextAreaAnimation(containerElement, "scale", 1);
  setTextAreaAnimation(picTxtElement, "scale", 1.5);
  setAnimationByTranslateX(detailElement, "translate", 1.5);
  setAnimationByTranslateY(infoElement, "translate", 1.6);
  setAnimationByTranslateY(pFirstElement, "translate", 1.4, true);
  setAnimationByTranslateY(pSecondElement, "translate", 1.2, true);
  setAnimationByTranslateY(pThirdElement, "translate", 1, true);
  setAnimationByTranslateLeft(howWorkElement,"translate",1.1,true);
  setAnimationByTranslateX(howThirdElement,"translate",1.1,true);
  setAnimationByTranslateBottom(outerBorderElement,"translate",1.8,true);
});

function setTextAreaAnimation(element, props, num) {
  let leftElementRect = element.getBoundingClientRect();
  let leftElementHeight = parseInt(window.getComputedStyle(element).height);
  if (window.innerHeight > leftElementRect.top) {
    // 出来的高度比是屏幕高 - top距离比例
    let radio = (window.innerHeight - leftElementRect.top) / (leftElementHeight * num);
    if (radio > 1) {
      radio = 1;
    }
    element.setAttribute("style", `transform:${props}(${radio});opacity:${radio}`);
  }
}

function setAnimationByTranslateX(element, props, num) {
  let leftElementRect = element.getBoundingClientRect();
  let leftElementHeight = parseInt(window.getComputedStyle(element).height);
  let howThirdElementRect = element.getBoundingClientRect();
  let howThirdElementHeight = parseInt(window.getComputedStyle(element).height);
  if (window.innerHeight > leftElementRect.top) {
    let radio = (window.innerHeight - leftElementRect.top) / (leftElementHeight * num); //window.innerHeight视口高度
    if (radio > 1) {
      radio = 1;
    }
    element.setAttribute("style", `transform:translate(${(1 - radio) * 100}%,0);opacity:${radio}`);
  }
    if (window.innerHeight > howThirdElementRect.top) {
        let radio = (window.innerHeight - howThirdElementRect.top) / (howThirdElementHeight * num); //window.innerHeight视口高度
        if (radio > 1) {
            radio = 1;
        }
        element.setAttribute("style", `transform:translate(${(1 - radio) * 100}%,0);opacity:${radio}`);
    }
}
function setAnimationByTranslateY(element, props, num, height) {
  let leftElementRect = element.getBoundingClientRect();
  //getBoundingClientRect用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置。
    // getBoundingClientRect是DOM元素到浏览器可视范围的距离（不包含文档卷起的部分）。
    // 该函数返回一个Object对象，该对象有6
    // 个属性：top,lef,right,bottom,width,height；这里的top、left和css中的理解很相似，width、
    // height是元素自身的宽高
  let leftElementHeight = parseInt(window.getComputedStyle(element).height);
//getComputedStyle 获取该元素使用的最终CSS值
  let totalHeight = height ? 200 : leftElementHeight * num;
  if (window.innerHeight > leftElementRect.top) {
    let radio = (window.innerHeight - leftElementRect.top) / totalHeight;
    if (radio > 1) {
      radio = 1;
    }
    element.setAttribute("style", `transform:translate(0,${(1 - radio) * 100}%);opacity:${radio}`);
  }
}
// 点击下滑按钮

  window.onload=function(){
  let downBtn=document.getElementsByClassName("down-btn")[0];
          downBtn.onclick=function () {
              window.scrollTo(0,window.scrollY+=window.innerHeight);
          }
  let upBtn = document.querySelector(".up-button-container");
        upBtn.onclick = function () {
            window.scrollTo(0,0);
        }
  }

  function setAnimationByTranslateLeft(element,props,num) {
      let howWorkContainerRect = element.getBoundingClientRect();
      let howWorkContainerHeight = parseInt(window.getComputedStyle(element).height);
      if(howWorkContainerRect.top<window.innerHeight){
          let ratio = (window.innerHeight - howWorkContainerRect.top) / (howWorkContainerHeight * num);
          if (ratio > 1) {
              ratio = 1;
          }
          element.setAttribute("style", `transform:translate(${(1 - ratio) * 100*(-1)}%,0);opacity:${ratio}`);
      }
  }

  function setAnimationByTranslateBottom(element,props,num) {
      let outerBorderRect = element.getBoundingClientRect();
      let outerBorderHeight = parseInt(window.getComputedStyle(element).height);
      if(outerBorderRect.top<window.innerHeight){
          let ratio = ((window.innerHeight+200)-outerBorderRect.top)/(outerBorderHeight*num);
          if(ratio>1){
              ratio = 1;
          }
          element.setAttribute("style",`transform:translate(0,${(1-ratio)*100}%);opacity:${ratio}`);
      }
  }

//ri-aside
// window.onload=function () {
//     let bottonContainerSendBtn = document.querySelector(".sr_btn");
//     let rtAside = document.querySelector("#yinru_rt_aside");
//     bottonContainerSendBtn.onclick = function () {
//         rtAside.setAttribute("style",`transform:translateX(-280px)`);
//     }
// }


