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
	// 点击出现弹框
	$('.slider2_more,.slider3_more,.slider5_more').click(function(){
		$('.msg').show();
	})
	$('.evt_baoming .close').click(function(){
		$('.msg').hide();
		$('.error').hide();
	})
})
function submitFrom(){
	if(check()){
		$.getJSON("http://www.linked-f.com/special/apply?jsoncallback=?",
		$('#from2').serialize(),
		function(data){
			if(data.status=="success"){
				alert("您的申请已经成功提交，稍后将会有工作人员与您联系");
				document.location.reload();    //刷新页面
			}else{
				alert("提交失败，请重新填写!");
			}
		});
	}
}
function check() {
    if ($("#txt_name2").val() == "") {
        $('#for_txt_name2').css('display','block');
        return false;
    } else if ($("#txt_phone2").val() == "") {
        $('#for_txt_phone2').css('display','block');
        return false;
    }else if ($("#txt_company2").val() == "") {
        $('#for_txt_company2').css('display','block');
        return false;
    }else if ($("#txt_position2").val() == "") {
        $('#for_txt_position2').css('display','block');
        return false;
    }
    else {
        return true;
    }
}