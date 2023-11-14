<?php



// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'5>";
$msg .= "<p><strong>Заявка: </strong> ".date("d/m/Y")."</p>\r\n";
$msg .= "<p><strong>Время: </strong> ".date("G:i:s")."</p>\r\n";
if (isset($_POST)) {
    foreach($_POST as $key => $value){
		$msg .= "<p><strong>".$key.": </strong>".$value."</p>"."\r\n";
	}
	
	
}



$msg .= '<p><strong>Страница:</strong> <a href='.$_SERVER['HTTP_REFERER'].'>'.$_SERVER['HTTP_REFERER'].' </p>';
$msg .= "</body></html>";


 
$headers= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers .= "From: КВИз multistar-avto.ru/quiz/<no-reply@multistar-avto.ru/quiz/>" . "\r\n";
$headers .= "Reply-To: multistar-avto" . "\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/html; charset=utf-8\r\n";




$to = 'MSApplication@yandex.ru';
$subject = 'Заявка с сайта multistar-avto.ru/quiz/';
 
  
  if (mail( $to, $subject, $msg, $headers)) {
	  echo 'отправлено';
  } else {
	  echo 'ошибка';
  }
  
  
  
?>