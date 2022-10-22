var timerDia = document.querySelectorAll("#dia");
var timerHora = document.querySelectorAll("#hora");
var timerMinuto = document.querySelectorAll("#minuto");
var timerSegundo = document.querySelectorAll("#segundo");
var dataInicios = new Date(2020,04,01);
var dataFinal = new Date(2020,04,01);
var dataHoje = new Date();

var s = dataHoje - dataInicios;
s = Math.floor((s/1000)/86400);
var quantidadeDias = ((Math.floor(s/3))*3);
dataInicios.setDate(dataInicios.getDate()+quantidadeDias);
dataFinal.setDate(dataFinal.getDate()+quantidadeDias+3);

var tempoRestante = dataFinal - dataHoje;
tempoRestante = tempoRestante/1000;

var dia = Math.floor(tempoRestante/86400);
var hor = Math.floor((tempoRestante-(dia*86400))/3600);
var min = Math.floor(((tempoRestante-(dia*86400))-(hor*3600))/60);
var seg =  Math.floor(((tempoRestante-(dia*86400))-(hor*3600))-(min*60));

function start(){
	timerDia.forEach((elements)=>{
				elements.innerText = dia;
			});
	timerHora.forEach((elements)=>{
				elements.innerText = hor  < 10 ? '0' + hor  : hor ;
			});
	timerMinuto.forEach((elements)=>{
				elements.innerText = min  < 10 ? '0' + min  : min ;
			});
	timerSegundo.forEach((elements)=>{
				elements.innerText = seg < 10 ? '0' + seg : seg ;;
			});
  if((seg-1)>=0){
    setTimeout('start();',1000);
		seg -=1;
	}
	else if((min-1)>=0){
		setTimeout('start();',1000);
		seg = 59;
		min -=1;
	}
	else if((hor-1)>=0){
		setTimeout('start();',1000);
		seg = 59;
		min = 59;
		hor -=1;
	}
	else if((dia-1)>=0){
		setTimeout('start();',1000);
		seg = 59;
		min = 59;
		hor = 23;
		dia -=1;
	}
}
start();