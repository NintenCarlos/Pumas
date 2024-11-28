import { ModeloJugadores } from "../Models/jugadores.model.js";

ModeloJugadores.create({
    name: "Chino", 
    apePat: "Huerta",
    dorsal: 12
})

export const test = () => {
    console.log("Funciona el controlador.")
}