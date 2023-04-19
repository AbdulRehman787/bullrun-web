<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: content-Type,
Access-Control-Allow-Headers, Authorization,X-Request-Width");

$data = json_decode(file_get_contents("php://input"));
$first_name = $data->first_name;
$last_name = $data ->last_name;
$email = $data->email;
$password= $data->password;

$con = mysqli_connect("localhost/phpmyadmin","bull-run","loginsignupbullrun");
mysqli_select_db($con,"reactlogin-register-api");

$sql = "insert into register(
    first_name,
    last_name,
    email,
    password,
)
values(
    '$first_name',
    '$last_name',
    '$email',
    '$password',  
)
";
$result = mysqli_query($con,$sql);
if($result){
    $response['data'] = array('status'=>'valid');
echo json_encode($response);
}
else{
    $response['data'] = array(
        'status' => 'invalid'
    );
    echo json_encode($response);
}
?>