function jugar() {
  let seguirJugando = true;

  while (seguirJugando) {
  
    let usuarioNumero;
    do {
      usuarioNumero = parseInt(prompt("Ingresa un número entre 3 y 6:"));
    } while (isNaN(usuarioNumero) || usuarioNumero < 3 || usuarioNumero > 6);

    
    let numero = Math.floor(Math.random() * 9) + 1;

    
    let intento = prompt(
      "¿Crees que tu número es 'mayor', 'menor' o 'igual' al número secreto?"
    ).toLowerCase();

  
    if (
      (intento === "mayor" && usuarioNumero > numero) ||
      (intento === "menor" && usuarioNumero < numero) ||
      (intento === "igual" && usuarioNumero === numero)
    ) {
      alert("¡Correcto! El número que escogio el dispocitivo es " + numero);
    } else {
      alert("Incorrecto. El número que escogio el dispositivo es " + numero);
    }
  let respuesta = prompt("¿Quieres seguir jugando? (si/no)").toLowerCase();
    seguirJugando = respuesta === "si";
  }

  alert("Marvin Júarez, No. 25001064");
}
jugar();