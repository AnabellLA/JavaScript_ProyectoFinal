let divBandanas = document.getElementById('divBandanas')
let divCorreas = document.getElementById('divCorreas')
let divPlacas = document.getElementById('divPlacas')

if(divBandanas !== null) {
    fetch('../data/bandanas.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(producto =>{
            divBandanas.innerHTML += `
            <div id="${producto.id}" class="col" style="margin-bottom: 20px">
                <div class="card shadow.sm">
                    <img src=${producto.imagen} class="card-img-top" alt="correa_${producto.id}">
                <div class="card-body">
                    <h4 class="card-title" style="font-size: 16px; font-weight: 500;">${producto.nombre}</h4>
                    <h1 class="pricing-card-title precio" style="font-size: 16px; font-weight: 800;">S/ ${producto.precio}</h1>
                    <h2 class="card-text" style="font-size: 14px; font-weight: 400;">Talla ${producto.talla}</h2> 
                    <a href="" class="btn btn-block agregar-carrito" style="background-color: rgba(236, 127, 57, 1); color:white;" data-id="${producto.id}">Comprar</a>
                </div>
                </div>
            </div>
        `
        })
})
}
if(divCorreas !== null) {
    fetch('../data/correas.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(producto =>{
            divCorreas.innerHTML += `
            <div id="${producto.id}" class="col" style="margin-bottom: 20px">
                <div class="card shadow.sm">
                    <img src=${producto.imagen} class="card-img-top" alt="correa_${producto.id}">
                <div class="card-body">
                    <h4 class="card-title" style="font-size: 16px; font-weight: 500;">${producto.nombre}</h4>
                    <h1 class="pricing-card-title precio" style="font-size: 16px; font-weight: 800;">S/ ${producto.precio}</h1>
                    <h2 class="card-text" style="font-size: 14px; font-weight: 400;">Talla ${producto.talla}</h2> 
                    <a href="" class="btn btn-block agregar-carrito" style="background-color: rgba(236, 127, 57, 1); color:white;" data-id="${producto.id}">Comprar</a>
                </div>
                </div>
            </div>
        `
        })
})
}
if(divPlacas !== null) {
    fetch('../data/placas.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(producto =>{
            divPlacas.innerHTML += `
            <div id="${producto.id}" class="col" style="margin-bottom: 20px">
                <div class="card shadow.sm">
                    <img src=${producto.imagen} class="card-img-top" alt="correa_${producto.id}">
                <div class="card-body">
                    <h4 class="card-title" style="font-size: 16px; font-weight: 500;">${producto.nombre}</h4>
                    <h1 class="pricing-card-title precio" style="font-size: 16px; font-weight: 800;">S/ ${producto.precio}</h1>
                    <h2 class="card-text" style="font-size: 14px; font-weight: 400;">Talla ${producto.talla}</h2> 
                    <a href="" class="btn btn-block agregar-carrito" style="background-color: rgba(236, 127, 57, 1); color:white;" data-id="${producto.id}">Comprar</a>
                </div>
                </div>
            </div>
        `
        })
})
}
