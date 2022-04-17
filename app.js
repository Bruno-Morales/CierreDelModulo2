
const concesionaria = {

    autos : [{
    marca : "Ford ",
    modelo : "Fiesta ",
    precio : 15000,
    km : 200,
    color : "Azul",
    cuotas : 12,
    anio : 2019,
    patente : "APL123",
    vendido : true
},{
    marca : "Toyota",
    modelo : "Corolla",
    precio : 100000,
    km : 0,
    color : "Blanco",
    cuotas : 14,
    anio : 2019,
    patente : "JJK116",
    vendido : true
}]
 ,
    persona : [{
        nombre: "Juan",
        capacidadDePagoEnCuotas: 20000,
        capacidadDePagoTotal: 10000
        }],

    buscarAuto : function buscarAuto(patente){
        cantidad = []
        nada = null
        for(var i = 0; i < this.autos.length; i++){
         if(this.autos[i].patente == patente){
            cantidad.push(this.autos[i])
            
         }
        }
        if(cantidad.length != 0){
        return cantidad
        }
        else return null
        }
        , 

        venderAuto : function venderAuto(patente){
            let encontrado = this.buscarAuto(patente)
            for(var i = 0; i < this.autos.length; i++){
                if(encontrado != null) {
                if(this.autos[i].patente == encontrado[i].patente){
                    console.log("Patente encontrada y estado cambiado a vendido")
                    return this.autos[i].vendido = true;
                }
            }
            else return console.log("Patente no encontrada")
        }
    },


    autosParaLaVenta: function autosParaLaVenta() {
        let novendidos = []
        this.autos.filter(function(autos){
            if(autos.vendido == false){
                novendidos.push(autos)
            }
        })
        return console.log(novendidos)
    },


    autosNuevos : function autosNuevos(){
        let cerokm = []
        this.autos.filter(function(autos){
            if(autos.vendido == false && autos.km < 100){
                cerokm.push(autos)
            }
        })
        return console.log(cerokm)
    },

    listaDeVentas : function listaDeVentas(){
        let vendidos = []
        this.autos.filter(function(autos){
            if(autos.vendido == true){
                vendidos.push(autos.precio)
            }
        })
        if(vendidos.length == 0){
            return console.log("Ningun auto vendido")
        }
        return console.log(vendidos)
    },

    
    totalDeVentas : function totalDeVentas(){
        let vendidos = []
        this.autos.filter(function(autos){
            if(autos.vendido == true){
                vendidos.push(autos.precio)
            }
        })
        if(vendidos.length == 0){
            return console.log("Ningun auto vendido")
        }
        vendidos.reduce(function(total, vendido){
            vendidos = total + vendido;
        })
        return console.log(vendidos)
    }, 

    puedeComprar : function puedeComprar(patente, persona){

        this.patente = this.autos.patente
        let personaCapacidadPagoCuotas;
        let personaTotal;
        let autoCuota;
        let autoPrecioTotal;
        this.persona.filter(function(persona){
            return personaCapacidadPagoCuotas = persona.capacidadDePagoEnCuotas
        })
        this.persona.filter(function(persona){
            return personaTotal = persona.capacidadDePagoTotal;
        })

        let existe = this.buscarAuto(patente)
        
        existe.filter(function(autos){
            return autoCuota = autos.cuotas
        })
        existe.filter(function(autos){
            return autoPrecioTotal = autos.precio;
        })

        let division = autoPrecioTotal/autoCuota;

        if(division < personaCapacidadPagoCuotas && autoPrecioTotal < personaTotal){
            return console.log("Puede comprar este auto")
        }
        else 
        return console.log("No puede comprar este auto")
        
    }

};

        
concesionaria.puedeComprar("APL123", concesionaria.persona);

//concesionaria.venderAuto("APL123");
//concesionaria.autosParaLaVenta(concesionaria.autos);
//concesionaria.autosNuevos(concesionaria.autos);
//concesionaria.listaDeVentas()
//concesionaria.totalDeVentas();
