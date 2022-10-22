<?php

	require 'teste/PHPMailer/PHPMailerAutoload.php';

	// $email = $_POST["lbEmail"];
  $menssagem = "	<p>teste</p>";
  $assunto = "teste";

	$mail = new PHPMailer();

	$mail->SMTPDebug = 0;
	$mail->CharSet="utf-8";
	$mail->isSMTP();
	$mail->Host = "smtp.mail.yahoo.com";
	$mail->SMTPAuth = true;
	$mail->Username = "cidocamaria@yahoo.com.br";
	$mail->Password = "paloma2010";
	$mail->SMTPSecure = 'tls';
	$mail->Port = 465;


	$mail->FromName ='Site';
	$mail->From = 'cidocamaria@yahoo.com.br';
	$mail->addAddress("fabiofuba350@yahoo.com.br","fabio");

	$mail->isHTML(true);
	$mail->Subject = $assunto;
	$mail->Body = $menssagem;

	$mail->send();

	if(!$mail->send()) {
		echo $mail->ErrorInfo;
	}
	else {
		echo "allright";
	}

?>
