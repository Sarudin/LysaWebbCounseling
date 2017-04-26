<?php
header("Content-disposition: attachment; filename=Child Intake Form.pdf");
header("Content-type: application/pdf");
readfile("Child Intake Form.pdf");
?>