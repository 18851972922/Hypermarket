var tabs = document.getElementById("tabs").getElementsByTagName("li")
console.log(tabs);
var lists = document.getElementById("lists").getElementsByTagName("ul")
console.log(lists);
for(var i = 0 ; i <tabs.length;i++){
	// 给每一个li绑定点击事件
	tabs[i].onclick = showlist;
}



function showlist(){
	for(var i = 0 ; i <tabs.length;i++){
		// 如果这个li被点击 class赋值 否则为空
		if(tabs[i] === this){
			tabs[i].className = "active";
			lists[i].className = "check active";
		}
		else{
			tabs[i].className = "";	
			lists[i].className = "check";
		}
	}
}

// 使导航栏固定
var classifyNav = document.getElementById("classifyNav");
window.onscroll = function(){
	// 注意浏览器的兼容性
	var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0;
	// 大于170就固定在页面上方 小于170就跟着页面一起
	if(scrollTop >= 170){
		classifyNav.className = "classify-nav classify-navfixed";
	}else{
		classifyNav.className = "classify-nav"
	}
}

//倒计时
	var day = document.querySelector('.day'); //天数的黑色盒子
    var hour = document.querySelector('.hour'); //小时的黑色盒子
    var minute = document.querySelector('.minute'); //分钟的黑色盒子
    var second = document.querySelector('.second'); //秒数的黑色盒子
    var inputTime = +new Date('2020-6-8 19:00:00'); //返回用户输入时间总的毫秒数
    countDown(); //先调用一次函数防止第一次刷新页面有空白
    setInterval(countDown, 1000); //调用函数

    function countDown(time) {
      var nowTime = +new Date(); //返回当前时间总的毫秒数
      var times = (inputTime - nowTime) / 1000; //times是剩余时间总的毫秒数

      var d = parseInt(times / 60 / 60 / 24); //天
      d = d < 10 ? '0' + d : d;
      day.innerHTML = d; 

      var h = parseInt(times / 60 / 60 % 24); //时
      h = h < 10 ? '0' + h : h;
      hour.innerHTML = h; 

      var m = parseInt(times / 60 % 60); //分
      m = m < 10 ? '0' + m : m;
      minute.innerHTML = m; 

      var s = parseInt(times % 60); //秒
      s = s < 10 ? '0' + s : s;
      second.innerHTML = s; 
	  
	  if (h == 0 & m == 0 && s == 0){
		  document.getElementById("time").innerText = "秒杀结束"
		  clearInterval(inter)
	  }
    }
