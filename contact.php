<?php
if (isset ($_POST['message'])) {
  $to = "aleksejsch@gmail.com";
  $from = "GeoZilla";
  $subject = "From GeoZilla".$_SERVER['HTTP_REFERER'];
  $message = "User: ".$_POST['email']."\nEmail User ".$_POST['email']."\nСообщение: ".$_POST['message']."\nHelp with: ".$_POST['problems']."\nDevice: ".$_POST['device']."\n\nSite: ".$_SERVER['HTTP_REFERER'];
// $message = "Имя пользователя: ".$_POST['nameFF']."\nEmail пользователя ".$_POST['contactFF']."\nТелефон пользователя ".$_POST['telFF']."\nСообщение: ".$_POST['projectFF']."\n\nАдрес сайта: ".$_SERVER['HTTP_REFERER'];

  $boundary = md5(date('r', time()));
  $filesize = '';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";
  $message="
Content-Type: multipart/mixed; boundary=\"$boundary\"
 
--$boundary
Content-Type: text/plain; charset=\"utf-8\"
Content-Transfer-Encoding: 7bit
 
$message";
     if(is_uploaded_file($_FILES['userfile']['tmp_name'])) {
         $attachment = chunk_split(base64_encode(file_get_contents($_FILES['userfile']['tmp_name'])));
         $filename = $_FILES['userfile']['name'];
         $filetype = $_FILES['userfile']['type'];
         $filesize = $_FILES['userfile']['size'];
         $message.="
 
--$boundary
Content-Type: \"$filetype\"; name=\"$filename\"
Content-Transfer-Encoding: base64
Content-Disposition: attachment; filename=\"$filename\"
 
$attachment";
     }
   $message.="
--$boundary--";
 
  if ($filesize < 10000000) { // проверка на общий размер всех файлов. Многие почтовые сервисы не принимают вложения больше 10 МБ
    mail($to, $subject, $message, $headers);
    echo $_POST['email'].', Message sent!';
  } else {
    echo 'Sorry, no email sent. All files are larger than 10 MB.';
  }
}
?>
