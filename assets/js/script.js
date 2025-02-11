function changeContent() {
    const section = document.getElementById("dynamic-section");
    section.innerHTML = "<p>CLICK ON EXTRA MAGIC</p>";
}

document.getElementById("change-btn").addEventListener("click", changeContent);

function myFunction() {
    document.getElementById("demo").src='https://www.w3schools.com/js/pic_bulboff.gif';
  }
function my2Function(){
    document.getElementById("demo").src='https://www.w3schools.com/js/pic_bulbon.gif'
}

document.getElementById("prova").addEventListener("click", myFunction);
document.getElementById("OK").addEventListener("click", my2Function);


function toggle(){
    document.getElementById("menu").classList.toggle("hidden");

}

document.getElementById("menu-toggle").addEventListener("click", toggle);