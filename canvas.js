
var letraLidaMaiuscula;
var palavraForca;
var palavraTestada=[];
var letraDigitada=[];
var palavra = ['ALURA','ORACLE','JAVA'];
var letDig;
var conta;
var tela = document.getElementById("forca");
var pincel = tela.getContext("2d");
var erro;
var existe=false;
var contador;
var novaPalavraDig; 
var existeAdic=false;

pincel.font = "50px Arial Black";
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 800, 1200);

var botaoJogo = document.getElementById("iniciar-jogo");   
var botaoAdicionar = document.getElementById("nova-palavra");
var botaoLimpa = document.getElementById("limpar-jogo");
var textoEscrito = document.getElementById("input-nova-palavra");
var tamanho;
var numero;

function limparJogo()
{

    pincel.clearRect(0,0,tela.width,tela.height);
    //window.location.reload(false);
    pincel.fillStyle = 'lightgray';
    pincel.fillRect(0, 0, 800, 1200);
    letraLidaMaiuscula;
    palavraForca;
    palavraTestada=[];
    letraDigitada=[];
    letDig;
    conta;
    letraLida;
    tamanho;
    document.getElementById("input-nova-palavra").value ='';
    


}

function desenhandoInicioDoJogo(palavraImpressa) {
    tamanho = palavra.length;
    numero= sortiada(tamanho);
    var palavraImpressa = palavraSortiada(numero);
    desenhatriangulo();
    var tamanhaPalavraImpressa = palavraImpressa.length;
    conta = tamanhaPalavraImpressa;
    erro=1;

var x=150;
var y=600;
    for (i=0;i<=(tamanhaPalavraImpressa-1);i++)
    {

            linhaDaPalavra(x,y);
            x=x+50;
    }

return(palavraImpressa);

}


function palavraSortiada(numero)
{
var palavraEscolida;
    for(var i=0;i<=palavra.length;i++)
    {

        if ( i == numero)
        {
              palavraEscolida=palavra[i] ;
              
        }
    }
    return(palavraEscolida);
}



function sortiada(x)
{
return Math.round(Math.random() * (x-1));


}


function desenhatriangulo()
{   pincel.fillStyle="black";
    pincel.beginPath();
    pincel.moveTo(0,800);
    pincel.lineTo(100,700);
    pincel.lineTo(200,900);
    pincel.fill();

    
//pincel.fillText(numero,500,500);
   }

botaoJogo.onclick = desenhandoInicioDoJogo;
botaoAdicionar.onclick = adicionaPalavra;
botaoLimpa.onclick = limparJogo;


function primeiroRetangulo()
{

    pincel.fillStyle ="black";
    pincel.fillRect(90,400,10,320);
}

function segundoRetangulo()
{

    pincel.fillStyle ="black";
    pincel.fillRect(90,80,10,320);
}
function terceitoRetangulo()
{

    pincel.fillStyle ="black";
    pincel.fillRect(80,90,320,10);   
}

function quartoRetangulo() 
{
    pincel.fillStyle ="black";
    pincel.fillRect(380,80,10,100);   
}
function circuloCabeca()
{

    pincel.fillStyle="black";
    pincel.beginPath();

    pincel.arc(385, 200, 50, 0, 2*3.14);
    pincel.fill();
}


function linhaCorpo()
{
    pincel.fillStyle ="black";
    pincel.fillRect(380,250,10,200);   
}

function linhaBracoE()
{
      pincel.fillStyle ="black";
      pincel.beginPath()
      pincel.moveTo(380,300);
      pincel.lineTo(220,220);
      pincel.stroke();
     
}

function linhaBracoD()
{
      pincel.fillStyle ="black";
      pincel.beginPath()
      pincel.moveTo(390,300);
      pincel.lineTo(550,220);
      pincel.stroke();
     
}
function linhaPernaD()
{
      pincel.fillStyle ="black";
      pincel.beginPath()
      pincel.moveTo(390,450);
      pincel.lineTo(500,500);
      pincel.stroke();
     
}
function linhaPernaE()
{
      pincel.fillStyle ="black";
      pincel.beginPath()
      pincel.moveTo(260,500);
      pincel.lineTo(380,450);
      pincel.stroke();
     
}
function linhaDaPalavra(x,y)
{

    pincel.fillStyle ="black";
    pincel.fillRect(x,y,30,5);

}
function adicionaPalavra(novaPalavra)
{
letraDigitada=[];
novaPalavraDig = textoEscrito.value.toUpperCase();
for(p=0;p<palavra.length;p++)
{

    if (palavra[p]==novaPalavraDig)
    {
                existeAdic=true;
                alert('Esta palavra ja foi digitada,por favor Escolha outra:');
                break;
    }

}
if (existeAdic==false)
{
    palavra.push(novaPalavraDig);
    

}

 letraDigitada=[];   
}


function detecta(evento)
{
    evento = evento || window.event; 
    var tecla =evento.keyCode || evento.which;
    
return String.fromCharCode (tecla);
}

document.onkeypress= function(evento)
{
var letraLida = detecta(evento);
letraLidaMaiuscula = letraLida.toUpperCase();
palavraForca = palavraSortiada(numero);
letDig = aguardaLetra();

if (palavraForca.includes(letDig))
{
visual();
}
else{
    mgsPerdeu();
    }
}

function visual()
{
var x =150;
var y =580;
                    for(var i=0;i<palavraForca.length;i++)
                    {
                        if (palavraForca[i]==letDig)
                                {
                                    palavraTestada[i]=letDig;
                                    pincel.fillText(letDig,x,y);
                                    conta =conta-1;
                                    
                                }
        
                    x=x+50; 
                    if (conta==0)
                        {
                            msgVence();

                        }   
                    }
            
                


    }


function msgVence()
{  
    
    pincel.fillText("Você Venceu, Parabéns", 500,300);

}
function mgsPerdeu()
{
   while(erro<=11)
   { 
        if (erro==1)
        {
            primeiroRetangulo();
            pincel.fillText(letDig,150,800);
            erro=erro+1;
            break;
        } else if (erro==2) 
        {
                segundoRetangulo();
                pincel.fillText(letDig,200,800);
                erro=erro+1;
                break;
        }else if(erro==3)
        {
                terceitoRetangulo();
                pincel.fillText(letDig,250,800);
                erro=erro+1;
                break;
        }else if(erro==4)
        {
                quartoRetangulo();
                pincel.fillText(letDig,300,800);
                erro=erro+1;
                break;
        }else if(erro==5)
        {
                circuloCabeca();
                pincel.fillText(letDig,350,800);
                erro=erro+1;
                break;
        }else if(erro==6)
        {
            linhaCorpo();
            pincel.fillText(letDig,400,800);
            erro=erro+1;
            break;
        }else if (erro==7)
        {
            linhaBracoD();
            pincel.fillText(letDig,450,800);
            erro=erro+1;
            break;
        }else if(erro==8)
        {
            linhaBracoE();
            pincel.fillText(letDig,500,800);
            erro=erro+1;
            break;
        }else if(erro==9)
        {
            linhaPernaD();
            pincel.fillText(letDig,550,800);
            erro=erro+1;
            break;
        } else if(erro==10)
        {
            linhaPernaE();
            pincel.fillText(letDig,600,800);
            erro=erro+1;
            msgFim();
            
        }else
        {
            msgFim();
            break;
        }
        
    }
}

function msgFim(){
    pincel.fillText('Você Pedeu!!!!!!',500,300);
}

function aguardaLetra()
{
            for(l=0;l<letraDigitada.length;l++)
            {
                if((letraDigitada[l]==letraLidaMaiuscula)&&(palavraTestada.incluides(letraLidaMaiuscula)))
                {
                existe=true;
                alert('Voce ja DIGITOU esta letra ,por favor Escolha outra:');
                conta=conta+1;
                break;
                }
            }
    
    if (existe==false)
    {
        letraDigitada.push(letraLidaMaiuscula);
        contador++;
    } else
    {erro=erro-1;
    }
        

return(letraDigitada[letraDigitada.length-1]);
}