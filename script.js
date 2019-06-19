/**
    (!) Usar const para todo

    - Crear un objeto y guardarlo en una variable llamada "sim"

    - Agregarle al objeto "sim" las siguientes propiedades:
        * hambre
        * energia
        * dinero
        * felicidad
    Dales un valor inicial a cada uno (por ejemplo 8)

    (?) Inspeccionar el consola el objeto sim y comprobar que existe

    - Agregarle al objeto "sim" los siguientes métodos:
        * dormir
        * morfar
        * laburar
        * salir
        * ejercitar
        * viciar
    Cada metodo debe modificar algunos de las propiedades del objeto cuando es llamado, actualizando
    sus valores. P. ej.: el método dormir le agrega 5 a energia, y le saca 3 a hambre

    (?) Probar en consola los métodos y comprobar que modifican los valores de las propiedades
    de la forma esperada

    - Buscar cada elemento correspondiente a cada uno de los métodos, y asignarle al onclick de cada uno de ellos
    una función que llame a cada uno de los métodos del objeto "sim" correspondiente

    (?) Probar clickear cada una de las acciones y chequear en consola si cambiaron los valores
    de las propiedades del objeto

    - Agregarle al objeto "sim" el método limitarEstados, que debe chequear cada una de sus propiedades,
    y si alguna de ellas es mayor a 10, dejarla en 10, o si es menor a 0, dejarla en 0
    
    (?) Probar en consola el método limitarEstados y comprobar que funcione

    - Agregar una invocación a limitarEstados al final de cada otro método del objeto (dormir, laburar, salir, etc)

    (?) Probar los métodos (dormir, laburar, etc) en consola y comprobar que las propiedades (hambre, energía, etc) 
    nunca sobrepasen el 10 ni caigan por debajo del 0 

    - Obtener los elementos HTML de cada barra y guardarlos en variables

    - Hacer una función actualizarColorBarra (fuera del objeto), que tome por parámetro 
    nivel y barra (elemento html), y le asigne a la barra la clase:
        - "azul", si nivel es mayor a 9,
        - "verde", si nivel es mayor a 7,
        - "amarillo", si nivel es mayor a 5,
        - "naranja", si nivel es mayor a 3,
        - "rojo", para todos los demás casos

    (?) Probar la función en consola pasándole por parámetro alguna de las barras guardadas en variable
    y el valor de alguna de las propiedades del objeto "sim" (hambre, energía, etc)

    - Crear una función removerColoresBarras, que remueva de cada barra las clases 
    "azul", "verde", "amarillo", "naranja" y "rojo"

    (?) Probar que funcione correctamente en consola, después de haber invocado a actualizarColorBarra

    - Hacer una función actualizarColoresBarras, y dentro de ella, 
    llamar a actualizarColorBarra una vez por cada barra, pasándole como parámetro
    cada barra con la propiedad correspondiente del objeto "sim" (hambre, energia, etc) 

    (?) Probar que funcione correctamente luego de haber realizado alguna de las acciones, 
    invocandola desde la consola

    - Hacer una función actualizarNivelesBarras, que cambie la propiedad de estilo css "width" de cada una de las barras,
    por un valor de la propiedad correspondiente multiplicado por 10, con % como unidad. Por ejemplo,
    si la propiedad "hambre" tiene un valor de 6, se debe asignarle a "width" de la barra correspondiente el valor "60%" 
 
    (?) Probar que funcione correctamente luego de haber realizado alguna de las acciones, 
    invocandola desde la consola

    - Hacer una función actualizarBarras, que lo que haga es llamar a 
        - removerColoresBarras
        - actualizarNivelesBarras
        - actualizarColoresBarras

    (?) Probar que funcione correctamente luego de haber realizado alguna de las acciones, 
    invocandola desde la consola

    - Agregar una invocación a actualizarBarras en el onclick de cada una de las acciones
    - Agregar una invocación a actualizarBarras al final del script, para que se ejecute inicialmente

*/

let dormirFunction = document.getElementById('dormir');
let morfarFunction = document.getElementById('morfar');
let laburarFunction = document.getElementById('laburar');
let salirFunction = document.getElementById('salir');
let ejercitarFunction = document.getElementById('ejercitar');
let viciarFunction = document.getElementById('viciar');

let sim = {
    hambre: 4,
    morfar() {
      this.hambre = this.hambre + 3;
      this.energia = this.energia + 2;
      this.dinero = this.dinero - 2;
      sim.limitarEstados();
    },
    energia: 4,
    dormir() {
        this.energia = this.energia + 3;
        sim.limitarEstados();
    },
    ejercitar() {
        this.energia = this.energia - 4;
        sim.limitarEstados();
    },
    dinero: 4,
    laburar() {
        this.dinero = this.dinero + 5;
        this.energia = this.energia - 4;
        sim.limitarEstados();
    },
    salir() {
        this.dinero = this.dinero - 3;
        this.felicidad = this.felicidad + 4;
        sim.limitarEstados();
    },
    felicidad: 4,
    viciar() {
        this.felicidad = this.felicidad + 4;
        this.energia = this.energia - 5;
        sim.limitarEstados();
    },
    limitarEstados() {
        if(this.hambre >= 10) {
            this.hambre = 10;
        } else if(this.hambre <= 0) {
            this.hambre = 0;
        }
        if(this.energia >= 10) {
            this.energia = 10;
        } else if(this.energia <= 0) {
            this.energia = 0;
        } 
        if(this.dinero >= 10) {
            this.dinero = 10;
        } else if(this.dinero <= 0) {
            this.dinero = 0;
        }
        if(this.felicidad >= 10) {
            this.felicidad = 10;
        } else if(this.felicidad <= 0) {
            this.felicidad = 0;
        }
        
    }   
}



const llamarMetodo = function() {
    morfarFunction.onclick = function() {
        sim.morfar();
        actualizarBarras();
    };
   dormirFunction.onclick = function() {
    sim.dormir();
    actualizarBarras();
   };
   laburarFunction.onclick = function() {
       sim.laburar();
    actualizarBarras();
   };
   salirFunction.onclick = function() {
       sim.ejercitar();
    actualizarBarras();
   };
   ejercitarFunction.onclick = function() {
       sim.ejercitar();
    actualizarBarras();
   };
   viciarFunction.onclick = function() {
       sim.viciar();
    actualizarBarras();
    };

}

let barraHambre = document.getElementById('barra-hambre');
let barraEnergia = document.getElementById('barra-energia');
let barraDinero = document.getElementById('barra-dinero');
let barraFelicidad = document.getElementById('barra-felicidad');

let actualizarColorBarra = function(nivel, barra) {
    if(nivel > 9) {
        barra.classList.add('azul');
    } else if(nivel > 7) {
        barra.classList.add('verde');
    } else if(nivel > 5) {
        barra.classList.add('amarillo');
    } else if(nivel > 3) {
        barra.classList.add('naranja');
    } else {
        barra.classList.add('rojo');
    }
}

let removerColoresBarras = function() {
    barraHambre.classList.remove('azul', 'verde', 'amarillo', 'naranja', 'rojo');
    barraDinero.classList.remove('azul', 'verde', 'amarillo', 'naranja', 'rojo');
    barraEnergia.classList.remove('azul', 'verde', 'amarillo', 'naranja', 'rojo');
    barraFelicidad.classList.remove('azul', 'verde', 'amarillo', 'naranja', 'rojo');
}

let actualizarColoresBarras = function() {
  actualizarColorBarra(sim.hambre, barraHambre);
  actualizarColorBarra(sim.dinero, barraDinero);
  actualizarColorBarra(sim.energia, barraEnergia);
  actualizarColorBarra(sim.felicidad, barraFelicidad);
}

let actualizarNivelesBarras = function() {
    barraHambre.style.width = `${sim.hambre * 10}%`;
    barraDinero.style.width = `${sim.dinero * 10}%`;
    barraFelicidad.style.width = `${sim.felicidad * 10}%`;
    barraEnergia.style.width = `${sim.energia * 10}%`;
} 

let actualizarBarras = function() {
    removerColoresBarras();
    actualizarNivelesBarras();
    actualizarColoresBarras();
}

llamarMetodo();
actualizarBarras();