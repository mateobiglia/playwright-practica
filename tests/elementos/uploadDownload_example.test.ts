import { test, expect } from '@playwright/test';
import { UploadPage } from 'tests/page/UploadPage';

test.describe('Descarga y Carga de archivo', ()=>{

    let uploadPage: UploadPage;

    test.beforeEach(async ({ page })=>{
        uploadPage = new UploadPage(page);
        await page.goto('/upload-download', { waitUntil: 'domcontentloaded'})
    })

    test('TC1: Deberia descargar el archivo', async ({page}) => {
        const {downloadedFiles, downloadedFile} = await uploadPage.downloadFile();
        expect(downloadedFiles.includes(downloadedFile)).toBeTruthy();

    })

    test('TC2: Deberia cargar el archivo', async ({page}) => {
        await uploadPage.uploadFile('yo.jpeg');
        const value = await uploadPage.uploadFileValue();
        expect(value).toContain('yo.jpeg')
        
    })
})