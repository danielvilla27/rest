



 let price = 0;
 let grantotal=0;

function handleproduct(product)
{
   
     
    // let totalProductPrice = newProductUpdate * 1219;

    if(product == 'product1'){
        price = 9.99;
        grantotal=grantotal+price;
    }
    if(product == 'product2'){
        totalProductPrice = 9.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product3'){
        totalProductPrice = 29.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product4'){
        totalProductPrice = 29.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product5'){
        totalProductPrice = 14.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product6'){
        totalProductPrice = 14.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product7'){
        totalProductPrice = 4.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product8'){
        totalProductPrice = 4.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product9'){
        totalProductPrice = 9.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'product10'){
        totalProductPrice = 9.99;
        grantotal=totalProductPrice+grantotal;
    }
    if(product == 'delete'){
        grantotal=0;
    }

    grantotal=Math.round(grantotal)

    document.getElementById("total-list").innerHTML = grantotal+" $";

    }


    function alerta() {
        alert("El monto a cancelar es de: " + grantotal+" $");
      }




   
      


