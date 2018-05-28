<?php 
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $street = $_POST['street'];
  $house = $_POST['house'];
  $part = $_POST['part'];
  $appart = $_POST['appart'];
  $floor = $_POST['floor'];
  $comment = $_POST['comment'];
  $money = $_POST['money'];
  $call = $_POST['call'];
  $call = isset($disturb) ? 'НЕТ' : 'ДА';
  $message = '
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
  </head>
  <body>
    <p>Имя: ' . $name . '</p>
    <p>Телефон: ' . $phone . '</p>
    <p>Улица: ' . $street . '</p>
    <p>Дом: ' . $house . '</p>
    <p>Корпус: ' . $part . '</p>
    <p>Квартира: ' . $appart . '</p>
    <p>Этаж: ' . $floor . '</p>
    <p>Комментарий: ' . $comment . '</p>
    <p>Оплата: ' . $money . '</p>
    <p>Звонить: ' . $call . '</p>
  </body>
  </html>';

  $headers = "From: Администратор сайта <admin@slow.im>\r\n".
  "MIME-Version: 1.0" . "\r\n" .
  "Content-type: text/html; charset=UTF-8" . "\r\n";

  $mail = mail('mail@slow.im', 'Заказ', $message, $headers);
  
  $data = [];

  if ($mail) {
      $data['status'] = "OK";
      $data['mes'] = "Сообщение отправлено";
  }else{
      $data['status'] = "NO";
      $data['mes'] = "На сервере произошла ошибка";
  }

  echo json_encode($data);
?>