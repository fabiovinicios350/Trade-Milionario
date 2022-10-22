<?php

include ("PHPMailer/class.phpmailer.php");

function email($para_email,$para_nome,$assunto,$html){

	$email = new PHPMailer;
	$email->IsSMTP();

	$email->Host = "smtp.gmail.com";
	$email->Port = 587;
	$email->SMTPAuth = true;
	$email->Username = "testefabiofuba@gmail.com";
	$email->Password = "teste2020";

	$email->From="testefabiofuba@gmail.com";
	$email->FromName="Site";
	$email->AddAddress($para_email,$para_nome);
	$email->Subject = $assunto;
	$email->MsgHtml($html);

	if($email->Send()){
		return "1";
	}else{
		return $email->ErrorInfo;
	}

}

$corpo_html = "<html><body><p>p</p></body></html>";

$controle = email("fabiofuba350@yahoo.com.br","fabio","teste",$corpo_html );
if($controle==1){
	echo "envio ok";
} else{
	echo $controle;
}

?>
