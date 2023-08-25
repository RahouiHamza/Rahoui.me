<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $subject = $_POST["Subject"]; // Fixed variable name
    
    $to = "hamzarahoui441@gmail.com"; // Replace with your email address
    $subjectLine = "New Form Submission from $name";
    $headers = "From: $email";
    
    $mailBody = "Name: $name\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Subject: $subject\n"; // Fixed variable name
    $mailBody .= "Message: $message\n";
    
    if (mail($to, $subjectLine, $mailBody, $headers)) {
        echo "Thank you for your submission!";
    } else {
        echo "Error sending email.";
    }
}
?>