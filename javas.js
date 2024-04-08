
let listaProductosVodka = [
    {
        marca: "Smirnoff",
        precio: 5000,
    },
    {
        marca: "Absolut",
        precio: 7000,
    },
    {
        marca: "Sernova",
        precio: 4000,
    },
    {
        marca: "Sky",
        precio: 4500,
    }
]
let listaProductoFernet = [
    {
        marca: "Branca",
        precio: 7000,
    },
    {
        marca: "Cinzano",
        precio: 5000,
    },
    {
        marca: "Buhero negro",
        precio: 6000,
    },
    {
        marca: "1882",
        precio: 6500,
    }
]
let listaProductoCervezas = [
    {
        marca: "Quilmes",
        precio: 2000,
    },
    {
        marca: "Andes",
        precio: 2300,
    },
    {
        marca:"Salta",
        precio: 2000,
    },
    {
        marca:"Corona",
        precio: 2500,
    }
]
let producto = parseInt(prompt("Ingresa el producto que estas buscando:\n 1-Vodka\n 2-Fernet\n 3-Cerveza\n 0-Salir"));
let total = 0;
const descuentoEfectivo = 0.9;
const IVA = 1.21;
    while (producto != 0){
        switch(producto){
            case 1:
                let vodkas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-"+ listaProductosVodka[0].marca + "\n 2-"+ listaProductosVodka[1].marca + "\n 3-"+ listaProductosVodka[2].marca + "\n 4-"+ listaProductosVodka[3].marca));
                while (vodkas !== 0){    
                    if (vodkas == 0){
                        break;
                    }
                    else if (vodkas == 1){
                    alert("El precio del "+ listaProductosVodka[0].marca + " es $"+ listaProductosVodka[0].precio );
                    console.log("El usuario busco " + listaProductosVodka[0].marca);
                    let carritoSmirnoff = parseInt(prompt("Desea agregar un "+ listaProductosVodka[0].marca + " al carrito?\n 1-si\n 2-no "));
                        while (carritoSmirnoff != 2){
                            if (carritoSmirnoff == 1){
                                total += listaProductosVodka[0].precio;
                                alert("Agregaste un "+ listaProductosVodka[0].marca + "al carrito, total a pagar = $"+ total);
                                carritoSmirnoff = parseInt(prompt("Desea agregar otro "+ listaProductosVodka[0].marca + " al carrito?\n 1-si\n 2-no "));
                            }
                            else if (carritoSmirnoff == 2){
                            break;
                            }
                            else{
                                alert("ingrese una respuesta valida");
                                carritoSmirnoff = parseInt(prompt("Desea agregar un "+ listaProductosVodka[0].marca + " al carrito?\n 1-si\n 2-no "));
                            }
                        }
                    }
                    else if (vodkas == 2){
                    alert("el precio del "+ listaProductosVodka[1].marca + " es $"+ listaProductosVodka[1].precio);
                    console.log("El usuario busco "+ listaProductosVodka[1].marca);
                    let carritoAbsolut = parseInt(prompt("Desea agregar un "+ listaProductosVodka[1].marca + " al carrito?\n 1-si\n 2-no "));
                        while (carritoAbsolut != 2){
                            if (carritoAbsolut == 1){
                                total += + listaProductosVodka[1].precio ;
                                alert("Agregaste un "+ listaProductosVodka[1].marca + " al carrito, total a pagar = $"+ total);
                                carritoAbsolut= parseInt(prompt("Desea agregar otro "+ listaProductosVodka[1].marca + " al carrito?\n 1-si\n 2-no "));
                            }
                            else if (carritoAbsolut == 2){
                            break;
                            }
                            else{
                                alert("ingrese una respuesta valida");
                                carritoAbsolut = parseInt(prompt("Desea agregar un "+ listaProductosVodka[1].marca + " al carrito?\n 1-si\n 2-no "));
                            }
                        }
                    }
                    else if (vodkas == 3){
                        alert("el precio del "+ listaProductosVodka[2].marca + " es $"+ listaProductosVodka[2].precio);
                        console.log("El usuario busco "+ listaProductosVodka[2].marca);
                        let carritoSernova = parseInt(prompt("Desea agregar un "+ listaProductosVodka[2].marca + " al carrito?\n 1-si\n 2-no "));
                            while (carritoSernova != 2){
                                if (carritoSernova == 1){
                                    total += + listaProductosVodka[2].precio ;
                                    alert("Agregaste un "+ listaProductosVodka[2].marca + " al carrito, total a pagar = $"+ total);
                                    carritoSernova= parseInt(prompt("Desea agregar otro "+ listaProductosVodka[2].marca + " al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoSernova == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoSernova = parseInt(prompt("Desea agregar un "+ listaProductosVodka[2].marca + " al carrito?\n 1-si\n 2-no "));
                                }
                            }
                        }
                        else if (vodkas == 4){
                            alert("el precio del "+ listaProductosVodka[3].marca + " es $"+ listaProductosVodka[3].precio);
                            console.log("El usuario busco "+ listaProductosVodka[3].marca);
                            let carritoSky = parseInt(prompt("Desea agregar un "+ listaProductosVodka[3].marca + " al carrito?\n 1-si\n 2-no "));
                                while (carritoSky != 2){
                                    if (carritoSky == 1){
                                        total += + listaProductosVodka[3].precio ;
                                        alert("Agregaste un "+ listaProductosVodka[3].marca + " al carrito, total a pagar = $"+ total);
                                        carritoSky= parseInt(prompt("Desea agregar otro "+ listaProductosVodka[3].marca + " al carrito?\n 1-si\n 2-no "));
                                    }
                                    else if (carritoSky == 2){
                                    break;
                                    }
                                    else{
                                        alert("ingrese una respuesta valida");
                                        carritoSky = parseInt(prompt("Desea agregar un "+ listaProductosVodka[3].marca + " al carrito?\n 1-si\n 2-no "));
                                    }
                                }
                            }
                    else{
                        alert("Error");
                    }
                    vodkas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-"+ listaProductosVodka[0].marca + "\n 2-"+ listaProductosVodka[1].marca + "\n 3-"+ listaProductosVodka[2].marca + "\n 4-"+ listaProductosVodka[3].marca));
                    }
            break;
            case 2:
                let fernet = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-"+ listaProductoFernet[0].marca +" \n 2-"+ listaProductoFernet[1].marca +"\n 3-"+ listaProductoFernet[2].marca + "\n 4-"+ listaProductoFernet[3].marca ));
                while (fernet != 0){
                    if (fernet == 0){
                        break;
                    }
                    else if (fernet == 1){
                    alert("El precio del "+listaProductoFernet[0].marca+" es $"+listaProductoFernet[0].precio);
                    console.log("El usuario busco "+listaProductoFernet[0].marca);
                    let carritoBranca = parseInt(prompt("Desea agregar un "+listaProductoFernet[0].marca+" al carrito?\n 1-si\n 2-no "));
                            while (carritoBranca != 2){
                                if (carritoBranca == 1){
                                    total += listaProductoFernet[0].precio;
                                    alert("Agregaste un "+listaProductoFernet[0].marca+" al carrito, total a pagar = $"+ total);
                                    carritoBranca = parseInt(prompt("Desea agregar otro "+listaProductoFernet[0].marca+" al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoBranca == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoBranca = parseInt(prompt("Desea agregar un "+listaProductoFernet[0].marca+" al carrito?\n 1-si\n 2-no "));
                                }
                            }
                    }
                    else if (fernet == 2){
                    alert("el precio del "+listaProductoFernet[1].marca+" es $"+listaProductoFernet[1].precio);
                    console.log("El usuario busco "+listaProductoFernet[1].marca);
                    let carritoCinzano = parseInt(prompt("Desea agregar un "+listaProductoFernet[1].marca+" al carrito?\n 1-si\n 2-no "));
                            while (carritoCinzano != 2){
                                if (carritoCinzano == 1){
                                    total += listaProductoFernet[1].precio;
                                    alert("Agregaste un "+listaProductoFernet[1].marca+" al carrito, total a pagar = $"+ total);
                                    carritoCinzano= parseInt(prompt("Desea agregar otro "+listaProductoFernet[1].marca+" al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoCinzano == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoCinzano = parseInt(prompt("Desea agregar un "+listaProductoFernet[1].marca+" al carrito?\n 1-si\n 2-no "));
                                }
                            }
                    }
                    else if (fernet == 3){
                        alert("el precio del "+listaProductoFernet[2].marca+" es $"+listaProductoFernet[2].precio);
                        console.log("El usuario busco "+listaProductoFernet[2].marca);
                        let carritoBuheroNegro = parseInt(prompt("Desea agregar un "+listaProductoFernet[2].marca+" al carrito?\n 1-si\n 2-no "));
                                while (carritoBuheroNegro != 2){
                                    if (carritoBuheroNegro == 1){
                                        total += listaProductoFernet[2].precio;
                                        alert("Agregaste un "+listaProductoFernet[2].marca+" al carrito, total a pagar = $"+ total);
                                        carritoBuheroNegro= parseInt(prompt("Desea agregar otro "+listaProductoFernet[2].marca+" al carrito?\n 1-si\n 2-no "));
                                    }
                                    else if (carritoBuheroNegro == 2){
                                    break;
                                    }
                                    else{
                                        alert("ingrese una respuesta valida");
                                        carritoBuheroNegro = parseInt(prompt("Desea agregar un "+listaProductoFernet[2].marca+" al carrito?\n 1-si\n 2-no "));
                                    }
                                }
                        }
                        else if (fernet == 4){
                            alert("el precio del "+listaProductoFernet[3].marca+" es $"+listaProductoFernet[3].precio);
                            console.log("El usuario busco "+listaProductoFernet[3].marca);
                            let carrito1882 = parseInt(prompt("Desea agregar un "+listaProductoFernet[3].marca+" al carrito?\n 1-si\n 2-no "));
                                    while (carrito1882 != 2){
                                        if (carrito1882 == 1){
                                            total += listaProductoFernet[3].precio;
                                            alert("Agregaste un "+listaProductoFernet[3].marca+" al carrito, total a pagar = $"+ total);
                                            carrito1882= parseInt(prompt("Desea agregar otro "+listaProductoFernet[3].marca+" al carrito?\n 1-si\n 2-no "));
                                        }
                                        else if (carrito1882 == 2){
                                        break;
                                        }
                                        else{
                                            alert("ingrese una respuesta valida");
                                            carrito1882 = parseInt(prompt("Desea agregar un "+listaProductoFernet[3].marca+" al carrito?\n 1-si\n 2-no "));
                                        }
                                    }
                            }
                    else{
                        alert("Error");
                    }
                    fernet = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n1-"+ listaProductoFernet[0].marca +" \n 2-"+ listaProductoFernet[1].marca +"\n 3-"+ listaProductoFernet[2].marca + "\n 4-"+ listaProductoFernet[3].marca ));
                }
                break;
                    case 3:
                let cervezas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-"+listaProductoCervezas[0].marca +" \n 2-"+listaProductoCervezas[1].marca +"\n 3-"+listaProductoCervezas[2].marca+"\n 4-"+listaProductoCervezas[3].marca));
                while (cervezas != 0){
                    if (cervezas == 0){
                        break;
                    }
                    else if (cervezas == 1){
                    alert("El precio de la "+listaProductoCervezas[0].marca+" es "+listaProductoCervezas[0].precio);
                    console.log("El usuario busco "+listaProductoCervezas[0].marca);
                    let carritoQuilmes = parseInt(prompt("Desea agregar una "+listaProductoCervezas[0].marca+" al carrito?\n 1-si\n 2-no "));
                            while (carritoQuilmes != 2){
                                if (carritoQuilmes == 1){
                                    total += listaProductoCervezas[0].precio;
                                    alert("Agregaste un "+listaProductoCervezas[0].marca+" al carrito, total a pagar = $"+ total);
                                    carritoQuilmes = parseInt(prompt("Desea agregar otra "+listaProductoCervezas[0].marca+" al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoQuilmes == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoQuilmes = parseInt(prompt("Desea agregar una "+listaProductoCervezas[0].marca+" al carrito?\n 1-si\n 2-no "));
                                }
                            }
                    }
                    else if (cervezas == 2){
                    alert("el precio de la "+listaProductoCervezas[1].marca+" es $"+listaProductoCervezas[1].precio);
                    console.log("El usuario busco "+listaProductoCervezas[1].marca);
                    let carritoAndes = parseInt(prompt("Desea agregar una "+listaProductoCervezas[1].marca+" al carrito?\n 1-si\n 2-no "));
                                while (carritoAndes != 2){
                                    if (carritoAndes == 1){
                                        total += listaProductoCervezas[1].precio;
                                        alert("Agregaste una "+listaProductoCervezas[1].marca+" al carrito, total a pagar = $"+ total);
                                        carritoAndes= parseInt(prompt("Desea agregar otra "+listaProductoCervezas[1].marca+" al carrito?\n 1-si\n 2-no "));
                                    }
                                    else if (carritoAndes == 2){
                                    break;
                                    }
                                    else{
                                        alert("ingrese una respuesta valida");
                                        carritoAndes = parseInt(prompt("Desea agregar una "+listaProductoCervezas[1].marca+" al carrito?\n 1-si\n 2-no "));
                                    }
                                }
                    }
                    else if (cervezas == 3){
                        alert("el precio de la "+listaProductoCervezas[2].marca+" es $"+listaProductoCervezas[2].precio);
                        console.log("El usuario busco "+listaProductoCervezas[2].marca);
                        let carritoSalta = parseInt(prompt("Desea agregar una "+listaProductoCervezas[2].marca+" al carrito?\n 1-si\n 2-no "));
                                    while (carritoSalta != 2){
                                        if (carritoSalta == 1){
                                            total += listaProductoCervezas[2].precio;
                                            alert("Agregaste una "+listaProductoCervezas[2].marca+" al carrito, total a pagar = $"+ total);
                                            carritoSalta= parseInt(prompt("Desea agregar otra "+listaProductoCervezas[2].marca+" al carrito?\n 1-si\n 2-no "));
                                        }
                                        else if (carritoSalta == 2){
                                        break;
                                        }
                                        else{
                                            alert("ingrese una respuesta valida");
                                            carritoSalta = parseInt(prompt("Desea agregar una "+listaProductoCervezas[2].marca+" al carrito?\n 1-si\n 2-no "));
                                        }
                                    }
                        }
                        else if (cervezas == 4){
                            alert("el precio de la "+listaProductoCervezas[3].marca+" es $"+listaProductoCervezas[3].precio);
                            console.log("El usuario busco "+listaProductoCervezas[3].marca);
                            let carritoCorona = parseInt(prompt("Desea agregar una "+listaProductoCervezas[3].marca+" al carrito?\n 1-si\n 2-no "));
                                        while (carritoCorona != 2){
                                            if (carritoCorona == 1){
                                                total += listaProductoCervezas[3].precio;
                                                alert("Agregaste una "+listaProductoCervezas[3].marca+" al carrito, total a pagar = $"+ total);
                                                carritoCorona= parseInt(prompt("Desea agregar otra "+listaProductoCervezas[3].marca+" al carrito?\n 1-si\n 2-no "));
                                            }
                                            else if (carritoCorona == 2){
                                            break;
                                            }
                                            else{
                                                alert("ingrese una respuesta valida");
                                                carritoCorona = parseInt(prompt("Desea agregar una "+listaProductoCervezas[3].marca+" al carrito?\n 1-si\n 2-no "));
                                            }
                                        }
                            }
                    else{
                        alert("Error")
                    }
                cervezas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n1-"+listaProductoCervezas[0].marca +" \n 2-"+listaProductoCervezas[1].marca +"\n 3-"+listaProductoCervezas[2].marca+"\n 4-"+listaProductoCervezas[3].marca));
            }
            break;
            default:
                alert("ingrese una opcion valida");
        }
        producto = parseInt(prompt("Ingresa el producto que estas buscando:\n 1-Vodka\n 2-Fernet\n 3-Cerveza\n 0-Salir"));
    }

if (total != 0){
let modoDePago = parseInt(prompt("en el carrito llevas un total de: $"+ total+"\n Elije un metodo de pago:\n 1-Efectivo 2-Debito 3-Transferencia 0-Salir"));

    if (modoDePago == 0){
        alert("Vuelva pronto!");
    }else if (modoDePago == 1){
        alert("Por pagar en efectivo tenemos un descuento para vos!!");
        alert("El total a pagar es: $"+ totalConImpuestosYDescuentos(1,descuentoEfectivo));
    }else if (modoDePago == 2){
        alert("El total a pagar es: $"+ totalConImpuestosYDescuentos(IVA, 0));
    }else if(modoDePago == 3){
        alert("El total a pagar es: $"+ totalConImpuestosYDescuentos(IVA,0));
    }else{
        alert("Ingrese una opcion valida")
    }
}else{
    alert("Vuelva pronto!!")
}

function totalConImpuestosYDescuentos(impuestos, descuentos){
    let pagoConImpuestos = total * impuestos;
    let pagoConImpuestosYDescuentos;
    if (descuentos != 0){
        pagoConImpuestosYDescuentos = pagoConImpuestos * descuentos;
    }else{
        pagoConImpuestosYDescuentos = pagoConImpuestos;
    }
    return pagoConImpuestosYDescuentos;
}

