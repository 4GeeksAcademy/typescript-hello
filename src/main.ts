/*Creamos la sala de cine para 8 filas y 10 columnas*/ 

let filas: number = 8;
let columnas: number = 10;

const filasReal: number = filas + 1;
const columnasReal: number = columnas + 1;


function crearSala(filas:number , columnas:number): number[][] {
  let cineInicial:number[][] = [];
  for(let row = 0; row < filasReal; row++){
    cineInicial[row] = []
    for(let colum = 0; colum < columnasReal ; colum++){
      cineInicial[row][colum] = 0;
    }
  }
  return cineInicial;
}



/*Función para mostrar la sala de cine*/

function mostrarSala(sala:number[][]): string {
  let actualSala: string = "";
  let numeroFila: number = 1;
  let numeroColumna: number = 1;
  for(let row = 0; row < sala.length; row++){
    for(let colum = 0; colum < sala[row].length; colum++){
      if (row === 0 && colum === 0) {
        actualSala += "  ";
      }else if (row === 0) {
        actualSala += numeroColumna.toString() + " ";
        numeroColumna++;
      }else if (colum === 0) {
        actualSala += numeroFila.toString() + " ";
        numeroFila++;
      }else if(sala[row][colum] === 0){
        actualSala += "L ";
      }else{
        actualSala += "X ";
      }
    }
    actualSala += "\n";
  }
  return actualSala;
}



/*Función para reservar un asiento*/

function reservarAsiento(sala:number[][], fila:number, columna:number): number[][] {
  for(let row = 0; row < sala.length; row++){
    for(let colum = 0; colum < sala[row].length; colum++){
      if(row === fila && colum === columna){
        if(sala[row][colum] === 0){
          sala[row][colum] = 1;
          console.log(`Asiento reservado en la fila ${fila} y columna ${columna}`);
        }else if(sala[row][colum] === 1){
          console.log(`El asiento en la fila ${fila} y columna ${columna} ya está ocupado`);
        }
      }
    }
  }
  return sala;
}




/* Función para contar asientos libres y ocupados */

function contarAsientos(sala:number[][]): {libres: number, ocupados: number} {
  let libres: number = 0;
  let ocupados: number = 0;
  for(let row = 0; row< sala.length; row++){
    for (let colum = 0; colum < sala[row].length; colum++){
      if(sala[row][colum] === 1){
        ocupados++;
      } else if(sala[row][colum] === 0){
        libres++;
      }
    }
  }
  return {libres, ocupados};
}

/* Función para cancelar una reserva */
function cancelarReserva(sala:number[][], fila:number, columna:number): number[][] {
  for(let row = 0; row < sala.length; row++){
    for(let colum = 0; colum < sala[row].length; colum++){
      if(row === fila && colum === columna){
        if(sala[row][colum] === 1){
          sala[row][colum] = 0;
          console.log(`Reserva de asiento cancelada en la fila ${fila} y columna ${columna}`);
        }
        }
      }
    }
    return sala;
  }





  /* Función para buscar dos asientos libres consecutivos */

function buscarAsientosConsecutivos(sala:number[][]): string | null {
  let asientosConsecutivos: string = "";
  let asientosLibres: number = contarAsientos(sala).libres;
  for(let row = 1; row < sala.length; row++){
    for(let colum = 1; colum < sala[row].length - 1; colum++){
      if(sala[row][colum] === 0 && sala[row][colum + 1] === 0){
        asientosConsecutivos += `Hay asientos libres consecutivos en la fila ${row} y columnas ${colum} y ${colum + 1}.`;
        return asientosConsecutivos;
      } else if(asientosLibres < 2){
        console.log(`No hay asientos libres consecutivos`);
        return null;
      }
    }
  }
  return asientosConsecutivos.length > 0 ? asientosConsecutivos : null;
}




let salaInicial = crearSala(filasReal, columnasReal);
let salaActual = mostrarSala(salaInicial);
//console.log(salaActual);

//let primeraReserva = reservarAsiento(salaInicial, 7, 7);
//console.log(mostrarSala(primeraReserva));

//let segundaReserva = reservarAsiento(salaInicial, 7, 7);
//console.log(mostrarSala(segundaReserva));

//let checkAsientos = contarAsientos(segundaReserva);
//console.log(`Asientos libres: ${checkAsientos.libres}, Asientos ocupados: ${checkAsientos.ocupados}`);

//let cancelarReserva1 = cancelarReserva(segundaReserva, 7, 7);
//console.log(mostrarSala(cancelarReserva1));

//let buscarAsientos = buscarAsientosConsecutivos(segundaReserva);
//console.log(buscarAsientos);

