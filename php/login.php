<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {

    $request = json_decode($postdata);
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));

    $sql = "SELECT username,password,serverId FROM users where username='$username' and password='$password'";

    $result = mysqli_query($mysqli, $sql);
    $nums = mysqli_num_rows($result);
    if ($row = mysqli_fetch_assoc($result)) {
            echo "", "Hi " . $row["username"] . "/! your password is: " . $row["password"] . "/ and your serverId is: " . $row["serverId"];
    } 
    else {
        echo "username or password is wrong :(";
    }
}

?>