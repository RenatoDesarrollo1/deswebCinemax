const modal_milista = document.getElementById("modal-milista");

let nomodal = false;


function mostrar(div) {
    if(nomodal) {
        nomodal = false;
    } else {
        let datoid = div.id;
        for(let i = 0; i < datos.length; i++) {
            if(datoid === String(datos[i].id)) {
                document.getElementById("modal").style.display = "flex";
                document.getElementById("modal-info").innerHTML = `<h1>${datos[i].nombre}</h1><span class="modal-info-clasification">${datos[i].clasificacion}</span><span> ${datos[i].duracion} /</span><span> ${datos[i].categorias.join('-')}</span><div class="modal-info-description">${datos[i].descripcion}</div>`;

                document.getElementById("modal-container-img").innerHTML=`<img src="img/${datos[i].imagen}.jpg" alt="">`;
                if(datos[i].tipo === "Pelicula") {
                    document.getElementById("modal-buttons").innerHTML=`<button class="button-view" id="${datos[i].id}" onclick="reproducirpelicula(this)">Ver</button>`
                }
                else if(datos[i].tipo === "Serie") {
                    document.getElementById("modal-buttons").innerHTML=`
                        <select name="select-temporada" id="select-temporada" onchange="cambiarTemporada(this, ${i})"></select>
                        <select name="select-capitulo" id="select-capitulo"></select>
                        <button class="button-view" id="${datos[i].id}" onclick="reproducirpelicula(this)">Ver</button>
                    `; 
                    for(let j = 0; j < datos[i].temporadas; j++) {
                        document.getElementById("select-temporada").innerHTML += `
                        <option value="${j}">Temporada ${j + 1}</option>
                        `
                    }
                    for(let j = 0; j < datos[i].capitulos[0]; j++) {
                        document.getElementById("select-capitulo").innerHTML += `
                        <option >Capitulo ${j + 1}</option>
                        `
                    }
                }
            }
        }
    }
}

function cambiarTemporada(div, id) {
    document.getElementById("select-capitulo").innerHTML = "";
    for(let i = 0; i < datos[id].capitulos.length; i++) {
        if(div.value == i) {
            for(let j = 0; j < datos[id].capitulos[i]; j++) {
                document.getElementById("select-capitulo").innerHTML += `
                <option >Capitulo ${j + 1}</option>
                `
            }
        }
    };
}

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});


document.getElementById("milista-open").addEventListener("click", function () {
    modal_milista.style.display = "flex";
});


document.getElementById("close-button-milista").addEventListener("click", function() {
    modal_milista.style.display = "none";
});
