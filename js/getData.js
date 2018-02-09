$(function (){
    var root='https://weixiduo.mynatapp.cc';
//查询会员基本信息：
    $.ajax({
        url:root+'/BuyerVipMemberAction/findByOpenid/12131',
        success: function(content){//此处的data只有一个值
            
            var data=content.data;
            //获取会员头像id：
            console.log(data);
            var $icon=$('#icon');
            //获取会员电话号码id和等级id:
            var $phoneAndLevel=$('#phoneAndLevel');
            //获取用户输入框昵称id：
            var $name=$('#name');
            //获取用户输入框姓名id：
            var $realName=$('#realName');

            //获取用户单选框性别id：
            // var $gender=('#sex');

            //获取用户输入框手机号id：
            var $phone=$('#phone');
            //获取输入框生日Id:
            var $birthday=$('#birthday');
            //获取用户输入框家庭住址id：
            var $address=$('#address');
 
            //----------------------------------------------
            //渲染头像：
            console.log("头像"+data[0].head);
            var tequan_html1='<img src="'+data[0].head+'"/>';
            $icon.html(tequan_html1);
            //渲染电话号码和会员等级：
            console.log(data[0].phone);
            console.log(data[0].vipName);
            var tequan_htm2='<p class="p1">'+data[0].phone+'</p>'+'<p class="p1">'+data[0].vipName+'会员</p>';
            $phoneAndLevel.html(tequan_htm2);

            //渲染昵称：
            console.log(data[0].name);
            $name.val(data[0].name);
            //渲染真实姓名：
            console.log(data[0].realName);
            $realName.val(data[0].realName);

            //渲染性别：
            console.log(data[0].sex);//男或者女
            $("input[name=gender][value="+data[0].sex+"]").attr("checked",true);


            //渲染手机号：
            console.log(data[0].phone);
            $phone.val(data[0].phone);

            //渲染出生日期：
            console.log(data[0].birthday);
            $birthday.val(data[0].birthday);

            //渲染家庭住址：
            console.log(data[0].address);
            $address.val(data[0].address);

            //渲染婚姻状况和小孩状况：（回显）
            console.log(data[0].ismarried);//1或者0
            $("input[name=marriage][value="+data[0].ismarried+"]").attr("checked",true);
            console.log(data[0].haschild);
            $("input[name=kid][value="+data[0].haschild+"]").attr("checked",true);


        }

    })

});
