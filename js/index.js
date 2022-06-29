const search = document.getElementById("search");
const searchicon_container = document.getElementById("searchicon-container");
const search_input = document.getElementById("search-input");
const search_container = document.getElementById("search-container");
const searchbar_container = document.getElementById("searchbar-container")
const search_auxiliar = document.getElementById("search-auxiliar");
const close_auxiliar = document.getElementById("close-auxiliar");

const open_sidebar = document.getElementById("open");
const close_sidebar = document.getElementById("close");
const sidenav = document.getElementById("sidenav");
const overlay = document.getElementById("overlay");

const user = document.getElementById("user");
const usericon_container = document.getElementById("usericon-container");






//MENÚ DE BUSQUEDA

search.addEventListener("click", function() {
    search_auxiliar.style.display = "none";
    search.classList.toggle("fa-magnifying-glass");
    search.classList.toggle("fa-xmark");

    if(search.classList == "fa-solid fa-xmark") {
        searchicon_container.style.left = "260px";
        searchicon_container.style.width = "20px";
        search_container.style.top = "80px";
        overlay.style.display = "block";
        overlay.style.zIndex = "1000";
        search_input.value = "";
        document.querySelector(".search-container .media-container").innerHTML = "";
        setTimeout(function() {
            search_input.style.width = "500px";
            search_input.style.opacity = "1";
        }, 500);
    }
    else {
        searchicon_container.style.left = "calc(100% - 220px)";
        searchicon_container.style.width= "100px";
        search_input.style.width = "0px";
        search_input.style.opacity = "0";
        search_container.style.top = "-220px";
        overlay.style.zIndex = "1001"
        overlay.style.display = "none"
    }
});
//MENÚ LATERAL

open_sidebar.addEventListener("click", function() {
    overlay.style.display = "block";
    sidenav.style.left = "0px";
    overlay.style.zIndex = "1003";
});

close_sidebar.addEventListener("click", function() {
    overlay.style.display = "none"
    sidenav.style.left = "-250px"   
});

overlay.addEventListener("click", function() {
    overlay.style.display = "none"
    sidenav.style.left = "-250px" 
    search_container.style.top = "-220px";
    searchicon_container.style.left = "calc(100% - 220px)";
    searchicon_container.style.width= "100px";
    search_input.style.width = "0px";
    search_input.style.opacity = "0";
    search.classList.toggle("fa-magnifying-glass");
    search.classList.toggle("fa-xmark");

})

//MENÚ DE PERFIL

user.style.top = "-150px";
usericon_container.addEventListener("click", function(e) {
    e.preventDefault();
    if(user.style.top == "-150px") {
        user.style.top = "70px";
        setTimeout(function() {
            user.style.zIndex = "1005";
        }, 500);
    }
    else {
        user.style.top = "-150px";
        user.style.zIndex = "1001";
    }
});




function seleccionarplanes(div) {
    document.getElementById("pack").innerText = `Estas usando: ${div.value}`;
}