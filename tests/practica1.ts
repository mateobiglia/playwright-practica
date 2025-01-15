import { test, expect } from '@playwright/test';

    test.describe('Prueba de llenar formulario y enviarlo', ()=>{

        test.beforeEach(async ({ page })=>{
           await page.goto('https://testpages.eviltester.com/styled/')
        })

        test('llenar formulario y enviarlo', async ({ page }) =>{

            const entradaAFormulario = page.locator('#inputvalidation')



            await entradaAFormulario.click()

        })

        

    })