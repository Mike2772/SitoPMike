var pulsanteGenera = document.getElementById("genera");
pulsanteGenera.addEventListener('click',
function() {

  var numero_random_uno = Math.floor((Math.random() * 6) + 1);
  var numero_random_due = Math.floor((Math.random() * 6) + 1);

  console.log(numero_random_uno);
  console.log(numero_random_due);

  document.getElementById('numerocasuale_uno').innerHTML= numero_random_uno;
  document.getElementById('numerocasuale_due').innerHTML= numero_random_due;

  if (numero_random_uno > numero_random_due) {
    document.getElementById("numerocasuale_uno").style.color = "green";
    document.getElementById("numerocasuale_due").style.color = "red";
  } else if (numero_random_due > numero_random_uno) {
    document.getElementById("numerocasuale_uno").style.color = "red";
    document.getElementById("numerocasuale_due").style.color = "green";

  } else {
    document.getElementById("numerocasuale_uno").style.color = "yellow";
    document.getElementById("numerocasuale_due").style.color = "yellow";
  }

}
);
