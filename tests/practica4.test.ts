import { test, expect } from '@playwright/test';
import data from '@data/usuarioDetalles.json' assert { type: 'json'};
import type { form } from '@type/inputTypes';
import { obtenerResultadoFormulario } from '@helper/testUtiles';


    test.describe('Llenado de formulario y enviado 2.0', async ()=>{

        test.beforeEach(async ({ page })=>{

            await page.goto('https://demoqa.com/text-box');

        })


        test('Llenar formulario con funcion y datos con interfaz', async ({ page })=>{

            //Localizo los inputs del formulario
            const entradaNombre = page.locator('#userName-wrapper input');
            const entradaEmail = page.locator('#userEmail-wrapper input');
            const entradaAddress = page.locator('#currentAddress-wrapper textarea');
            const entradaAddressPermanente = page.locator('#permanentAddress-wrapper textarea');
                      
            //Creo una funcion para llenar el formulario con diferentes datos de interfaces
            async function llenarFormulario(datos: form){

                await entradaNombre.fill(datos.fullName);
                await entradaEmail.fill(datos.email);
                await entradaAddress.fill(datos.adress);
                await entradaAddressPermanente.fill(datos.permanentAddress);
                return datos
                
            }

            //LLeno el formulario y envio los datos para verificar que sean correctos
            for(const datosFormulario of data){

                //Llamo la funcion para llenar el formulario
                await llenarFormulario(datosFormulario);
                const ingresoDatosFormulario = datosFormulario;
                await page.locator('#submit').click();
                
                //Obtengo los resultados del formulario para comparar con los datos enviados al formulario
                const resultadoValoresFormulario = await obtenerResultadoFormulario(page.locator('#output p'))
                expect(resultadoValoresFormulario).toEqual([ingresoDatosFormulario.fullName, ingresoDatosFormulario.email, ingresoDatosFormulario.adress, ingresoDatosFormulario.permanentAddress])


            }     
            
        })

    });