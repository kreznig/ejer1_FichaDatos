function enviar(){
  var name=document.getElementById('name').value;
  var lastname=document.getElementById('lastname').value;
  var dni=document.getElementById('dni').value;
  var adress=document.getElementById('dir').value;
  var datos= "<ul><li>Nombre: "+name+"</li><li>Apellidos: "+lastname+"</li><li>DNI: "+dni+"</li><li>Dirección: "+adress+"</li></ul>";
  document.getElementById("ficha").innerHTML=datos;

  document.getElementById('name').value="";
  document.getElementById('lastname').value="";
  document.getElementById('dni').value="";
  document.getElementById('dir').value="";
}
