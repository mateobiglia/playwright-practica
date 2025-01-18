import type { Locator } from "@playwright/test";

export async function obtenerResultadoFormulario(elementos: Locator){

const resultadoFormulario = await elementos.allInnerTexts();
const valoresFormulario = resultadoFormulario.map(elemento => elemento.split(':')[1]);
return valoresFormulario;

}