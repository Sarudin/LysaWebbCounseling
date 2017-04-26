<?php
header("Content-disposition: attachment; filename=Billing Policies.pdf");
header("Content-type: application/pdf");
readfile("Billing Policies.pdf");
?>