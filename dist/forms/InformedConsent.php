<?php
header("Content-disposition: attachment; filename=Informed Consent.pdf");
header("Content-type: application/pdf");
readfile("Informed Consent.pdf");
?>