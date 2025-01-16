import { test, expect } from '@playwright/test';

    test.describe('Prueba de botones', ()=>{

        test.beforeEach(async ({ page })=>{
            await page.goto('https://demoqa.com/buttons')
        })

        test('Boton simple', async ({ page })=>{
            
            const botonClickSimple = page.getByText('Click Me', {exact: true})
            const textoClickSimple = page.getByText('You have done a dynamic click', {exact: true})

            await botonClickSimple.click()
        
            await expect(textoClickSimple).toHaveText('You have done a dynamic click')

        })

        test('Boton Doble', async ({ page })=>{
            
            const botonClickDoble = page.locator('#doubleClickBtn')
            const textoClickDoble = page.getByText('You have done a double click', {exact: true})
    
            await botonClickDoble.dblclick()
            
            await expect(textoClickDoble).toHaveText('You have done a double click')
    
        })

        test('Boton Click Derecho', async ({ page })=>{
            
            const botonClickDerecho = page.locator('#rightClickBtn')
            const textoClickDerecho = page.getByText('You have done a right click', {exact: true})
        
            await botonClickDerecho.click({ button: 'right'})
                
            await expect(textoClickDerecho).toHaveText('You have done a right click')
        
        })

        test('Todos los botones al mismo tiempo', async ({ page })=>{

            const botonClickSimple = page.getByText('Click Me', {exact: true})
            const textoClickSimple = page.getByText('You have done a dynamic click', {exact: true})
            const botonClickDoble = page.locator('#doubleClickBtn')
            const textoClickDoble = page.getByText('You have done a double click', {exact: true})
            const botonClickDerecho = page.locator('#rightClickBtn')
            const textoClickDerecho = page.getByText('You have done a right click', {exact: true})
    
            await botonClickSimple.click()
            await botonClickDoble.dblclick()
            await botonClickDerecho.click({ button: 'right'})
            
            await expect(textoClickSimple).toHaveText('You have done a dynamic click')
            await expect(textoClickDoble).toHaveText('You have done a double click')          
            await expect(textoClickDerecho).toHaveText('You have done a right click')

        })


    })