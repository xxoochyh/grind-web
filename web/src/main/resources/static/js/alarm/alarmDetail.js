var $ = null;
var isConfirmed;
$ = layui.jquery;
    layui.use(['element', 'form','jquery'], function () {
        var form = layui.form;
        element = layui.element;
        $= layui.$;
        isConfirmed = getIsConfirmed();
        console.log(isConfirmed);
        if (isConfirmed == 1){
            console.log(isConfirmed);
            $("#confirmTime").show();
            $("#platform").show();
            $("#confirmUser").show();
        }
});

