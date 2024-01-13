(function(){
    'use strict'


    const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo']

    const producto = [
        {descripcion: 'Coca cola',precio: 5.50},
        {descripcion: 'Pepsi Cola',precio:5.00},
        {descripcion: 'Arroz',precio: 3.50},
        {descripcion: 'Frijol',precio:8.75},
        {descripcion: 'Maiz',precio:14}
    ]

    let method_some = function(){
        //Comprobar si un valor existe en un areglo
        dias.forEach( dia =>{
            if ( dia == 'Lunes') console.log('Lunes si existe')
        })

        const buscarProducto = producto.some( prod => {
            return prod.descripcion === 'Coca cola'
        })

        if ( buscarProducto ) {
            console.log('Producto encontrado....')
        }else{
            console.log('El producto no esta en el stock de nuestra tienda')
        }
    }

    method_some()

})()