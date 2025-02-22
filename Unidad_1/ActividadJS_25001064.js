alert("Para saber cual es su signo Zodiacal, dale en aceptar");
let mes = Number(prompt("Digite su mes: "));
let fecha = Number(prompt("Digite su fecha:"));

if (mes < 1 || mes > 12){
  alert("Digite un mes válido");
}
else if (fecha < 1 || fecha > 31){
  alert("Digite una fecha válida ");
}
else if ((mes === 1 && fecha >= 21) || (mes === 2 && fecha <= 19)){
  alert("Su signo es Acuario");
}
else if ((mes === 2 && fecha >= 20) || (mes === 3 && fecha <= 20)){
  alert("Su signo es Piscis");
}
else if ((mes === 3 && fecha >= 21) || (mes === 4 && fecha <= 20)){
  alert("Su signo es Aries");
}
else if ((mes === 4 && fecha >= 21) || (mes === 5 && fecha <= 20)){
  alert("Su signo es Tauro");
}
else if ((mes === 5 && fecha >= 21) || (mes === 6 && fecha <= 20)){
  alert("Su signo es Gémenis");
}
else if ((mes === 6 && fecha >= 21) || (mes === 7 && fecha <= 22)){
  alert("Su signo es Cáncer");
}
else if ((mes === 7 && fecha >= 23) || (mes === 8 && fecha <= 23)){
  alert("Su signo es Leo");
}
else if ((mes === 8 && fecha >= 24) || (mes === 9 && fecha <= 22)){
  alert("Su digno es virgo");
}
else if ((mes === 9 && fecha >= 23) || (mes === 10 && fecha <= 23)){
  alert("Su signo es Libra");
}
else if ((mes === 10 && fecha >= 24) || (mes === 11 && fecha <= 22)){
  alert("Su signo es Escorpio");
}
else if ((mes === 11 && fecha >= 23) || (mes === 12 && fecha <= 21)){
  alert("Su signo es Sagitario");
}
else if ((mes === 12 && fecha >= 22) || (mes === 1 && fecha <= 20)){
  alert("Su signo es Capricornio");
}