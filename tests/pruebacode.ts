let numerosAComparar = 0

function llenarNumeros(numeros: number){
      
    numerosAComparar = numeros
    console.log(numerosAComparar)
    return numerosAComparar
  }


  function compararNumeroConTexto(numerosAComparar: number): string {
    let cadenaDeTexto = '';
    let numeroString = numerosAComparar.toString(); // Convertimos el número a cadena
  
    // Recorremos cada dígito
    for (let char of numeroString) {
      switch (char) {
        case '0': cadenaDeTexto += 'zero, '; break;
        case '1': cadenaDeTexto += 'one, '; break;
        case '2': cadenaDeTexto += 'two, '; break;
        case '3': cadenaDeTexto += 'three, '; break;
        case '4': cadenaDeTexto += 'four, '; break;
        case '5': cadenaDeTexto += 'five, '; break;
        case '6': cadenaDeTexto += 'six, '; break;
        case '7': cadenaDeTexto += 'seven, '; break;
        case '8': cadenaDeTexto += 'eight, '; break;
        case '9': cadenaDeTexto += 'nine, '; break;
      }
    }
  
    console.log(cadenaDeTexto);
    return cadenaDeTexto;
  }

  llenarNumeros(123456)
  compararNumeroConTexto(numerosAComparar)