const $tiempo = document.querySelector(".tiempo"),
 $fecha = document.querySelector(".fecha");
 

function relojDigital() {
    let f = new Date();
    let dia = f.getDate();
    let mes = f.getMonth() +1;
    let year = f.getFullYear();
    let diaSemana = f.getDay();
    
    dia = ("0" + dia).slice(-2);
    mes = ("0" + mes).slice(-2)

    let timeString = f.toLocaleTimeString();
    $tiempo.innerHTML = timeString;

    
    let semana = ["DOMINGO", "LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES", "SABADO"];
     
    let mostrarSemana = (semana[diaSemana]);

    $fecha.innerHTML = ` ${mostrarSemana} ${dia}/${mes}/${year}`;

 
     
}


 setInterval(() => {
    relojDigital();
 }, 1000);

 