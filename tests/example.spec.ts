import { test, expect } from '@playwright/test';

///CLASE 2
test.describe('GX-123: practica de localizadores', ()=>{

  test.beforeEach(async ({ page })=>{
    await page.goto('https://testpages.eviltester.com/styled/index.html')
    
  })

  test('CP1: Validar resultado de numeros a string', async ({page})=>{
    
    const botonWebDriver = page.locator('#webdriverexamplepage')
    const entradaNumeros = page.locator('[name="number-entry"]')
    const procesarNumeros = page.locator('[data-locator="process-on-server"]')
    const salidaString = page.locator('[data-locator="message-text"]')
    let numerosAComparar = 0

    async function llenarNumeros(numeros: number){
      
      numerosAComparar = numeros
      await entradaNumeros.fill(numeros.toString())
      return numerosAComparar

    }

    async function compararNumeroConTexto(numerosAComparar: number){
      let cadenaDeTexto = ''
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
      console.log(cadenaDeTexto)
      cadenaDeTexto = cadenaDeTexto.trimEnd().slice(0, -1); // Elimina la última coma y el espacio
      await expect(salidaString).toHaveText(cadenaDeTexto)
      
    }

    await botonWebDriver.click()
    await llenarNumeros(589521460)
    await procesarNumeros.click()
    await compararNumeroConTexto(numerosAComparar)

  })

})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////CLASE 3




