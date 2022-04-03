class Carrito{
    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }

    leerDatosProducto(producto){
        const infoProducto = {
            imagen : producto.querySelector('img').src,
            nombre : producto.querySelector('h4').textContent,
            precio : producto.querySelector('h1').textContent,
            talla : producto.querySelector('h2').textContent,
            id : producto.querySelector('a').getAttribute('data-id'),
            cantidad : 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(productoLS){
            if(productoLS.id === infoProducto.id){
                productosLS = productoLS.id;
            }
        });
        if(productosLS === infoProducto.id){
            swal({
                title: "Oops...",
                text: "Parece que ya agregaste este producto",
                icon: "warning",
                timer: 2000,
            });
        }
        else{
            this.insertarCarrito(infoProducto);
        }
    }

    insertarCarrito(producto){
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
            <img src="${producto.imagen}" width =100>
            </td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td>${producto.talla}</td>
            <td>
                <a href="#" class="borrar-producto fas fa-times-circle" style="color: rgba(216, 35, 97);" data-id="${producto.id}">
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
        this.obtenerProductosLocalStorage();
        this.textoCarritoVacio();
        swal({
            title: "¡Producto Agregado!",
            timer: 1000,
            icon: "success",
        });
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

    vaciarCarrito(e){
        e.preventDefault();
        while(listaProductos.firstChild){
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        swal({
            title: "¡Tu carrito fue vaciado!",
            icon: "info",
            timer: 1000,
        });
        return false;
    }

    guardarProductosLocalStorage(producto){
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerProductosLocalStorage(){
        let productoLS;
        if(localStorage.getItem('productos') === null){
            productoLS = [];
            totalCart.innerHTML = `0`;
        }
        else{
            productoLS = JSON.parse(localStorage.getItem('productos'));
            totalCart.innerHTML = `${productoLS.length}`;
        }
        return productoLS;
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
        this.textoCarritoVacio();
    }

    leerLocalStorage(){
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function(producto){
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                <img src="${producto.imagen}" width =100>
                </td>
                <td>${producto.nombre}</td>
                <td>${producto.precio}</td>
                <td>${producto.talla}</td>
                <td>
                    <a href="#" class="borrar-producto fas fa-times-circle" style="color: rgba(216, 35, 97);" data-id="${producto.id}">
                </td>
            `;
            listaProductos.appendChild(row);
        })
        this.textoCarritoVacio();
    }

    textoCarritoVacio(){
        let totalProductos;
        totalProductos = this.obtenerProductosLocalStorage();
        if(totalProductos.length === 0){
            emptyCarrito.innerHTML=`Carrito vacío`
        }
        else{
            emptyCarrito.innerHTML=``
        }
    }

    vaciarLocalStorage(){
        localStorage.clear();
    }

    resumenPedido(e){
        let index = document.getElementById('index');
        e.preventDefault();
        if(this.obtenerProductosLocalStorage().length === 0){
            swal({
                title: "Oops...",
                text: "El carrito está vacío, agrega algún producto",
                timer: 2000,
                icon: "error",
            });
        }else{
            if(index != null) {
                location.href = "./pages/compra.html";
            }else{
                location.href = "./compra.html";
            }
        }
    }
}

