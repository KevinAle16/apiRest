import express,{Router} from "express";
import json from "body-parser";
import {sumar,restar,PI,data, multiplicar, dividir} from "../module/librerias.js";

export const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Se cargo la pagina");

})

router.get("/1",(req,res)=>{
    res.send("La sumas es: "+ sumar(10,10));
})

router.get("/2",(req,res)=>{
    res.send("El alumno es: "+ data.nombre);
    
})

router.get("/3",(req,res)=>{
    res.json(data);
    
})


export default router;