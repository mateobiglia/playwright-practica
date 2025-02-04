import { type Page, type Locator, expect } from '@playwright/test';
import { text } from 'stream/consumers';

export class TextBoxPage {
    page: Page;
    fullName: Locator;
    email: Locator;
    currentAddress: Locator;
    permanentAddress: Locator;
    buttonSubmit: Locator;
    ventanaResultado: Locator;
    

    constructor(driver: Page){

        this.page = driver;
        this.fullName = driver.locator('#userName');
        this.email = driver.locator('#userEmail');
        this.currentAddress = driver.locator('textarea#currentAddress');
        this.permanentAddress = driver.locator('textarea#permanentAddress');
        this.buttonSubmit = driver.locator('#submit');
        this.ventanaResultado = driver.locator('#output');

    }

    async ingresarNombre(nombre: string){
        await this.fullName.fill(nombre);
    }

    async ingresarEmail(correo: string){
        await this.email.fill(correo);
    }

    async ingresarCurrentAddress(direccion: string){
        await this.currentAddress.fill(direccion);
    }

    async ingresarPermanentAddress(direccionPermanente: string){
        await this.permanentAddress.fill(direccionPermanente);
    }

    async presionarBotonSubmit(){
        await this.buttonSubmit.click();
    }
    

}