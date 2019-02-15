<?php 
/*
Форма обратной связи может получать сообщения с любых почтовых ящиков.
Исправлена проблема кодировки при получении писем почтовым клиентом Outlook.
Вы скачали её с сайта Epic Blog https://epicblog.net Заходите на сайт снова!
ВНИМАНИЕ! Лучше всего в переменную myemail прописать почту домена, который использует сайт. А не mail.ru, gmail и тд.
*/
if(isset($_POST['submit'])){
/* Устанавливаем e-mail Кому и от Кого будут приходить письма */    
	$to = "aleksejsch@gmail.com"; // Здесь нужно написать e-mail, куда будут приходить письма	
    $from = "GeoZilla"; // Здесь нужно написать e-mail, от кого будут приходить письма, например no-reply@epicblog.net

/* Указываем переменные, в которые будет записываться информация с формы */
	// $first_name = $_POST['first_name'];
	$email = $_POST['e-mail'];
	// $phone = $_POST['phone'];
	$message = $_POST['message'];
	$problems = $_POST['problems'];
	$device = $_POST['device'];
	$file = $_POST['FileAttachment'];
    $subject = "Форма отправки сообщений с сайта GeoZilla";//Фиксированная тема письма

	
/* Переменная, которая будет отправлена на почту со значениями, вводимых в поля */
$mail_to_myemail = "Здравствуйте! 
Было отправлено сообщение с сайта! 
E-mail: $email 
device: $device 
problems: $problems 
file: $file 
Текст сообщения: $message";	
	
$headers = "From: $from \r\n";
	
/* Отправка сообщения, с помощью функции mail() */
    mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8');
    echo "Сообщение отправлено", " мы скоро свяжемся с Вами.";
	echo "<br /><br /><a href='/'>Вернуться на сайт.</a>";
}
?>
<!--Переадресация на главную страницу сайта, через 3 секунды-->
<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://geo.h-w-h-p.digital/contact.html");}
window.setTimeout("changeurl();",3000);
</script>
