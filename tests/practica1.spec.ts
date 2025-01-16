import { test, expect } from '@playwright/test';

    test.describe('Prueba de llenar formulario y enviarlo', ()=>{

        test.beforeEach(async ({ page })=>{
           await page.goto('https://testpages.eviltester.com/styled/')
        })

        test('llenar formulario y enviarlo', async ({ page }) =>{

            //Localizo el formulario y los elementos del formulario
            const entradaAFormulario = page.locator('#inputvalidation')
            const nombre = page.locator('#firstname')
            const apellido = page.locator('#surname')
            const edad = page.locator('#age')
            const pais = page.locator('#country')
            const notas = page.locator('#notes')
            const botonEnviar = page.locator('[type="submit"]')        

            //Cargo el formulario y lo envio
            await entradaAFormulario.click()
            await nombre.fill('Mateo')
            await apellido.fill('BigliaMaggi')
            await edad.fill('25')
            await pais.selectOption({ value: 'Argentina' })
            await notas.fill('Estos son mis datos personales')
            await botonEnviar.click()

            //Verifico los datos enviados al formulario con el resumen que me da el formulario de lo que ingreso
            const elementoNombre = page.locator('#firstname-value')
            const nombreTexto = await elementoNombre.textContent()

            expect(nombreTexto).toBe('Mateo') //Nombre

            const elementoApellido = page.locator('#surname-value')
            const apellidoTexto = await elementoApellido.textContent()

            expect(apellidoTexto).toBe('BigliaMaggi') //Apellido

            const elementoEdad = page.locator('#age-value')
            const EdadTexto = await elementoEdad.textContent()

            expect(EdadTexto).toBe('25') //Edad
            
            const elementoPais = page.locator('#country-value')
            const PaisTexto = await elementoPais.textContent()

            expect(PaisTexto).toBe('Argentina') //Pais
            
            const elementoNotas = page.locator('#notes-value')
            const NotasTexto = await elementoNotas.textContent()

            expect(NotasTexto).toBe('Estos son mis datos personales') //Notas

        })

        

    })