function kaanna()
{
  var haettuTeksti = document.getElementById('teksti').value;
  var sananPituus = haettuTeksti.length;
  alert(sananPituus);
  var uusisana = "";
  for( x = sananPituus-1 ; x >= 0; x--)
  {
      uusisana = uusisana + haettuTeksti[x];

  }
  document.getElementById("vastaus").innerHTML = uusisana;
}
