$(function(){
    // 轮播效果
	var index=0;
	var t=setInterval(lunbo,3000);
	function lunbo(){
		$('.slider4_pic').fadeOut();
		var curr=$('.slider4_pic')[index];
		$(curr).fadeIn();

		index++;
		if(index===$('.slider4_pic').length){
			index=0;
		}
	}
	$('.pic_stop').hover(function(){
		clearInterval(t);
    },function(){
        t=setInterval(lunbo,3000);
	})
	$('.pic_left').click(function(){
	    index--;
	    if(index=== 0){
	        index=$(".slider4_pic").length-2;
	    }else{
	        index--;
	    }
	    lunbo();
	 })
	$('.pic_right').click(function(){
        lunbo();
	})
})