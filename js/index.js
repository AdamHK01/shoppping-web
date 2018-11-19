// window.onload=function(){
// 	var btnsrch=document.querySelector('#btnsrch');
// 	var startTime;
// 	btnsrch.addEventListener('click',function(e){
// 		console.log('click');
// 		var diffTime=Date.now() - startTime;
// 		console.log(diffTime);
// 	});
// 	btnsrch.addEventListener('touchstart',function(e){
// 		console.dir(e);
// 		startTime=Date.now();
// 	});
// 	btnsrch.addEventListener('touchmove',function(e){
// 		console.log('touchmove')
// 	});
// 	btnsrch.addEventListener('touchend',function(e){
// 		console.log('touchend')
// 	});
// }

//zepto.js 页有页面加载完成时间。
// $(function(){
// 	$('.box').on('tap singleTap doubleTap longTap',function(e){
// 		console.log(e.type);
// 	})
// 	$('.box').on('swipe swipeUp swipeDown swipeLeft swipeRight',function(e){
// 		console.log(e.type);
// 	})
// })
// 

var loadData={
	ms : {
		endTime : '2018-11-30 22:00:00'
	}
}

var time,
	timeIndex = -1, //时钟索引
	timeFnArray= []; 
	//存放主时钟的回调函数

//页面加载完成
$(function(){
	//搜索按钮
	$('#btnsrch').on('tap',function(e){
		//获取搜索文本
		var txt = $('#srchTxt').val() || 'adam' ;
		//页面跳转到搜索页面,并把文本传递过去
		window.location.href= 'srch.html?kw='+ txt;
	});

	//初始化轮播图代码
	top_Swiper();

	//注册时钟的回调函数
	timeFnArray.push(updateMSTimer);


	//初始化页面时钟并启动

	time = setInterval(function(){
		timeIndex += 1;
		timeIndex = timeIndex % 100;
		//执行页面中所有需要注册时钟执行的函数
		for (var i =0 ;i<timeFnArray.length;i++){
			timeFnArray[i]();
		}
	},200);
})


//更新当前时间与秒杀结束时间差的span标签
function updateMSTimer(){
	//每秒中去更新页面的事件
	if(timeIndex % 5 != 0){
		return ;
	}
	//满一秒钟,
	//计算事件差,并更新到页面的span中去
	var endDate = new Date(loadData.ms.endTime);
	//['2','2','1','1','0','0']
	var strArr =getHouersMinutesSecondsByMS(endDate - Date.now())
	//把时钟变换字符串更新到span标签
	$('#mstime .time-num').each(function(index,item){
		//$(item).text(strArr[index]);
		item.innerHTML = strArr ? strArr[index] : '-';
	})
}

function top_Swiper(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay:true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })   	
};




// 根据时间差返回具体的时间差

// ms {number} return {Array}
function getHouersMinutesSecondsByMS(ms) {
  ms = + ms;
  ms < 0 ? ms = -1 * ms : ms; // 兼容负数的问题
  if( ms < 0 ) {
    return null;
  }

  // 处理小时
  var hours = parseInt(ms / (1000 * 60 * 60)) % 24;
  var minutes = parseInt(ms / (1000 * 60)) % 60;
  var seconds = parseInt(ms / 1000) % 60;
  var hourStr = ('0'+hours);
  hourStr = hourStr.slice(-2);
  var minutesStr = ('0'+minutes);
  minutesStr = minutesStr.slice(-2);
  var secondsStr = ('0'+seconds);
  secondsStr = secondsStr.slice(-2);

  // var str = "221309"
  var str = hourStr + minutesStr + secondsStr;
  return str.split('');
}
