<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';
// Переменные, которые отправляет пользователь

if (isset($_FILES['myfile'])){
$file = $_FILES['myfile'];
}

file_put_contents('log.txt', print_r($_FILES, true) . PHP_EOL, FILE_APPEND);



$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
       
    $mail->CharSet = "UTF-8";   
	/*$mail->isSMTP();	
    $mail->SMTPAuth   = true;

    $mail->Host       = 'smtp.yandex.ru';
    $mail->Username   = ''; 
    $mail->Password   = '';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', 'naschepravo.de '); */
    
	
	
	$mail->From = 'multistar87@yandex.ru';
	$mail->FromName = 'КВИЗ multistar-avto';
    //$mail->addAddress('fraim-stairs@yandex.ru');  
	$mail->addAddress('MSApplication@yandex.ru');  
    
        $mail->isHTML(true);
		$mail->Subject = 'Заявка с сайта multistar-avto.ru/quiz/ ';
		
			$mail->Body    = '';	
			
			
			
			if (isset($_POST)) {
    foreach($_POST as $key => $value){
		$mail->Body .= "<p><strong>".$key.": </strong>".$value."</p>"."\r\n";
	
	}
	
	
}
		
		
		// Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}
		
// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "$msg";
} else {
echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
}
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}