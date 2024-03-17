
let producto = parseInt(prompt("Ingresa el producto que estas buscando:\n 1-Vodka\n 2-Fernet\n 3-Cerveza\n 0-Salir"));
let total = 0;
const descuentoEfectivo = 0.9;
const IVA = 1.21;
    while (producto != 0){
        switch(producto){
            case 1:
                let vodkas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-Smirnoff \n 2- Absolut"));
                while (vodkas !== 0){    
                    if (vodkas == 0){
                        break;
                    }
                    else if (vodkas == 1){
                    alert("El precio del Smirnoff es $5000");
                    console.log("El usuario busco Smirnoff");
                    let carritoSmirnoff = parseInt(prompt("Desea agregar un Smirnoff al carrito?\n 1-si\n 2-no "));
                        while (carritoSmirnoff != 2){
                            if (carritoSmirnoff == 1){
                                total += 5000;
                                alert("Agregaste un Smirnoff al carrito, total a pagar = $"+ total);
                                carritoSmirnoff = parseInt(prompt("Desea agregar otro Smirnoff al carrito?\n 1-si\n 2-no "));
                            }
                            else if (carritoSmirnoff == 2){
                            break;
                            }
                            else{
                                alert("ingrese una respuesta valida");
                                carritoSmirnoff = parseInt(prompt("Desea agregar un Smirnoff al carrito?\n 1-si\n 2-no "));
                            }
                        }
                    }
                    else if (vodkas == 2){
                    alert("el precio del Absolut es $7000");
                    console.log("El usuario busco Absolut");
                    let carritoAbsolut = parseInt(prompt("Desea agregar un Absolut al carrito?\n 1-si\n 2-no "));
                        while (carritoAbsolut != 2){
                            if (carritoAbsolut == 1){
                                total += 7000;
                                alert("Agregaste un Absolut al carrito, total a pagar = $"+ total);
                                carritoAbsolut= parseInt(prompt("Desea agregar otro Absolut al carrito?\n 1-si\n 2-no "));
                            }
                            else if (carritoAbsolut == 2){
                            break;
                            }
                            else{
                                alert("ingrese una respuesta valida");
                                carritoAbsolut = parseInt(prompt("Desea agregar un Absolut al carrito?\n 1-si\n 2-no "));
                            }
                        }
                    }
                    else{
                        alert("Error");
                    }
                    vodkas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-Smirnoff \n 2- Absolut"));
                    }
            break;
            case 2:
                let fernet = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-Branca \n 2-Cinzano"));
                while (fernet != 0){
                    if (fernet == 0){
                        break;
                    }
                    else if (fernet == 1){
                    alert("El precio del Branca es $7000");
                    console.log("El usuario busco Branca");
                    let carritoBranca = parseInt(prompt("Desea agregar un Branca al carrito?\n 1-si\n 2-no "));
                            while (carritoBranca != 2){
                                if (carritoBranca == 1){
                                    total += 7000;
                                    alert("Agregaste un Branca al carrito, total a pagar = $"+ total);
                                    carritoBranca = parseInt(prompt("Desea agregar otro Branca al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoBranca == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoBranca = parseInt(prompt("Desea agregar un Branca al carrito?\n 1-si\n 2-no "));
                                }
                            }
                    }
                    else if (fernet == 2){
                    alert("el precio del Cinzano es $5000");
                    console.log("El usuario busco Cinzano");
                    let carritoCinzano = parseInt(prompt("Desea agregar un Cinzano al carrito?\n 1-si\n 2-no "));
                            while (carritoCinzano != 2){
                                if (carritoCinzano == 1){
                                    total += 5000;
                                    alert("Agregaste un Cinzano al carrito, total a pagar = $"+ total);
                                    carritoCinzano= parseInt(prompt("Desea agregar otro Cinzano al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoCinzano == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoCinzano = parseInt(prompt("Desea agregar un Cinzano al carrito?\n 1-si\n 2-no "));
                                }
                            }
                    }
                    else{
                        alert("Error");
                    }
                    fernet = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-Branca \n 2-Cinzano"));
                }
                break;
                    case 3:
                let cervezas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-Quilmes \n 2-Andes"));
                while (cervezas != 0){
                    if (cervezas == 0){
                        break;
                    }
                    else if (cervezas == 1){
                    alert("El precio de la Quilmes es $2000");
                    console.log("El usuario busco Quilmes");
                    let carritoQuilmes = parseInt(prompt("Desea agregar un Quilmes al carrito?\n 1-si\n 2-no "));
                            while (carritoQuilmes != 2){
                                if (carritoQuilmes == 1){
                                    total += 2000;
                                    alert("Agregaste un Quilmes al carrito, total a pagar = $"+ total);
                                    carritoQuilmes = parseInt(prompt("Desea agregar otra Quilmes al carrito?\n 1-si\n 2-no "));
                                }
                                else if (carritoQuilmes == 2){
                                break;
                                }
                                else{
                                    alert("ingrese una respuesta valida");
                                    carritoQuilmes = parseInt(prompt("Desea agregar una Quilmes al carrito?\n 1-si\n 2-no "));
                                }
                            }
                    }
                    else if (cervezas == 2){
                    alert("el precio de la Andes es $2300");
                    console.log("El usuario busco Andes");
                    let carritoAndes = parseInt(prompt("Desea agregar una Andes al carrito?\n 1-si\n 2-no "));
                                while (carritoAndes != 2){
                                    if (carritoAndes == 1){
                                        total += 2300;
                                        alert("Agregaste un Andes al carrito, total a pagar = $"+ total);
                                        carritoAndes= parseInt(prompt("Desea agregar otra Andes al carrito?\n 1-si\n 2-no "));
                                    }
                                    else if (carritoAndes == 2){
                                    break;
                                    }
                                    else{
                                        alert("ingrese una respuesta valida");
                                        carritoAndes = parseInt(prompt("Desea agregar una Andes al carrito?\n 1-si\n 2-no "));
                                    }
                                }
                    }
                    else{
                        alert("Error")
                    }
                cervezas = parseInt(prompt("Selecciona el tipo de bebida que quieres agregar al carrito:\n 0-Volver\n 1-Quilmes \n 2-Andes"));
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
        alert("El total a pagar es: "+ totalConImpuestosYDescuentos(1,descuentoEfectivo));
    }else if (modoDePago == 2){
        alert("El total a pagar es: "+ totalConImpuestosYDescuentos(IVA, 0));
    }else if(modoDePago == 3){
        alert("El total a pagar es: "+ totalConImpuestosYDescuentos(IVA,0));
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

