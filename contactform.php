<?php 
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['name'];

    $mailTo = "admin@lea-kretzer.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;


mail($mailTo, $txt, $headers);
header("Location: index.html?mailsend");
}




?>