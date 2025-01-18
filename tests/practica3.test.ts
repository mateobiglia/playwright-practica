import { test, expect } from '@playwright/test';
import data from '@data/usuarioDetalles.json' assert { type: 'json'};
import type { form } from '@type/inputTypes';


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
                
            }

            //LLeno el formulario y envio los datos para verificar que sean correctos
            for(const datosFormulario of data){

                //Llamo la funcion para llenar el formulario
                await llenarFormulario(datosFormulario);
                await page.locator('#submit').click();
                
                //Ubico los resultados del formulario para el nombre y lo ajusto para poder comparar el dato sin el prefijo
                const elementoNombre = page.locator('#name')
                const nombreTexto = await elementoNombre.innerText()
                const nombreCorrecto = nombreTexto.replace('Name:', '')

                //Ubico los resultados del formulario para el email y lo ajusto para poder comparar el dato sin el prefijo
                const elementoEmail = page.locator('#email')
                const emailTexto = await elementoEmail.innerText()
                const emailCorrecto = emailTexto.replace('Email:', '')

                //Ubico los resultados del formulario para el address y lo ajusto para poder comparar el dato sin el prefijo
                const elementoAddress = page.locator('#output #currentAddress')
                const addressTexto = await elementoAddress.innerText()
                const addressCorrecto = addressTexto.replace('Current Address :', '')

                //Ubico los resultados del formulario para el permanentAddress y lo ajusto para poder comparar el dato sin el prefijo
                const elementoPermanentAddress = page.locator('#output #permanentAddress')
                const permanentAddressTexto = await elementoPermanentAddress.innerText()
                const permanentAddressCorrecto = permanentAddressTexto.replace('Permananet Address :', '')

                //Comparo los datos enviados con los recibidos
                expect(nombreCorrecto).toBe(datosFormulario.fullName)
                expect(emailCorrecto).toBe(datosFormulario.email)
                expect(addressCorrecto).toBe(datosFormulario.adress)
                expect(permanentAddressCorrecto).toBe(datosFormulario.permanentAddress)

            }     
            
        })

    });