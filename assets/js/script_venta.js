const propiedadesVenta = [//propiedades_ventas = [

// Venta 1
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://toptenrealestatedeals.com/wp-content/uploads/2021/10/012-960x640.jpg',
    descripcion: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: '4 Habitaciones',
    baños: '4 Baños',
    costo: '$5.000',
    smoke: false,
    pets: false
    },

    // Venta 2

    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/03/03/14885426899262.jpg',
        descripcion: ' Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: '2 Habitaciones',
        baños: '1 Baño',
        costo: '$.1200',
        smoke: true,
        pets: true

    },

    // Venta 3
    {

    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://media.architecturaldigest.com/photos/5698273ea7d16cbd6b658f6a/master/pass/160-Leroy-1.jpghttps://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/03/03/14885426899262.jpg',
    descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: '3 Habitaciones',
    baños: '3 Baño',
    costo: '$154.500',
    smoke: false,
    pets: true

},

// Venta 4

{
    nombre: 'Villas Toscanas',
    src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/139919179.jpg?k=47fb51272854f1379312539d34cadd68b5b31bfa6b47a62917f5144e9fa07fe1&o=&hp=1',
    descripcion: ' Todas las unidades están equipadas con terraza con vistas a la montaña, cocina con nevera y horno, y baño privado con ducha.',
    ubicacion: 'Unnamed Road Ex Hijuela 4, Lote 34, 2240000 Limache, Chile',
    habitaciones: '2 Habitaciones',
    baños: '3 Baños',
    costo: '$444.500',
    smoke: true,
    pets: true

},

// Venta 5

{

nombre: 'Habitación de lujo con vista al mar',
    src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/278573144.jpg?k=7ec2afab5e4c48b2318c280eb347f9d4bb64df21d1aa29941c98efd3c629e74b&o=&hp=1',
    descripcion: ' Casablu Hotel se encuentra en Valparaíso y dispone de jardín, salón de uso común, terraza y wifi gratis en todo el alojamiento',
    ubicacion: '387 San Enrique, 2370783 Valparaíso, Chile ',
    habitaciones: '1 Habitación',
    baños: '1 Baño',
    costo: '$100.500',
    smoke: false,
    pets: false
},

// Venta 6

{

    nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/61797554.jpg?k=98f9b2015a7cba509ce78b4fe4d63e5e9cc75759478b4c0a968212042b114a95&o=&hp=1',
        descripcion: ' Increíble lugar único en el mundo, con vista a Torres del Paine',
        ubicacion: 'Sector Lago Grey S/N, 8320000 Torres del Paine, Chile',
        habitaciones: '2 Habitaciones',
        baños: '2 Baño',
        costo: '$330.500',
        smoke: false,
        pets: false
    }



    ]


let html = ""

let d = document.querySelector("#allVentasPropiedades")
for (let item of propiedadesVenta)
    {
html += `<div class="col-md-4 mb-4">
             <div class="card">
                 <img src="${item.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                     <p class="card-text">${item.descripcion}</p>
                  <p><i class="fas fa-map-marker-alt"></i> ${item.ubicacion}</p>
                   <p><i class="fas fa-bed"></i> ${item.habitaciones} | <i class="fas fa-bath"></i> ${item.baños}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${item.costo}</p>
                    ${item.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                    ${item.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
                </div>
            </div>
         </div>` }

        d.innerHTML = html