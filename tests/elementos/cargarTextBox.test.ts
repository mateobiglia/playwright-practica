import { test, expect } from '@playwright/test';
import { TextBoxPage } from 'tests/page/TextBoxPage';
import data from '@data/usuarioDetalles.json' assert { type: 'json'};
import type { form } from '@type/inputTypes';
import { obtenerResultadoFormulario } from '@helper/testUtiles';

test.describe('Llenar formulario y enviarlo', ()=>{

    let textBoxPage: TextBoxPage;

    test.beforeEach(async ({ page })=>{

        textBoxPage = new TextBoxPage(page);
        await page.goto('https://demoqa.com/text-box');

    })

    test('TC1: Deberia llenarse el formulario', async ({ page }) => {
        
        //Creo una funcion para llenar el formulario con diferentes datos de interfaces
        async function llenarFormulario(datos: form){
            
            await textBoxPage.ingresarNombre(datos.fullName);
            await textBoxPage.ingresarEmail(datos.email);
            await textBoxPage.ingresarCurrentAddress(datos.adress);
            await textBoxPage.ingresarPermanentAddress(datos.permanentAddress);
            return datos
            
        }
        
        //LLeno el formulario y envio los datos para verificar que sean correctos
        for(const datosFormulario of data){

            //Llamo la funcion para llenar el formulario
            await llenarFormulario(datosFormulario);
            const ingresoDatosFormulario = datosFormulario;
            await textBoxPage.presionarBotonSubmit();
            
            //Obtengo los resultados del formulario para comparar con los datos enviados al formulario
            const resultadoValoresFormulario = await obtenerResultadoFormulario(textBoxPage.ventanaResultado)
            expect(resultadoValoresFormulario).toEqual([ingresoDatosFormulario.fullName, ingresoDatosFormulario.email, ingresoDatosFormulario.adress, ingresoDatosFormulario.permanentAddress])

        } 

    })


})