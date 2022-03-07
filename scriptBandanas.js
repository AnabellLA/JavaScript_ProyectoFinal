/*Bandanas*/

    class Bandana {
        constructor(id, nombre, precio, talla, imagen) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
            this.talla = talla;
            this.imagen = imagen;
        }
    }
    
    const banadana1 = new Bandana(1,"Bandana Dulce o Caca", 40, "Small", "../Assest/pic_1.jpg")
    const banadana2 = new Bandana(2,"Bandana Trick or Treat", 40, "Medium", "../Assest/pic_2.jpg")
    const banadana3 = new Bandana(3,"Bandana Kid's Nightmare", 40, "Large", "../Assest/pic_3.jpg")
    const banadana4 = new Bandana(4,"Bandana I smell Children", 40, "X-Large", "../Assest/pic_4.jpg")
    const banadana5 = new Bandana(5,"Bandana Kid's Nightmare", 40, "Large", "../Assest/pic_3.jpg")
    const banadana6 = new Bandana(6,"Bandana Trick or Treat", 40, "Medium", "../Assest/pic_2.jpg")
    const banadana7 = new Bandana(7,"Bandana I smell Children", 40, "X-Large", "../Assest/pic_4.jpg")
    const banadana8 = new Bandana(8,"Bandana Kid's Nightmare", 40, "Large", "../Assest/pic_3.jpg")
    const banadana9 = new Bandana(9,"Bandana Dulce o Caca", 40, "Small", "../Assest/pic_1.jpg")
    const banadana10 = new Bandana(10,"Bandana Trick or Treat", 40, "Medium", "../Assest/pic_2.jpg")
    const banadana11 = new Bandana(11,"Bandana Dulce o Caca", 40, "Small", "../Assest/pic_1.jpg")
    const banadana12 = new Bandana(12,"Bandana I smell Children", 40, "X-Large", "../Assest/pic_4.jpg")
    
    const bandanas = [banadana1, banadana2, banadana3, banadana4, banadana5, banadana6, banadana7, banadana8, banadana9, banadana10, banadana11, banadana12]
    
    let divBandanas = document.getElementById('divBandanas')
    
    bandanas.forEach(bandanaEnArray => {
        divBandanas.innerHTML += `
            <div id="${bandanaEnArray.id}" class="clase__main__producto__inicio__filtro__lista__P">
                <img src=${bandanaEnArray.imagen} alt="bandana_${bandanaEnArray.id}">
                <p class="clase__main__producto__inicio__filtro__lista__P__titulo">${bandanaEnArray.nombre}</p>
                <p class="clase__main__producto__inicio__filtro__lista__P__detalle">Talla ${bandanaEnArray.talla}</p> 
                <p class="clase__main__producto__inicio__filtro__lista__P__precio">S/ ${bandanaEnArray.precio}.00</p>
            </div>
        `
    })