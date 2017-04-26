<?php
header("Content-disposition: attachment; filename=Additional Intake Information.pdf");
header("Content-type: application/pdf");
readfile("Additional Intake Information.pdf");
?>