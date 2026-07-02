function abrirCarta(){

    document.getElementById("envelope").classList.add("open");

    setTimeout(()=>{

        document.getElementById("letter").classList.add("show");

        document.getElementById("btn").style.display="none";

    },700);

}