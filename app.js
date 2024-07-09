let numerosecreto = 0
let intentos = 0
let listanumerossorteados =[];
let numeromaximo = 2

console.log(numerosecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}


function verificarintento() {
    let numerodeusuario = parseInt(document.getElementById('valorusuario').value);

    if (numerodeusuario === numerosecreto) {
        asignarTextoElemento('p',`Acertaste el numero despues de ${intentos}  ${(intentos == 1) ? `intento` : `intentos`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numerodeusuario > numerosecreto) {
            asignarTextoElemento (`p`,`El numero secreto es menor`);
            
        } else {
            asignarTextoElemento(`p`,`El numero secreto es mayor`);
            
        }
        
    }
 intentos++;
 limpiarcaja(); 
 console.log(intentos);
 //   console.log(typeof(numerodeusuario));
 //   console.log(typeof(numerosecreto));
 //   console.log(numerodeusuario);
 //   console.log (numerodeusuario === numerosecreto);
    return;
}

function condicionesiniciales() {
    asignarTextoElemento('h1','El numero secreto');
    asignarTextoElemento ('p' , `Indica un numero del uno al ${numeromaximo}`);
    numerosecreto = generarnumerosecreto();
    intentos = 1;    

}

function limpiarcaja() {
//let valorcaja = document.querySelector('#valorusuario');
//valorcaja.value = '';
document.querySelector('#valorusuario').value = '';
}

function reiniciargame() {
limpiarcaja();
condicionesiniciales();
document.querySelector('#reiniciar').setAttribute('disabled','true');

}




function generarnumerosecreto () {
    let numerogenerado = Math.floor(Math.random()*(numeromaximo)+1);
    
    console.log(listanumerossorteados);
    console.log(numerogenerado);  
    // return Math.floor(Math.random()*10)+1);

    //si ya sorteamos todos los numeros
      
    if (listanumerossorteados.length == numeromaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        
    } else {
        
    
      
      // Si el numero generado esta incluido en la lista 
      if (listanumerossorteados.includes(numerogenerado)) {
        return generarnumerosecreto();

      } else {

        listanumerossorteados.push(numerogenerado);
        return numerogenerado;
        
      }
    

    }
}

condicionesiniciales();
let parrafo = document.querySelector('p');
parrafo.innerHTML = ` Indica un numero del 1 al ${numeromaximo}`;
