import type { Locator } from "@playwright/test";

//cuando quiera correr el test practica4.test.ts
// export async function obtenerResultadoFormulario(elementos: Locator){

// const resultadoFormulario = await elementos.allInnerTexts();
// const valoresFormulario = resultadoFormulario.map(elemento => elemento.split(':')[1]);
// return valoresFormulario;

// }
//cuando quiera correr el elementos cargarTextBox.test.ts
export async function obtenerResultadoFormulario(elementos: Locator) {
    const resultadoFormulario = await elementos.locator('p').allInnerTexts();  // Obtiene solo los <p>
    
    return resultadoFormulario.map(elemento => {
        const partes = elemento.split(':');  
        return partes.length > 1 ? partes[1].trim() : ""; // Extrae solo el valor, ignorando la clave
    });
}