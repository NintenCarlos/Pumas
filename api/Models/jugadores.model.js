import {Schema, model} from "mongoose";

const EsquemaJugadores = new Schema ({
    name:String,
    apePat:String,
    dorsal:Number
})

export const ModeloJugadores = new model("Plantilla de los Pumas que van a ganar la octava en contra del Cruz Azul de Anselmi, hay por favor Chino Huerta haznos paro ya aposte mi casa a que salían campeones", EsquemaJugadores)