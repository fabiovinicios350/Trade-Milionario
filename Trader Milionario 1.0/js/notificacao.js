const name = ["Tiago","Reinan","Arthur","Jose Paulo","Natasha","Jonathan","Elisa","Carolina","Elena","Carlos","Camila","Fábio","Kelvin","Gustavo","Fernanda","Debora","Raquel","Liliane","Suelen","Larissa","Leticia","Beatriz","Wesley","Barbara","Alex","Alessandre","Caio","Kaique","Adriano","Isaque","Rafael","Leonardo","Marcos","Jeniffer","Lucas","Leandro","Amanda","Renato","Rogerio","Felipe","Carla","Hugo","Luiz","Michelle","Thais","Maikon","Vinicius","Marcelo","Juliano","Veronica"];
var numberPessoashj = Math.floor(Math.random()*20);
var numberPessoasmes = Math.floor(Math.random()*800);
var numberPessoas6mes = Math.floor(Math.random()*3000);
if(numberPessoashj < 5){
  numberPessoashj=5;
}

if(numberPessoasmes < 200){
  numberPessoasmes=250;
}

if(numberPessoas6mes < 1000){
  numberPessoas6mes=1261;
}

var elemento = document.querySelector('.notificacoes');
var tempo = document.getElementById('tempo');
var conteudo = document.getElementById("conteudoNotificacao");
var cont =0;

setInterval(()=>{
  var numberName = Math.floor(Math.random()*50);
  const tipoConteudo =["<li id='img'><img src='../img/checkIcon.png' width='100%'></li><li><p><span>"+name[numberName]+"</span> comprou <span>Método trader milionário</span></p></li><li id='fechar' onclick='fecharNotificacao()'>x</li>", "<li id='img'><img src='../img/checkIcon.png' width='100%'></li><li><p><span>"+numberPessoashj+" pessoas</span> Compraram o <span>Método trader milionário</span> hoje</p></li><li id='fechar' onclick='fecharNotificacao()'>x</li>","<li id='img'><img src='../img/checkIcon.png' width='100%'></li><li><p><span>"+numberPessoasmes+" pessoas</span> Compraram o <span>Método trader milionário</span> no Mês passado</p></li><li id='fechar' onclick='fecharNotificacao()'>x</li>","<li id='img'><img src='../img/checkIcon.png' width='100%'></li><li><p><span>"+numberPessoas6mes+" pessoas</span> Compraram o <span>Método trader milionário</span> nos ultimos 6 meses</p></li><li id='fechar' onclick='fecharNotificacao()'>x</li>"];
  if(elemento.classList[1]=="animation"){
    elemento.classList.remove("animation");
  }

  tempo.style.animation = "";
  if(cont==3){
    conteudo.innerHTML = tipoConteudo[1];
    elemento.style.background = "rgb(24, 142, 197)";
  }else if(cont==5){
    conteudo.innerHTML = tipoConteudo[2];
  elemento.style.background = "rgb(24, 142, 197)";

  }
  else if(cont==8){
    conteudo.innerHTML = tipoConteudo[3];
  elemento.style.background = "rgb(24, 142, 197)";

  }else{
    conteudo.innerHTML = tipoConteudo[0];
    elemento.style.background = "rgb(43, 198, 43)";
  }
  
  setTimeout(()=>{
    elemento.classList.add("animation");
    tempo.style.animation = "10s tempo";
  },35000);
  cont++;
},45000);

function fecharNotificacao(){
  elemento.classList.remove("animation");
}


