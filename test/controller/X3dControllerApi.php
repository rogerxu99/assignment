<?php
require_once('../model/ImageModel.class.php');
header('content-type:application/json');
header('Access-Control-Allow-Origin:*');
$name = $_GET['name'];
$obj = new ImageModel();
$my_array = $obj->fetchByName($name);
echo urldecode(json_encode($my_array));
$obj->close();
?>