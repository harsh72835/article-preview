var btn = document.querySelector(".btn");
var container = document.querySelector(".container");
var div = document.querySelector(".div");
btn.addEventListener("click", function(){
    container.classList.add("container-show");
    div.classList.remove("container");
})