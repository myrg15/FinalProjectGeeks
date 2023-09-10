const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
 

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){ //funcion comprar
    e.preventDefault();//para evitar el recargo de la tabla
    if(e.target.classList.contains('agregar-carrito')){//verdadero si el elemento que desencadenó el evento tiene la clase agregar-carrito
        const elemento = e.target.parentElement.parentElement;//target=> elemento en el que se produjo un evento, ejemplo click en elemento LISTING LASHES  
        leerDatosElemento(elemento);//usamos parentElement para obtener el nodo padre del elemento DOM actual

    }

}

function leerDatosElemento(elemento) { //leer elementos, recibimos la immagen,titulo, precio, id 
    const infoElemento = {
        imagen: elemento.querySelector('img').src, 
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')//boton Agregrar al carrito
    
    }
    //insertarCarrito(infoElemento);
}

/*function insertarCarrito(elemento){
    
    const row = document.createElement('tr');//crea elemento dentro de la tabla, signo backtick ` define los elementos del carrito en forma de lista, en este caso tipo tabla, usamos el innerHTML para que inserte una nueva celda al final de la fila
    row.innerHTML = `
        
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>
        
        <td>
            ${elemento.titulo}
        </td>       
        
        <td>
            ${elemento.precio}
        </td>

        <td>
            <a herf="#" class= "borrar" data-id="${elemento.id}"> X </a>
        </td>
        `;
        td=> usamos para definir una celda que contiene datos
        lista.appendChild(row);//Añade el elemento li al final de la lista 
}*/

function eliminarElemento(e){ 
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){//mientras=> click en eliminar
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');//consulta por medio de querySelector si elemento pertenece Agregrar al carrito
    
        }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;

    //function dragdropCarrito(infoElemento);
}
    
    /*function dragdropCarrito(elemento){
        const produc = document.querySelector(elemento);    
        produc.addEventListener('dragstart');
        produc.addEventListener('dragend');
        produc.addEventListener('drag');
        //const row = document.createElement('tr');//crea elemento dentro de la tabla, signo backtick ` define los elementos del carrito en forma de lista, en este caso tipo tabla, usamos el innerHTML para que inserte una nueva celda al final de la fila
        produc.innerHTML = `
            
            <td>
                <img src="${elemento.imagen}" width=100 >
            </td>
            
            <td>
                ${elemento.titulo}
            </td>       
            
            <td>
                ${elemento.precio}
            </td>
    
            <td>
                <a herf="#" class= "borrar" data-id="${elemento.id}"> X </a>
            </td>
            `;
            //td=> usamos para definir una celda que contiene datos
            lista.appendChild(produc);//Añade el elemento li al final de la lista 
    }*/
        var carr = document.getElementById("carrito");
        var prod = document.getElementsByClassName("products");

        carr.addEventListener("dragover", (ev) => permitirSoltar(ev));
        carr.addEventListener("drop", (ev) => soltar(ev));

            for(var i= 0; i<prod.length; i++){
                prod[i].setAttribute("draggable", "true");
                prod[i].setAttribute("id", "products"+i)
                prod[i].addEventListener("dragstart",(ev) => iniciarArrastre(ev))                
        
            }
            function iniciarArrastre(ev){
                ev.data.Transfer.setData("idproducts", ev.target.id);  
            }

            function permitirSoltar(ev){
               ev.preventDefault(); //que no cambien por defecto el permitir soltar
            }

            function soltar(ev){
                ev.preventDefault;
                var data = ev.dataTransfer.getData("idproducts");
                carr.appendChild(document.getElementById(data));

            }


            