

const prompt = require("prompt-sync")();


let maquina= {
   tela:5000,
   ojos:200,
   hilo:3500,
   pintura:400,
   cuerpoMuñeca: 100,
   cantidad: 0,
   cantidad_max: 100,
   empaquetadas:0,
   muñecasFabricadas:0,


   fabricar: function(){
if(this.cantidad >= this.cantidad_max) {
console.log("Se ha alcanzado la cantidad máxima de muñecas"); 
} else{
this.cuerpoMuñeca-=1;
this.ojos-=2;
this.hilo-=35;
this.tela-=50;
this.pintura-=15;
this.cantidad++;
this.muñecasFabricadas++;
console.log("la muñeca ha sido fabricada con éxito!");
}
   },


   empaquetar: function(){
      if(this.empaquetadas < this.cantidad) {
         this.empaquetadas++;
   console.log("Se ha empaquetado " + this.cantidad + " muñeca");
      }
      else{
         console.log("Debe fabricar una muñeca para poder empaquetarla!")
      }
   },


   mostrarMateriales: function(){
console.log("tela: " + this.tela + "cm");
console.log("Cantidad de hilo: " + this.hilo + "cm");
console.log("Cantidad de ojos: " + this.ojos);
console.log("Cantidad de pintura: " + this.pintura + "ml");
console.log("Cuerpos de muñecas: " + this.cuerpoMuñeca);
   },


     mostrarFabricadas: function(){
console.log("La cantidad de muñecas fabricadas han sido "+ this.muñecasFabricadas + " unidades");
   },


   apagarMaquina: function(){
console.log("Apagando...")
   },
};


let menu="";

while(menu != 5){
    console.log("¡Bienvenido a la maquina de muñecas! ")
    console.log("1. Fabricar muñecas");
    console.log("2. Empaquetar");
    console.log("3. Mostrar materiales");
    console.log("4. Mostrar la cantidad de muñecas fabricadas")
    console.log("5. Apagar maquina");

    menu=prompt("¿Qué acción desea realizar?");
     
    if(menu==1) {
      maquina.fabricar();
   
    }

   if(menu==2) {
      maquina.empaquetar();

   }

   if(menu==3) {
   maquina.mostrarMateriales();

   }
     if(menu==4){
      maquina.mostrarFabricadas();
     }

   if(menu==5) {
      maquina.apagarMaquina();
   }

   if(menu>=6){
      console.log("Opción no válida!");
   }
}