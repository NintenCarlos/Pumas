import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { test } from "./api/Controllers/jugadores.controllers.js";

dotenv.config();

mongoose.connect(process.env.urlbd)
    .then(() => {
        console.log("Todo bien con la base de datos.")
    })
    .catch((error) => {
        console.log("Todo mal con la base de datos.", error)
    })


const app = express();
app.use(cors());
app.listen(4000, () => {
    console.log("Se escucha correctamente. ")
})

test()