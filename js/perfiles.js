const modal = document.getElementById("modal");

let perfiles =["Darwin"];

let iedit
let action = "";


function mostrarPerfiles() {
    document.getElementById("block-image").innerHTML = "";
    for(let i = 0; i < perfiles.length; i++) {
        document.getElementById("block-image").innerHTML += `
        <figure>
            <a href="menu.html">
                <img class="main-image" src="./assets/perfil${i}.png" alt="Perfil1">
            </a>
            <figcaption>${perfiles[i]} <i class="fa-solid fa-pen-to-square" id="${i}" onclick="editar(this)"></i> <i class="fa-solid fa-xmark" id="${i}" onclick="eliminar(this)"></i></figcaption>
        </figure>
        `
    }
    document.getElementById("block-image").innerHTML += `
        <button class="add-button "id="add" onclick="abrir()">
            +
        </button>
    `
}



window.addEventListener("onload", mostrarPerfiles());

function abrir() {
    document.getElementById("modal-title").innerHTML = "Añadir perfil"
    modal.style.display = "flex";
    document.getElementById("modal-image").setAttribute("src", `./assets/perfil${perfiles.length}.png`);
    action = "add";
}

function close() {
    modal.style.display = "none";
}

document.getElementById("close").addEventListener("click", () => close()
)

function agregar(e) {
    window.event.preventDefault();
    let perfil = e.perfilname.value;
    if(action == "add") {
        perfiles.push(perfil);
    }
    else if (action === "edit") {
        perfiles[iedit] = perfil;
    }
    e.perfilname.value = "";
    mostrarPerfiles();
    close();

    if(perfiles.length == 5) {
        document.getElementById("add").style.display = "none";
    }
}

function editar(div) {
    iedit = div.id;
    modal.style.display = "flex";
    document.getElementById("modal-title").innerHTML = `Editar ${perfiles[iedit]}`
    document.getElementById("modal-image").setAttribute("src", `./assets/perfil${iedit}.png`);
    action = "edit";
}

function eliminar(div) {
    perfiles.splice(div.id);
    mostrarPerfiles();
}