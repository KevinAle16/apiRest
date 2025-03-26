import express,{Router} from "express";
import json from "body-parser";
import {sumar,restar,PI,data, multiplicar, dividir} from "../module/librerias.js";

export const router = express.Router();

router.get("/apirest",(req,res)=>{
    res.send("Se cargo la pagina");

})

router.get("/apirest/1",(req,res)=>{
    res.send("La sumas es: "+ sumar(10,10));
})

router.get("/apirest/2",(req,res)=>{
    res.send("El alumno es: "+ data.nombre);
    
})

router.get("/apirest/3",(req,res)=>{
    res.json(data);
    
})


export default router;