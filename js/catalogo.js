const media_containers = document.querySelectorAll(".media-container");

let media_containers_length = [];

function catalogoMostrar() {
    for(let i = 0; i < media_containers.length; i++) {
        let media_container = media_containers[i];
        media_container.innerHTML = "";
        
        let imgs = [];
        let datoids = [];

        for(let j = 0; j < datos.length; j++) {
            contenedor = datos[j].contenedor;
            for(let k = 0; k < contenedor.length; k++) {
                if (media_container.id === contenedor[k]) {
                    imgs.push(datos[j].imagen);
                    datoids.push(datos[j].id);
                }
            }
        }
        
        
        if(media_containers[i].id === "milista") {
            for (let j = 0; j < imgs.length; j++) {
                media_container.innerHTML += `
                <div class='item' id='${datoids[j]}'>
                    <img src='./img/${imgs[j]}.jpg' alt=''>
                    <div class='item-icons'>
                        <i class='fa-solid fa-play'></i>
                        <i class='fa-solid fa-xmark' id='${datoids[j]}' onclick="eliminarlista(this)"></i>
                    </div>
                </div>`
            }
        } else {
            for (let j = 0; j < imgs.length; j++) {
                media_container.innerHTML += `
                <div class='item' onclick='mostrar(this)' id='${datoids[j]}'>
                    <img src='./img/${imgs[j]}.jpg' alt=''>
                    <div class='item-icons'>
                        <i class='fa-solid fa-play' id='${datoids[j]}' onclick="reproducirpelicula(this)"></i>
                        <i class='fa-solid fa-plus' id='${datoids[j]}' onclick="agregarlista(this)"></i>
                    </div>
                </div>`
            }
        }
    }
}

function agregarlista(div) {
    nomodal = true;
    let datoid = div.id;
    for(let i = 0; i < datos.length; i++) {
        if(datoid === String(datos[i].id) && !datos[i].contenedor.includes("milista")) {
            datos[i].contenedor.push("milista");
            console.log(datos[i].contenedor);
            catalogoMostrar();
        }
    }
}

function eliminarlista(div) {
    let datoid = div.id;
    for(let i = 0; i < datos.length; i++) {
        if(datoid === String(datos[i].id) && datos[i].contenedor.includes("milista")) {
            datos[i].contenedor.pop()
            console.log(datos[i].contenedor);
            catalogoMostrar();
        }
    }
}

function reproducirpelicula(div) {
    let datoid = div.id;
    for(let i = 0; i < datos.length; i++) {
        if(datoid === String(datos[i].id)) {
            console.log(datos[i].url);
            window.open(datos[i].url);
        }
    }
}

function moverderecha(div) {
    let container = div.parentNode.childNodes;
    let media = container[7];
    media.scrollLeft += media.offsetWidth;
}

function moverizquierda(div) {
    let container = div.parentNode.childNodes;
    let media = container[7];
    media.scrollLeft -= media.offsetWidth;
}


window.addEventListener('onload', catalogoMostrar());

search_input.addEventListener("keyup", function() {
    let datobuscado = [];
    let media_container = document.querySelector(".search-container .media-container");
    let valuesearch = String(search_input.value);
    datos.forEach(dato => {
        if(dato.nombre.substring(0, valuesearch.length).toLowerCase() == valuesearch.toLowerCase()) {
            media_container.innerHTML = "";
            if (search_input.value === "") {
                datobuscado = [];
            } else {
                datobuscado.push(dato);
            }
            for(let i = 0; i < datobuscado.length; i++) {
                media_container.innerHTML += `
                <div class='item' id='${datobuscado[i].id}'>
                    <img src='./img/${datobuscado[i].imagen}.jpg' alt=''>
                    <div class='item-icons'>
                        <i class='fa-solid fa-play' id='${datobuscado[i].id}'  onclick="reproducirpelicula(this)"></i>
                        <i class='fa-solid fa-plus' id='${datobuscado[i].id}' onclick="agregarlista(this)"></i>
                    </div>
                </div>`
            }
        }
    });
})