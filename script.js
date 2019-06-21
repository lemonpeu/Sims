

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
        this.felicidad += 2;
        this.hambre -= 2;
        sim.limitarEstados();
    },
    ejercitar() {
        this.energia = this.energia - 4;
        this.hambre -= 3;
        this.felicidad += 2;
        sim.limitarEstados();
    },
    dinero: 4,
    laburar() {
        this.dinero = this.dinero + 5;
        this.energia = this.energia - 4;
        this.felicidad -= 2;
        sim.limitarEstados();
    },
    salir() {
        this.dinero = this.dinero - 3;
        this.felicidad = this.felicidad + 4;
        this.energia -= 3;
        sim.limitarEstados();
    },
    felicidad: 4,
    viciar() {
        this.felicidad = this.felicidad + 4;
        this.energia = this.energia - 5;
        sim.limitarEstados();
    },
    
        limitarEstados() {
            const estados = ["hambre", "felicidad", "dinero", "energia"];
            for(const estado of estados) {
                if(this[estado] >= 10) {
                    this[estado] = 10;
                } else if(this[estado] <= 0) {
                    this[estado] = 0;
                }
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

let removerColoresBarras = function(barras) {
    for(const barra of barras) {
        barra.classList.remove('azul', 'verde', 'amarillo', 'naranja', 'rojo');
    }
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

let barras = [barraHambre, barraEnergia, barraDinero, barraFelicidad];

let actualizarBarras = function() {
    removerColoresBarras([barraHambre, barraEnergia, barraDinero, barraFelicidad]);
    actualizarNivelesBarras();
    actualizarColoresBarras();
}

llamarMetodo();
actualizarBarras();