$(function(){
    var root='https://weixiduo.mynatapp.cc';
        $.ajax({
            url:root+'/IntegralAction/findByOpenid?openid=12131',
            success:function(content){//此处数组中只有一个数据
                var data=content.data;
                console.log(data);
                //获取用户积分id
                var $jifen=$('#integralQuantity');
                console.log(data[0].integralQuantity);
                var jifen_html='<section class="span2">'+data[0].integralQuantity+'</section>';
    
                $jifen.html(jifen_html);
                
            }
        })

    
})