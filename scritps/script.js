let cont = 1;

window.addEventListener("load", (event) => {
    document.getElementById("imagen-principal").src = "assets/img/f-" + cont + ".jpg";
    document.querySelector(".fd").addEventListener("click", cambiarImagen);
    document.querySelector(".fi").addEventListener("click", cambiarImagen);
    document.getElementById("imagen-principal").addEventListener("click", () => {
        document.querySelector(".container").style.display = "none";
    });
    document.querySelectorAll(".cerrar").forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelector(".container").style.display = "none";
        });
    })
    document.querySelectorAll(".cimagen").forEach((e) => {
        e.addEventListener("click", cambiarImagen);
    })
    document.querySelector(".flechadc").addEventListener("click", () => {
        desplazar("derecha", 5);
    });
    document.querySelector(".flechaic").addEventListener("click", () => {
        desplazar("izquierda", 5);
    });
});

function desplazar(sentido, numero) {
    if (sentido == "derecha") {
        for (let x = 0; x < numero; x++) {
            document.querySelector(".carousel").insertAdjacentElement("beforeend", document.querySelector(".carousel").firstElementChild)
        }
    } else if (sentido == "izquierda") {
        for (let x = 0; x < numero; x++) {
            document.querySelector(".carousel").insertAdjacentElement("afterbegin", document.querySelector(".carousel").lastElementChild)
        }
    }
}

function cambiarImagen(e) {
    let barra, punto;

    if (e.target.classList.contains("fd") || e.target.classList.contains("flechad")) {
        desplazar("derecha", 1);
        barra = document.querySelector(".carousel").firstElementChild.src.lastIndexOf("/");
        punto = document.querySelector(".carousel").firstElementChild.src.lastIndexOf(".");
        cont = document.querySelector(".carousel").firstElementChild.src.slice(barra + 1, punto).split("-")[1];
    } else if (e.target.classList.contains("fi") || e.target.classList.contains("flechai")) {
        desplazar("izquierda", 1);
        barra = document.querySelector(".carousel").firstElementChild.src.lastIndexOf("/");
        punto = document.querySelector(".carousel").firstElementChild.src.lastIndexOf(".");
        cont = document.querySelector(".carousel").firstElementChild.src.slice(barra + 1, punto).split("-")[1];
    } else {
        barra = e.target.src.lastIndexOf("/");
        punto = e.target.src.lastIndexOf(".");
        cont = e.target.src.slice(barra + 1, punto).split("-")[1];
        let lista = document.querySelectorAll(".cimagen");
        for (let im of lista) {
            if (im != e.target) {
                document.querySelector(".carousel").insertAdjacentElement("beforeend", document.querySelector(".carousel").firstElementChild)
            } else {
                break;
            }
        }
    }

    document.getElementById("imagen-principal").src = "assets/img/f-" + cont + ".jpg";
}