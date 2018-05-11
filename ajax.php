<?php
    $name = $_POST['name'];
    $country = $_POST['country'];
    $city = $_POST['city'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $to      = $email;
    $subject = 'Test-worck_Zhyliak';
    $message = 'Name : '.$name."\r\n".'Country : '.$country."\r\n".'City : '.$city."\r\n".'Phone : '.$phone."\r\n".'Email : '.$email."\r\n";
    $headers = 'From: '.$email.'' . "\r\n" .
        'Reply-To: '.$email.'' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    
    echo json_encode(array('success'=>true));

?>