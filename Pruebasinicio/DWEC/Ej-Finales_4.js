function funcionConversiones(
    producto = "Producto genérico",
    precio = 100,
    impuestos = 21)

    {
    if (typeof producto !== "string") {
        producto = "Producto genérico";
    }

   
    precio = parseInt(precio);
    if (isNaN(precio)) {
        precio = 100;
    }

    
    impuestos = parseInt(impuestos);
    if (isNaN(impuestos)) {
        impuestos = 21;
    }

    console.log(`El producto es ${producto} el precio es ${precio} y su impuesto es ${impuestos}`)
}

funcionConversiones();                                
funcionConversiones("Producto real", 34, 47);         
funcionConversiones("asd.");                          
funcionConversiones("asd", true);                     
funcionConversiones("asd", true, false);             
funcionConversiones("asd", true, 23);                 
funcionConversiones(null, true, 23);    