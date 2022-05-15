let totalSeries = 0;

const abrirModal = () => {
    limpiarModal()
    document.getElementById("modal").classList.remove("hidden")
}
const cerrarModal = () => {
    document.getElementById("modal").classList.add("hidden")
}
const limpiarModal = () => {
    document.getElementById("nombre-serie").value = ""
    document.getElementById("temporadas").value = ""
}

const agregarSerie = () => {
    let nombre = document.getElementById("nombre-serie").value;
    let temporadas = parseInt(document.getElementById("temporadas").value)
    
    let warning = checkInput(nombre, temporadas)

    if(warning){
        document.getElementById("warning").innerHTML = warning
    } else {
        totalSeries ++
        document.getElementById("warning").innerHTML = ""
        document.getElementById("cuerpoDeTabla").insertAdjacentHTML('beforeend', htmlNuevaSerie(nombre, temporadas, totalSeries))
    }    
}

const checkInput = (nombre, temporadas) => {
    let warning = null
    if(!nombre || !temporadas)
        warning = `Debes completar todos los campos antes de terminar.`

    if(temporadas < 1)
        warning = `Cantidad de temporadas inválidas.`

 
    return warning
}

const htmlNuevaSerie = (nombre, temporadas, id) => {
    return `
    <tr id="serie-${id}" name="serie" class="text-left"> 
    
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex gap-1">
            <button
                id="borrar-${id}"
                class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
                onClick="handleBorrar(id)"
                >
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="19px" height="19px">
                <path fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M20,4H4"/>
                <path d="M15 3v1H9V3l.429-.429C9.795 2.205 10.29 2 10.807 2h2.386c.517 0 1.012.205 1.377.571L15 3zM4.366 7l1.527 13.264C6.025 21.254 6.877 22 7.875 22h8.249c.998 0 1.85-.746 1.983-1.745L19.634 7H4.366z"/>
                </svg>
            </button>
            <button
                id="editar-${id}"
                class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
                onClick="handleEditar(${id})"
                >
                <?xml version="1.0" ?><!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                <svg
                    enable-background="new 0 0 19 19"
                    height="19px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 19 19"
                    width="14px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                    <g>
                        <path
                        d="M8.44,7.25C8.348,7.342,8.277,7.447,8.215,7.557L8.174,7.516L8.149,7.69   C8.049,7.925,8.014,8.183,8.042,8.442l-0.399,2.796l2.797-0.399c0.259,0.028,0.517-0.007,0.752-0.107l0.174-0.024l-0.041-0.041   c0.109-0.062,0.215-0.133,0.307-0.225l5.053-5.053l-3.191-3.191L8.44,7.25z"
                        fill="#231F20"
                        />
                        <path
                        d="M18.183,1.568l-0.87-0.87c-0.641-0.641-1.637-0.684-2.225-0.097l-0.797,0.797l3.191,3.191l0.797-0.798   C18.867,3.205,18.824,2.209,18.183,1.568z"
                        fill="#231F20"
                        />
                        <path
                        d="M15,9.696V17H2V2h8.953l1.523-1.42c0.162-0.161,0.353-0.221,0.555-0.293   c0.043-0.119,0.104-0.18,0.176-0.287H0v19h17V7.928L15,9.696z"
                        fill="#231F20"
                        />
                    </g>
                </svg>
        </div>
    </td>       
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p 
                id="nombre-${id}"
                class="text-gray-900 whitespace-no-wrap"
            >
            ${nombre}
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p 
                id="temporadas-${id}"
                class="text-gray-900 whitespace-no-wrap"
            >
            ${temporadas}
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p
                id="temporadas-vistas-${id}"
                class="text-gray-900 whitespace-no-wrap"
                onClick="handleModificarTemporadas(id)"
            >
            0
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p 
                id="porcentaje-${id}"
                class="text-gray-900 whitespace-no-wrap"
            >
            0%
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div>
                <button
                    id="subir-${id}"
                    class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
                    onClick="handleModificarTemporadas(id)"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 1792 1792"
                        >
                    <path
                        d="M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"
                        />
                    </svg>
                </button>
                <button
                    id="bajar-${id}"
                    class="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 font-bold py-1 px-2 rounded-sm"
                    onClick="handleModificarTemporadas(id)"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 1792 1792"
                        >
                    <path
                        d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
                        />
                    </svg>
                </button>
            </div>
        </td>
    </tr>`
}

const handleModificarTemporadas = (idBoton = '') => {
    let idCortado = idBoton.split('-')
    let operacion = idCortado[0]
    let id = idCortado[1]
    let temporadasTotal = parseInt(document.getElementById(`temporadas-${id}`).innerHTML)
    let temporadasVistas = parseInt(document.getElementById(`temporadas-vistas-${id}`).innerHTML)

    let resultadoFinal = 0;

    if (operacion === 'subir'){
        if(temporadasVistas < temporadasTotal)
            resultadoFinal = temporadasVistas +1
        else 
            resultadoFinal = temporadasVistas
    } else if (operacion === 'bajar') {
        if(temporadasVistas > 1)
            resultadoFinal = temporadasVistas -1
    }
    document.getElementById(`temporadas-vistas-${id}`).innerHTML = resultadoFinal
    document.getElementById(`porcentaje-${id}`).innerHTML = `${((resultadoFinal * 100 ) / temporadasTotal).toFixed(1)}%`
    
}

// Borrar serie
const handleBorrar = (idBoton = '') => {
    let id = idBoton.split('-')[1]
    document.getElementById(`serie-${id}`).remove()
}

// Editar serie
const abrirModalEditar = () => {
    limpiarModalEditar()
    document.getElementById("modal-edit").classList.remove("hidden")
}
const cerrarModalEditar = () => {
    document.getElementById("modal-edit").classList.add("hidden")
}
const limpiarModalEditar = () => {
    document.getElementById("nombre-serie-editar").value = ""
    document.getElementById("temporadas-editar").value = ""
}

const handleEditar = (id) => {
    abrirModalEditar()
    document.getElementById("guardar").addEventListener('click', ()=>editarSerie(id))
}

const editarSerie = (id = '') => {
    console.log({id})

    let nombre = document.getElementById("nombre-serie-editar").value;
    let temporadas = parseInt(document.getElementById("temporadas-editar").value)
    
    let warning = checkInput(nombre, temporadas)

    if(warning){
        document.getElementById("warning-editar").innerHTML = warning
    } else {
        document.getElementById(`nombre-${id}`).innerHTML = nombre
        document.getElementById(`temporadas-${id}`).innerHTML = temporadas
        document.getElementById(`porcentaje-${id}`).innerHTML = 0
        document.getElementById(`temporadas-vistas-${id}`).innerHTML = 0
        // Para eliminar el event listener
        let old_element = document.getElementById("guardar");
        let new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        cerrarModalEditar()
    }   
}


const buscar = () => {
  const tabla = document.getElementById("tabla");
  const texto = document.getElementById("buscador").value.toLowerCase();
  console.log(texto)
  for (let i = 1; i < tabla.rows.length; i++) {
    let encontrado = false;
    const celdas = tabla.rows[i].getElementsByTagName("td");
    for (let j = 0; j < celdas.length; j++) {
        if (
        celdas[j]?.firstElementChild?.id.includes("nombre") &&
        celdas[j].firstElementChild.nodeName === "P" ) 
        {
            if (celdas[j].firstElementChild.textContent
                .trim()
                .toLowerCase()
                .includes(texto)
                ) encontrado = true
        } 
    }
    if (encontrado) {
      (tabla.rows[i].style.display = "");
    }else (tabla.rows[i].style.display = "none");
  }
};