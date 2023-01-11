import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
export const Results=()=>{
    const [persons,setPersons]=useState([]);
    const getData=async()=>{
        const data=await axios.get("https://greydiveback.vercel.app/votes/getvotes").then(e=>{return e.data.list})
        setPersons(data);
    }
    useEffect(()=>{
        getData()
    },[])
    
    return(<><h1>resultados de la encuesta realizada:</h1>
    
    {persons.length>0&& persons.map(e=>{return <div>
        <h4>Nombre del votante{e.name} Apellido del votante:{e.lastName}</h4>
        <br/>
        <h4>Pais del votante:{e.country} Correo electrónico: {e.mail} Fecha de nacimiento: {e.birthDate}</h4>
        </div>})}
    </>)
}