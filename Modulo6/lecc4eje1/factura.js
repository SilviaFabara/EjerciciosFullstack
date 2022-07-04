class Factura
 {

        numero;
        cliente;
        divisa;
        subtotal;
        iva;

        


            constructor(numero,cliente, divisa, subtotal, iva)
            {
                this.numero=numero;
                this.cliente=cliente;
                this.divisa=divisa;
                this.subtotal=subtotal;
                this.iva=iva;
                }

            aplicardescuento(porcentaje=10, _subtotal){
                //porcentaje=parseInt(windowprompt("Ingresa el porcentaje de descuento"))
                
                var subtotal1=parseInt(this.subtotal-(this.subtotal*(porcentaje/100)));
                return subtotal1;
                }


             encontrarIva(_iva) {
                 var iva1=parseInt(this.aplicardescuento()*this.iva);
                return iva1;
                }
                
            total(){
                var total= parseInt(this.aplicardescuento()+this.encontrarIva());
                return total;
                }
                
            mensajes(){
                    return  console.log(`La Factura numero ${this.numero} tiene un subtotal de  ${this.aplicardescuento()}  un IVA de ${this.encontrarIva()} y un total de ${this.total()} ${this.divisa}`);
                   }

    }

   
    

var facturas= new Factura();

    facturas=[

    facturas[1] = new Factura(100,"Silvia Fabara","Dolares americanos",100,0.12),
    facturas[2]= new Factura(101,"Ronald Fabara","soles",200,0.12),
    facturas[3] = new Factura(102,"Roberto Fabara","Pesos Mx",300,0.12),
    facturas[4]= new Factura(103,"Wendy Fabara","Dolares Americanos",400,0.12),
    facturas[5]= new Factura(104,"Jonathan Fabara","Dolares Americanos",500,0.12),
  
]

      

           facturas.forEach(Factura => {
            Factura.mensajes();
           });
         
