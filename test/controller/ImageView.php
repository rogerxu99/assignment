<?php
	header('Access-Control-Allow-Origin:*');
    require_once('../model/ImageModel.class.php');
    $obj = new ImageModel();
    $id = $_GET['id'];
    // echo($id);
    $imgSrc = $obj->getPathById($id);
    $obj->close();
    // echo($imgSrc);
    $filePath = $imgSrc;
	if (file_exists($filePath)) {
            // http headers
    header('Content-Type: application-x/force-download');
    header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
    header('Content-length: ' . filesize($filePath));

    // for IE6
    if (false === strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE 6')) {
        header('Cache-Control: no-cache, must-revalidate');
    }
    header('Pragma: no-cache');

    // read file content and output
    readfile($filePath);

    }


?>