
/* Transaction 

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : cuanto la compra se realiza correctamente 
 
 */


window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'purchase',             // name of the event. In this case, it always must be add_to_wishlist
    step : 'Pago exitoso'
    ecommerce: { 
    payment_method : 'Efectivo'
    currency: 'EUR',
    value: 29.98,                       // order total (price of all products + shipping). If you want, it can be only price of all products
    tax: 3.00,                          // tax
    shipping: 5.00,                 // shipping costs
    affiliation: 'My online shop',      // affiliation (e.g. affiliate id, name of the store, etc.)
    transaction_id: 'abc123',           // transaction id
    coupon: 'ENDOFSUMMER',                        
      items: [{                           // an array with a product (or multiple products) that was added to a cart
        item_name: 'Product 1',           // insert an actual product name
        item_id: 'product1',              // insert an actual product ID
        price: '11.99',                   // insert an actual product price. Number or a string. Don't include currency code
        item_brand: 'brand A',            // insert an actual product price
        item_category: 'Apparel',         // insert an actual product top-level category
        quantity: '1'                     // product quantity of how many products were added to a wishlist
      }]
    }
  });


/* Pago Fallido

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : Cuando el pago no es ejecutado correctamente, la pasarela de pago lo rechazo
 
 */
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'payment_failed', // name of the event. In this case, it always must be add_to_wishlist
    payment_method : 'Efectivo',
    step: 'Pago Fallido'
    });

/* Add Payment info

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : Cuando el usuario comienza a llenar su información de pago
 
 */

 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
     event: 'add_payment_info',
     step: 'Pagar',
     ecommerce: { 
      payment_method : 'Efectivo'
      currency: 'EUR',
      value: 29.98,                       // order total (price of all products + shipping). If you want, it can be only price of all products
      tax: 3.00,                          // tax
      shipping: 5.00,                 // shipping costs
      affiliation: 'My online shop',      // affiliation (e.g. affiliate id, name of the store, etc.)
      transaction_id: 'abc123',           // transaction id
      coupon: 'ENDOFSUMMER',                        
        items: [{                           // an array with a product (or multiple products) that was added to a cart
          item_name: 'Product 1',           // insert an actual product name
          item_id: 'product1',              // insert an actual product ID
          price: '11.99',                   // insert an actual product price. Number or a string. Don't include currency code
          item_brand: 'brand A',            // insert an actual product price
          item_category: 'Apparel',         // insert an actual product top-level category
          quantity: '1'                     // product quantity of how many products were added to a wishlist
        }]
      }           // name of the event. In this case, it always must be add_to_wishlist 
     });



  /* Continuar compra

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : cuando el usuario da clic en continuar compra */
 
 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
     event: 'continuar_compra',             // name of the event. In this case, it always must be add_to_wishlist
     step: 'cotizar'
     });




/* consultar

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : cuando eel usuario da clic en el botón consultar  */
 
 window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
     event: 'consultar',             // name of the event. In this case, it always must be add_to_wishlist
     step: 'Iniciar'
     });


/* ingresar matricula

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : cuando ingresa datos de mátricula  */
 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'ingresar_matricula',             // name of the event. In this case, it always must be add_to_wishlist
    step: 'Iniciar'
    });



  /* seleccionar oficina

 Añadir el siguiente fragmento de código para poder ejecutar el evento
 Trigger : cuando el usuario selecciona alguna oficina  */
 
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: 'seleccionar_oficina',             // name of the event. In this case, it always must be add_to_wishlist
    step: 'Iniciar'
    });



