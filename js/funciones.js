function Tab(a)
{
  if(a == 3)
  {
    $("#Juego").show();
    $("#MensajeJuego").empty();
    $("#Piedra").prop("disabled",false);
    $("#Papel").prop("disabled",true);
    $("#Tijera").prop("disabled",false);
  }else{
    $("#Juego").hide();
  }
}

function Play(valor){
  // Retorna un número aleatorio entre min (incluido) y max (excluido)
var computadora = Math.floor(Math.random() * (4 - 1)) + 1;
Valida(computadora,valor);

}

function Valida(computadora, humano)
{
  $("#MensajeJuego").empty();
  var seleccion = Nombre(humano);
  var pc = Nombre(computadora);
  if(computadora == humano)
  {
    //Empate
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2>Empate :( </h2>");
  }
  else if(computadora == 1 && humano == 2)
  {
    //Gana Humano
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2 class='ganador'>Ganaste yey</h2>");
  }
  else if(computadora == 1 && humano == 3)
  {
    //Gana Computadora
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2 class='perdedor'>Perdiste lol</h2>");
  }
  else if(computadora == 2 && humano == 1)
  {
    //Gana Computadora
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2 class='perdedor'>Perdiste lol</h2>");
  }
  else if(computadora == 2 && humano == 3)
  {
    //Gana Humano
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2 class='ganador'>Ganaste yey</h2>");
  }
  else if(computadora == 3 && humano == 1)
  {
    //Gana Humano
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2 class='ganador'>Ganaste yey</h2>");
  }
  else if(computadora == 3 && humano == 2)
  {
    //Gana Computadora
    $("#MensajeJuego").append("<h2>Elegiste: " + seleccion + "</h2>");
    $("#MensajeJuego").append("<h2>La PC eligió: " + pc + "</h2>");
    $("#MensajeJuego").append("<h2 class='perdedor'>Perdiste lol</h2>");
  }

   $("#Piedra").prop("disabled",true);
   $("#Papel").prop("disabled",true);
   $("#Tijera").prop("disabled",true);
}

function Nombre(x)
{
  var nombre;
  switch(x){
    case 1:
      nombre = "Piedra";
      break;
    case 2:
      nombre = "Papel";
      break;
    case 3:
      nombre = "Tijera";
      break;
    default:
      nombre = "Error";
      break;
  }
  return nombre;
}
