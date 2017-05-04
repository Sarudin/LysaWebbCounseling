<?php
header("Content-disposition: attachment; filename=AllForms.zip");
header("Content-type: application/zip");
readfile("AllForms.zip");
?>