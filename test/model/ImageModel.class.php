<?php 


class ImageModel extends SQLite3
{

	private $id;
	private $title;
	private $imgSrc;
	private $description;
	private $createTime;


    // public function __construct($id, $title, $imgSrc, $description, $createTime)
    // {
    // 	$this->id=$id;
    // 	$this->title=$title;
    // 	$this->imgSrc=$imgSrc;
    // 	$this->description=$description;
    // 	$this->createTime=$createTime;
    // 	$this->showInfo();
    // }

    public function __construct()
    {
        $this->open('../db/test.db');
    }



    public function __destruct()
    {
    	self::close();
    }


    public function fetchAll($type)
    {
        $my_array = array();
    	$sql = 'select * from t_img_info where type = '.$type;
        $ret = self::query($sql);
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
           array_push($my_array, $row);
        }
        // echo "Operation done successfully\n";
        return $my_array;
    }

    public function fetchByName($name)
    {
        $my_array = array();
        $sql = 'select * from t_img_info where type = 3 and headline = '.'"'.$name.'"';
        $ret = self::query($sql);
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
           array_push($my_array, $row);
        }
        // echo "Operation done successfully\n";
        return $my_array;
    }

    public function getPathById($id)
    {
        $sql = 'select img_src as imgSrc from t_img_info where id = '.$id;
        $ret = self::query($sql);
        while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
            return $row['imgSrc'];
        }
        return '';
    }

}

?>