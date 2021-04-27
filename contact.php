<?php

    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];

        $mailTo = "contact@davidhuck.net";
        $headers = "From:" . $mailFrom;
        $txt = "You have a new email from " . $name . ".\n\n" . $message;

        mail($mailTo, $txt, $message, $headers);

        echo "Mail Sent!";
        header("refresh: 3; Location: index.html");
    }

?>