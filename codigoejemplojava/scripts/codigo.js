function cambiar(){

    console.log("Hola mundo");


}
function colorBG(){
   color= document.getElementById("cambioColor");
color.classList.remove("bg-secondary-subtle");
color.classList.add("bg-primary-subtle");


}
function colorBack(){
     colorB=document.getElementById("cambioColor");
     color.classList.remove("bg-primary-subtle");
     color.classList.add("bg-secondary-subtle");





}

function colorClick(){
    colorC= document.getElementById("cambioColor");
    colorC.classList.remove("bg-primary-subtle");
    colorC.classList.add("bg-warning");





}