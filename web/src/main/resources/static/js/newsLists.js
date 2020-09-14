//定义表格数据
//定义表格数据
var tables=[
     {type:'checkbox',fixed:'left'}
    ,{field:'atitle',title:'文章标题', width:300, fixed:'left',unresize: true, sort: false}
    ,{field:'aperson',title:'发布人', width:'9%',unresize:true}
    ,{field:'shsecurity',title:'审核权限', width:'9%',unresize:true}
    ,{field:'security', title:'浏览权限', width:'9%',unresize:true}
    ,{field:'isshow', title:'是否展示', type:'checkbox',width:'9%',unresize:true}
    ,{field:'fbtime', title:'发布时间', width:'9%',unresize:true}
    ,{title:'操作', toolbar: '#barDemo', width:'15%',unresize:true}
];

$=layui.jquery;

$(function(){
	//JavaScript代码区域
	layui.use('element', function(){
	  var element = layui.element;
	});

    //绑定数据表格
	datatables();
	
/*	//初始化绑定树
	initTree();
	
	//绑定数据表格
	datatables();
	
	//绑定点击事件
	bindClick();*/
});

//初始化数据表格
var datatables=function(){
	layui.use('common.js',function(){
		var table=layui.common;
		
        //渲染
        table.render({
            elem:'#datatable'  //绑定table表格
            //,height:500
            //,url:'/device/page' //后台springmvc接收路径
            //,page:false    //true表示分页
            //,loading:true
            //,toolbar:'#toolbar'
            //,cellMinWidth:120
            //,where:{pageNum:currentPageNumber,pageSize:pageSize,gridId:gridId} //传参数
            ,cols:[tables]
            //,done:doneCallback //设置回调函数
             ,data:[{
             	"atitle": "10001"
      			,"aperson": "杜甫"
      			,"shsecurity":"好"
      			,"security": "好"
      			,"isshow": true
      ,"fbtime": "2017-09-09"
      },{
      "atitle": "10002"
      ,"aperson": "杜甫"
      ,"shsecurity":"好"
      ,"security": "好"
      ,"isshow": true
      ,"fbtime": "2017-09-09"
      },{
      "atitle": "10003"
      ,"aperson": "杜甫"
      ,"shsecurity":"好"
      ,"security": "好"
      ,"isshow": true
      ,"fbtime": "2017-09-09"
      },{
      "atitle": "10004"
      ,"aperson": "杜甫"
      ,"shsecurity":"好"
      ,"security": "好"
      ,"isshow": true
      ,"fbtime": "2017-09-09"
      },{
      "atitle": "10005"
      ,"aperson": "杜甫"
      ,"shsecurity":"好"
      ,"security": "好"
      ,"isshow": true
      ,"fbtime": "2017-09-09"
      },
      ]
        
      });

	})
}
