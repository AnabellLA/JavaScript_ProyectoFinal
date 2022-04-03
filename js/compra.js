class Compra{
    obtenerProductosLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
        }
        else{
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }

    leerLocalStorageCompra(){
        let productosLS;
        var regex = /(\d+)/g;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            let precioNum = Number(producto.precio.match(regex));
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${producto.imagen}" width =100></td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.talla}</td>
                <td>${producto.cantidad}</td>
                <td id='subtotales'>S/ ${precioNum * producto.cantidad}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="color: rgba(216, 35, 97); font-size: 22px" data-id="${producto.id}">
                </td>
            `;
            listaCompra.appendChild(row);
        })
    }

    eliminarProducto(e){
        e.preventDefault();
        let producto, productoID;
        if(e.target.classList.contains('borrar-producto')){
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
    }

    eliminarProductoLocalStorage(productoID){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS, index){
            if(productoLS.id === productoID){
                productosLS.splice(index,1);
            }
        });
        localStorage.setItem('productos',JSON.stringify(productosLS));
        this.obtenerProductosLocalStorage();
        this.calcularTotal();
    }

    calcularTotal(){
        let productoLS;
        var regex = /(\d+)/g;
        let total = 0, subtotal = 0, igv = 0;
        productoLS = this.obtenerProductosLocalStorage();
        for(let i = 0; i < productoLS.length; i++){
            let element = Number(productoLS[i].precio.match(regex) * productoLS[i].cantidad);
            total = total + element;
        }
        igv = parseFloat(total * 0.18).toFixed(2);
        subtotal = parseFloat(total - igv).toFixed(2);
        document.getElementById('subtotal').innerHTML="S/ " + subtotal;
        document.getElementById('igv').innerHTML="S/ " + igv;
        document.getElementById('total').innerHTML="S/ " + total.toFixed(2);
    }
}

const compra = new Compra();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');

cargarEventos();

function cargarEventos() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });
    compra.calcularTotal();
}