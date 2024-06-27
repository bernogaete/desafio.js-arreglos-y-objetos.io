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
    
    }
    
    
    
        ];
    
    
    let html = ""
    
    let d2 = document.querySelector("#allVentasPropiedades")
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
    
            d2.innerHTML = html



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
                        }]
            
                        
            let html2 = ""
            
            let d = document.querySelector("#allAlquilerPropiedades")
            for (let item2 of propiedades_alquiler)
                {
            html2 += `<div class="col-md-4 mb-4">
                         <div class="card">
                             <img src="${item2.src}" class="card-img-top" alt="Imagen del departamento"/>
                            <div class="card-body">
                                <h5 class="card-title">${item2.nombre}</h5>
                                 <p class="card-text">${item2.descripcion}</p>
                              <p><i class="fas fa-map-marker-alt"></i> ${item2.ubicacion}</p>
                               <p><i class="fas fa-bed"></i> ${item2.habitaciones} | <i class="fas fa-bath"></i> ${item2.baños}</p>
                                <p><i class="fas fa-dollar-sign"></i> ${item2.costo}</p>
                                ${item2.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                                ${item2.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
                            </div>
                        </div>
                     </div>` }
            
                    d.innerHTML = html2