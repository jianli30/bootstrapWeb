/*自己的js*/
$(function(){


/* 控制 标签页的标签宽度*/
var $ulcontainer=$('.nav-tabs');
//获取所有子元素的宽度和
var width=30;
//遍历子元素
$ulcontainer.children().each(
	function(index,element){
		//console.log(element.clientWidth);
		width+=element.clientWidth;
	});
    //判断当前的ul宽度是否超出就显示滚动条
    if(width>$(window).width()){
    $ulcontainer.css('width',width).parent().css('overflow-x','scroll')
    };


    //a 点击注册事件
    var $newTitle=$('.news_title')
     $('#news .nav-pills a').on('click' ,function(){
     	//获取当前点击元素
     	var $this=$(this);
     	//获取对应的title值
     	var title=$this.data('title');
     	//将title设置到相应的位置
     	$newTitle.text(title);
     });


     /*手机 轮播的滑屏处理*/

     //1 获取手指在轮播图上滑动的方向
     // 手指触摸开始时记录手指所在的坐标X
     // 结束触摸一瞬间记录最后的手指所在的坐标x
        // 获取界面上的轮播图容器
      var $carousels=$('.carousel');
      var startX, endX;
      var offset=50;
      // 注册滑动事件
      $carousels.on('touchstart',function(e){
      	startX=e.originalEvent.touches[0].clientX;
         console.log();	
      });

      $carousels.on('touchmove',function(e){
      	//变量重复赋值
      	endX=e.originalEvent.touches[0].clientX;
         console.log();//控制台输出
      });
      $carousels.on('touchend',function(e){
      	//结束触摸一瞬间记录最后的手指所在坐标X
      	//比大小

      	// 获取每次运动的距离，当距离大于一定值时认为有方向变化
         var distance=Math.abs(startX-endX)

         if (distance>offset) {
         	$(this).carousel(startX>endX? 'next':'prev') // 原生的上一个下一个的方法 bootstrap有介绍
         }
      })
    
});