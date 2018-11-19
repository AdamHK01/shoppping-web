!(function(doc, win) {
    //获取html标签的dom元素对象
    var docEle = doc.documentElement,
        evt = "onorientationchange" in window ? "orientationchange" : "resize",
        fn = function() {
            //拿到当前屏幕的尺寸，
            var width = docEle.clientWidth;
            width = width < 320 ? 320 : width;
            width = width > 640 ? 640 : width;
            // width && (docEle.style.fontSize = 100 * (width / 640) + "px");
            if(width>=320 && width <= 640){
            width && (docEle.style.fontSize = 100 * (width / 640) + "px");
          } 
        setTimeout(function(){
            var width = docEle.clientWidth;
            width = width < 320 ? 320 : width;
            width = width > 640 ? 640 : width;
            // width && (docEle.style.fontSize = 100 * (width / 640) + "px");
            if(width>=320 && width <= 640){
            width && (docEle.style.fontSize = 100 * (width / 640) + "px");
          }            
      },250)
     };
    win.addEventListener(evt, fn, false);
    doc.addEventListener("DOMContentLoaded", fn, false);
 
}(document, window));
