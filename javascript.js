var przycisk = document.getElementById('button');
var kontener = document.getElementById("container");

przycisk.addEventListener("click",pierwszaFunkcjaMoja);

function pierwszaFunkcjaMoja(){
    let show = document.getElementById("container");
    show.innerHTML = Math.floor(Math.random() * 22);
    if(show===4){
        show.innerHTML =" Dziła";
    }
    else{
        true;
    }
}
