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

    //method_some()

    let method_findIndex = ()=>{
        let miIndice = dias.findIndex( dia => dia === 'Jueves')

        console.log(miIndice)


        let productoBuscar = 'Maiz'
        let miProducto = producto.findIndex( prod => prod.descripcion === productoBuscar)
        console.log(`El producto ${productoBuscar} se encuentra en la posicion ${miProducto}`)

    }

    //method_findIndex()

    const method_reduce = () =>{
        let total = 0
        producto.forEach( prod => total+= prod.precio)
        console.log(total)

        let result = producto.reduce((total,prod) => total + prod.precio,0)
        console.log(result)
    }

    //method_reduce()

    //METODO FILTER
    let method_filter = ()=>{
        let resultado,resultado2
        resultado = producto.filter(prod => prod.precio > 5.50 )
        resultado2 = producto.filter(producto => producto.descripcion === "Frijol")
        console.log(resultado)
        console.log(resultado2)
    }

    //method_filter()

    //METODO FIND

    let method_find = () => {
        let result
        producto.forEach((prod,index)=>{
            if (prod.descripcion === 'Frijol'){
                result = producto[index].descripcion
            }
        })

        let resultado = producto.find(prod => prod.descripcion === 'Frijol')

        console.log(result)
        console.log(resultado.precio)
    }

    //method_find()

    //METODO EVERY
    let method_every = ()=>{
        const result = producto.every( prod => prod.precio > 1)

        if (result) {
            console.log("Todos los precios son mayores a 1")
        }

    }

    //method_every()


    //METODO CONCAT
    let method_concat = ()=>{
        const primerosMeses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio']
        const segundosMeses = ['Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

        const unionMeses = primerosMeses.concat(segundosMeses)

        unionMeses.map(mes => (console.log(mes  )))

        //CON SPRED OPERATION
        const mesesUnion = [...primerosMeses , ...segundosMeses]
        mesesUnion.map(mes => console.log(mes))

    }

   // method_concat()

    //SPRED OPERATOR
    let method_spred_operator = ()=>{
        
    }








})()