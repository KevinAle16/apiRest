import express from "express";
import http from "http";
import path from "path";
import bodyParser from "body-parser";
import ejs from "ejs";
import { fileURLToPath } from "url";
import misRutas from "./router/index.js";

import cors from "cors";

//constantes

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//generar el objeto principal

const app = express();

//configuraciones

app.set('view engine', 'ejs');

//directorios

app.use(cors());
app.use(misRutas);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//iniciar el servidor

const puerto = 8000;
app.listen(puerto, () => {
    console.log("Iniciando el servidor");
});

//solo debe llevar lo basico no debe de haber peticiones post ni get