import { test, expect } from '@playwright/test';
import data from '@data/valoresCalculadora.json' assert { type: 'json'};
import oper from '@data/operadoresMatematicos.json' assert { type: 'json'};
import type { num, operator } from '@type/inputTypes';

    test.describe('Prueba de calculadora simple', async ()=>{

        test.beforeEach(async ({ page })=>{

            await page.goto('https://testpages.eviltester.com/styled/calculator', {waitUntil: 'load'})
            
        })

        
        test('Probar una calculadora simple con diferentes operaciones', async ({ page })=>{

            //Obtengo los campos para ingresar numero, boton y el resultado
            const campoNumero1 = page.locator('#number1')
            const campoNumero2 = page.locator('#number2')
            const campoOperador = page.locator('#function')
            const botonCalcular = page.locator('#calculate')
            const resultadoOperacion = page.locator('#answer')       
            
            // Funcion que va a ingresar los numeros con datos de un json y va a hacer el calculo y luego comparar con el resultado que dio en pantalla
            async function realizarOperacion(numeros: num, operadorMatematico: operator) {
                await campoNumero1.fill(numeros.numero1); //Primer Nro
                await campoNumero2.fill(numeros.numero2); //Segundo Nro
                await campoOperador.selectOption(operadorMatematico.calculo); //Operador del calculo
                await botonCalcular.click(); //Boton para calcular
                let resultado
                let resultadoString

                //Con este if vamos a obtener el resultado del calculo hecho segun el operador
                if(operadorMatematico.calculo == "plus"){
                    resultado = Number(numeros.numero1) + Number(numeros.numero2);
                    resultadoString = resultado.toString()
                }else if(operadorMatematico.calculo == "times"){
                    resultado = Number(numeros.numero1) * Number(numeros.numero2)
                    resultadoString = resultado.toString()
                }else if(operadorMatematico.calculo == "minus"){
                    resultado = Number(numeros.numero1) - Number(numeros.numero2);
                    resultadoString = resultado.toString()
                }else if(operadorMatematico.calculo == "divide"){
                    resultado = Number(numeros.numero1) / Number(numeros.numero2);
                    resultadoString = resultado.toString()
                }

                //Obtenemos el valor de la pantalla y lo comparamos con el calculo hecho
                const resultadoPagina = await resultadoOperacion.textContent()
                expect(resultadoPagina).toBe(resultadoString);             
    
            }

            //Realizamos el calculo con la data del json
            await test.step('Llenar valores a calcular y comparar', async ()=>{
                
                for (let i = 0; i < data.length; i++) {
                    await realizarOperacion(data[i], oper[i % oper.length]);
                }           
            
             })

         })

     })
