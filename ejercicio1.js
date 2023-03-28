/*1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
en ese momento se crea un número aleatorio que el usuario deberá adivinar, 
la interfaz del usuario debe tener además un input para ingresar un número y 
un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario 
adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero 
que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.
 */



  const generarNumberAleatorio = function () {
    let numeroAleatorio = Math.floor(Math.random() * 100);
    document.getElementById('inicioJuego').value=numeroAleatorio
    //seteo el valor obtenido aleatorio
    const btnJuego = document.getElementById('inicioJuego');
    btnJuego.className = `btn btn-secondary`;
    btnJuego.innerHTML = '<b>Juego Iniciado</b>';
    btnJuego.disabled = true;  
  }
  function juego(){
    let numeroIngresado=document.getElementById("numeroInput").value;
    let numeroAleatorio=document.getElementById("inicioJuego").value;
    //recupero el valor del id
    if(numeroAleatorio == numeroIngresado){
        alert(`El Numero fue encontrado`);
    }else{
        alert(`El numero: ${numeroIngresado} es incorrecto volver a intentar`);
    }
    console.log(numeroIngresado);
    console.log(numeroAleatorio);

  }
  

   





  const colores = ['primary', 'secondary', 'info', 'success', 'danger','warning'];

function cambiarTitulo(){
    console.log('aqui quiero cambiar el titulo');
    //traer un elemento del html
    let tituloPrincipal = document.querySelector('h1');
    // let tituloPrincipal = document.getElementById('nombreId');
    // let tituloPrincipal = document.getElementsByClassName('container');
    // let tituloPrincipal = document.getElementsByTagName('h1');
    console.log(tituloPrincipal);
    tituloPrincipal.innerHTML = '<b>Titulo</b> modificado';
    let colorAleatorio = getRandomColor(0, colores.length-1);
    tituloPrincipal.className = `display-4 text-${colores[colorAleatorio]}`;

}

function getRandomColor(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function enviar() {
    var formulario = document.getElementById("myform");
    var dato = formulario[0];
   
      console.log("Enviando el formulario");
      formulario.submit();
     
  }
  
