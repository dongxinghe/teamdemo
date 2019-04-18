<?php
//header("Content-Type,application/json;charset=utf-8");
@$name = $_REQUEST["name"];
if($name == null || $name == ""){
	die('用户名称不能为空');
}
@$phone = $_REQUEST["phone"];
if($phone == null || $phone == ""){
	die('联系方式不能为空');
}
@$options = $_REQUEST["options"];
if($options == null || $options == ""){
	die('建议或意见不能为空');
}
// 连接数据库
$conn=mysqli_connect("127.0.0.1","root","","project",3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

//创建sql
// $sql = " INSERT INTO advise(name,phone,option) VALUES(
// 	'$name','$phone','$options' )"
$sql = "	INSERT INTO `advise` ( `name`, `phone`, `options`) VALUES ('$name', '$phone', '$options')" ;
$res = mysqli_query($conn,$sql);
if($res==true){
	echo 1;
}else{
	echo 0;
}	

?>