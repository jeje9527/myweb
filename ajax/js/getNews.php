<?php
header('content-type:text/html;charset="utf-8"');
error_reporting(0);

　$news = array(
    array('title'=>'不仅不会就不会结婚不久后回家','date'=>'2010-10-20')
    array('title'=>'不仅不会就不会结婚不久后回家','date'=>'2010-10-20')

    array('title'=>'不仅不会就不会结婚不久后回家','date'=>'2010-10-20')

    array('title'=>'不仅不会就不会结婚不久后回家','date'=>'2010-10-20')

    array('title'=>'不仅不会就不会结婚不久后回家','date'=>'2010-10-20')

    array('title'=>'不仅不会就不会结婚不久后回家','date'=>'2010-10-20')
    
);
echo json_encode($news);