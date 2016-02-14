<?php

if (isset($_POST['submit'])) {
        if(!empty($_POST['time'])){
            $time = $_POST['time'];
        }
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $city = $_POST['city'];
        $address = $_POST['address'];
        $to = 'sunalex@sunalex.ru'; //TODO
        $subject = 'Заказ на тактический передник!';
        $message = 'Имя: '.$name. ', Телефон: '.$phone. ', Время: ' .$time. ', Город: ' .$city. ', Адрес: ' .$address;

        $headers = 'Content-type: text/html; charset=UTF-8\r\n';

        mail($to, $subject, $message, $headers);
}

?>