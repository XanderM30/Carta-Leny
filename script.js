function abrirCarta(){

    document.getElementById("envelope").classList.add("open");

    setTimeout(()=>{

        document.getElementById("letter").classList.add("show"); //Esta línea hace que la carta aparezca después de 700 milisegundos

        document.getElementById("btn").style.display="none";

    },700);

}