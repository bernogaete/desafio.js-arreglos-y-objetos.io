const propiedades_alquiler = [

    // Alquiler 1
        {
        nombre: 'Las Majadas Hotel & Centro de Reuniones',
        src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/171938498.jpg?k=4ed72086668e1388eebe55502efa93e8019cfc8afc7994f7d6e0ec675d06d7ac&o=&hp=1',
        descripcion: ' Hotel rodeado de naturaleza, viñas, árboles centenarios y la cordillera',
        ubicacion: 'Jose Julio Nieto s/n, 9480000 Pirque, Chile',
        habitaciones: '1 Habitaciones',
        baños: '1 Baños',
        costo: '$255.000',
        smoke: false,
        pets: false
        },


         // Alquiler 2
         {
            nombre: 'Tunquén Campomar',
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/557473423.jpg?k=3ba6938c4d14dc1252b5468add12dab1111b7f7e66be78a7241b6257feb660b4&o=&hp=1',
            descripcion: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',
            ubicacion: 'Parcela 88 Condominio Campomar de Tunquén, Tunquén, Chile',
            habitaciones: '4 Habitaciones',
            baños: '4 Baños',
            costo: '$155.000',
            smoke: true,
            pets: true
            },

             // Alquiler 3
        {
            nombre: 'Hotel Agua Nativa',
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/486634635.jpg?k=45878d6e6e2c951b3bb758681fdf967a5b6142101d09531939ead6cf35323fab&o=&hp=1',
            descripcion: ' El Hotel Agua Nativa se encuentra en Puerto Varas, a 2,1 km del Museo Pablo Fierro y a 1,3 km de la Casa Raddatz.',
            ubicacion: 'Avenida los Castaños 5, 5550000 Puerto Varas, Chile',
            habitaciones: '1 Habitación',
            baños: '1 Baños',
            costo: '$105.000',
            smoke: false,
            pets: false
            },

             // Alquiler 4
        {
            nombre: 'Hotel Casa Werner',
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/51542206.jpg?k=da9e44fb70e540717c8df5924e7b9972a154b9e07aa385f5be6921524590ade4&o=&hp=1',
            descripcion: ' El Hotel Casa Werner está situado a orillas de un lago, en Llanquihue. El servicio incluye desayuno',
            ubicacion: 'Av. Manuel Antonio Matta 849, LLanquihue (6km de Puerto Varas), 5610000 Puerto Varas, Chile',
            habitaciones: '4 Habitaciones',
            baños: '4 Baños',
            costo: '$75.000',
            smoke: false,
            pets: true
            },

             // Alquiler 5
        {
            nombre: 'Hotel Magnolia',
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/317899720.jpg?k=ccfe17e664c39b2bce1fca4a41afad0022d0146cbf8370676a657f903293b83c&o=&hp=1',
            descripcion: ' El Hotel Magnolia Santiago es un hotel de diseño y ofrece habitaciones elegantemente decoradas, combinadas con el más alto confort, en una mansión preservada como patrimonio.',
            ubicacion: 'Paseo Huerfanos 539, Centro de Santiago, 8320150 Santiago, Chile',
            habitaciones: '1 Habitaciones',
            baños: '1 Baños',
            costo: '$135.000',
            smoke: false,
            pets: false
            },

             // Alquiler 6
        {
            nombre: 'Cabañas Kalinaw',
            src: 'https://cf2.bstatic.com/xdata/images/hotel/max1024x768/526423148.jpg?k=846ece6922b6c1a5e2883df0e09ebec9700eaa91f82f4c08dee3d7d550ffd50a&o=&hp=1',
            descripcion: ' El chalet de montaña ofrece terraza, vistas a la montaña, zona de estar, TV de pantalla plana vía satélite, cocina totalmente equipada con nevera y horno, y baño privado con ducha y secador de pelo',
            ubicacion: 'Ruta N-55 Termas de Chillan, 3880000 Las Trancas, Chile',
            habitaciones: '2 Habitaciones',
            baños: '2 Baños',
            costo: '$85.000',
            smoke: true,
            pets: true
            },
]
let html = ""

let d = document.querySelector("#allAlquilerPropiedades")
for (let item of propiedades_alquiler)
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