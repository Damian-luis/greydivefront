import React from "react";
import axios from "axios";
import styles from "./Results.module.css"
import { useNavigate } from "react-router-dom";
import {Pie} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import { useState,useEffect } from "react";
export const Results=()=>{
    let navigate = useNavigate(); 
    const [dataGrafico,setDataGrafico] = useState(null)
    const [persons,setPersons]=useState([]);
    const [grafico,setGrafico] =useState(false)
    const getData=async()=>{
        const data=await axios.get("https://greydiveback.vercel.app/votes/getvotes").then(e=>{return e.data})
        setPersons(data.list);
        
        let dataParaGrafico=[]
        
        
        
        
        Object.keys(data.dataPerCountry).forEach(function(key, index,values) {
            
           if(Object.values(data.dataPerCountry[key])>0){
            let valor=Object.values(data.dataPerCountry[key])
            dataParaGrafico.push(valor)
           }
            
          });
       
        setDataGrafico({
            "cantidaDeVotos":data.ammounVotes,
            dataParaGrafico
        })

        setGrafico({
            labels:persons.map(e=>{return e.country}),
            datasets:[{
           label:"Porcentaje de paises que han votado",
           data:dataParaGrafico,
           backgroundColor:["pink","blue","green","yellow"],
           borderColor:["#c7204f"]
       }]
        })
    }
    useEffect(()=>{
        getData()

        


    },[])
    const goBackHandler=(e)=>{
        navigate("/")
      }
    return(<>
    <div className={styles.container}>
        <div className={styles.containerResults}>
            <div>
            <h4>Resultados de la encuesta realizada:</h4>
            </div>
    
    <div className={styles.containerPrincipal}>

    <div className={styles.resultsPersons}>
        <h4>Votantes que han participado en la encuesta:</h4>
    {persons.length>0&& persons.map(e=>{return <div>
        <p>Nombre del votante <strong>{e.name}</strong> Apellido del votante: <strong>{e.lastName}</strong></p>
        <p>Pais del votante:<strong> {e.country}</strong> Correo electrónico: <strong> {e.mail} </strong>Fecha de nacimiento:<strong> {e.birthDate}</strong></p>
        </div>})}
        <button onClick={goBackHandler} className={styles.button}>Volver</button>
        </div>

        <div className={styles.data}>
        <h4>Cantidad de votos conseguidos: {dataGrafico!==null ? dataGrafico.cantidaDeVotos:<p>No se han podido conseguir los votos</p>}</h4>
            {grafico!==false?<Pie data={grafico}></Pie>:<p>Parece que aun no tienes registros</p>}
            
        
        </div>


        </div>

        </div>
        </div>
    </>)
}