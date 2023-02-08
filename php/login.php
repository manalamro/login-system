<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{

$request = json_decode($postdata);
$username = mysqli_real_escape_string($mysqli, trim($request->username));
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$sql = "SELECT * FROM users where username='$username' and password='$password'";

$result = mysqli_query($mysqli,$sql);
$nums = mysqli_num_rows($result);

while($row = mysqli_fetch_assoc($result)){
    if($nums>0){
        $data = array('message' =>'success','username'=>$username);
        echo json_encode($data);
       }
       
       else
       {
        $data = array('message' =>'faild','username'=>$username);
        echo json_encode($data);
       }

       }

    }

?>