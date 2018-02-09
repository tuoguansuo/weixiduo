
var date=new Date();
var str = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 

limit();
function limit(){
    var root='https://weixiduo.mynatapp.cc';
    $.ajax({
        url:root+'/BuyerVipMemberAction/findByOpenid/12131',
        success : function(content){
            data=content.data;
            if(data[0].birthday != null){
                $("#birthday").attr("readonly","readonly");
            }
        }
    })
}

function getId(){
    var root='https://weixiduo.mynatapp.cc';
    //获取id：
    $.ajax({
        url:root+'/BuyerVipMemberAction/findByOpenid/12131',
        success : function(content){
        var data=content.data;
        //获取用户id
        //console(data[0].id);
        var id=data[0].id;
        }
   })
}
function check(){
    
    var useropenid = "12131";//用户openid
    var userid=getId();//用户id
    var username=document.getElementById('name');//昵称 (.value)
    var userrealName=document.getElementById('realName');//姓名
    var userphone=document.getElementById('phone');//手机号码
    var userbirthday=document.getElementById('birthday');//出生日期
    var useraddress=document.getElementById('address');//家庭住址
    var usergender=null;//被选中的性别值
    var usermarr=null;//被选中的婚姻状况
    var userchild=null;//是否有小孩单选框被选中的值
    //至此已将个人资料中的10个输入项值全部获取！

    var sexradio=document.getElementsByName('gender');//性别值：男、女  
        for(var i = 0;i < sexradio.length;i++){
            if(sexradio[i].checked == true){
                usergender=sexradio[i].value;
                break;
            }
        }      
    //alert(usergender);
    var marrradio=document.getElementsByName('marriage');//是否已婚：1代表已婚；0代表未婚
   
        for (var j = 0 ;j < marrradio.length;j++){
            if(marrradio[j].checked == true){
                 usermarr=marrradio[j].value;
                 break;
            }
        }

    //alert(usermarr);
    var childradio=document.getElementsByName('kid');//是否有孩子：1代表有；0代表没有
   
        for (var k = 0;k < childradio.length;k++){
        if(childradio[k].checked == true){
            userchild=childradio[k].value;
            break;
        }
    }

    //alert(userchild);
    if(username.value.length==0){
        alert("请输入昵称！");
        username.focus();
    }
    else if(userrealName.value.length==0){
        alert("请输入真实姓名！");
        userrealName.focus();
    }

    else if(userphone.value.length==0){
        alert("请输入手机号码！");
        userphone.focus();
    }
    else if(!myreg.test(userphone.value) || userphone.value.length!=11){
        alert("请输入有效的手机号码！");
        userphone.focus();
    }
    else if(userbirthday.value.length==0){
        alert("请输入出生年月！");
        userbirthday.focus();
    }
    
    else if(userbirthday.value > str){
        alert("出生年月非法！");
        userbirthday.focus();

    }
    
    else if(useraddress.value.length==0){
        alert("请输入家庭住址！");
        useraddress.focus();
    }
    else {
        //此处实现的功能是：当用户个人资料全部验证无误后，把用户填写的个人资料打包传送给后台
        $(function(){
            var root='https://weixiduo.mynatapp.cc';
                var data=
                       {
                           "id":userid,
                           "openid":useropenid,
                           "name":username.value,
                           "sex":usergender,
                           "address":useraddress.value,
                           "realName":userrealName.value,
                           "birthday":userbirthday.value,
                           "haschild":userchild,
                           "ismarried":usermarr,
                           "phone":userphone.value
                        };
                var info=JSON.stringify(data);
                $.ajax({
                    contentType:"application/json;charset=UTF-8",    
                    url:root+'/BuyerVipMemberAction/update',
                    type:'POST',
                    data:info,
                    success : function(data){
                        console.log(data);
                        alert("操作成功！");
                        window.location.reload();//刷新页面
        
                    },
                    error : function(){
                        alert("服务器出错了");

                    }
                }) 
              
        })
       
    }
}

           
    