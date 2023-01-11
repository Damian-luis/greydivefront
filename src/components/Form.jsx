import React from "react";
import { useContext } from "react";
import data from "../context/contextdata"
import axios from "axios"
import { useNavigate } from "react-router-dom";
 
export const Form=()=>{

  const {formData}=useContext(data)
  const {setFormData}=useContext(data)
  let navigate = useNavigate(); 
  //Handlers
  const nameHandler=(e)=>{
    setFormData({...formData,name:e.target.value})
}
const lastNameHandler=(e)=>{
    setFormData({...formData,lastName:e.target.value})
}
const mailHandler=(e)=>{
  setFormData({...formData,mail:e.target.value})
}
const birthDateHandler=(e)=>{
  setFormData({...formData,birthDate:e.target.value})
}
const countryHandler=(e)=>{
  setFormData({...formData,country:e.target.value})
}
const cbHandler=(e)=>{
  setFormData({...formData,cb:e.target.value})
}
const sendForm=async(e)=>{
    e.preventDefault()
    console.log(formData)
    try{
      axios.post("https://greydiveback.vercel.app/votes/addvot",formData).then(e=>{alert(e.data)})
    }
    catch(e){
      alert(e.data)
    }
    setFormData({
    name:"",
    lastName:"",
    mail:"",
    birthDate:"",
    country:"",
    cb:""
    })
}
const resultsHandler=(e)=>{
  navigate("/results")
}
    return(<>
    <h1>Formulario de encuesta para Grivedive</h1>
    <form onSubmit={sendForm}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Nombre</label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Ingrese su nombre" onChange={nameHandler} value={formData.name}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Apellido</label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Ingrese su apellido" onChange={lastNameHandler} value={formData.lastName}/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Correo electrónico</label>
    <input type="mail" class="form-control" id="inputAddress" placeholder="Direccion de correo" onChange={mailHandler} value={formData.mail}/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Fecha de nacimiento</label>
    <input type="date" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={birthDateHandler} value={formData.birthDate}/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Pais</label>
      <select class="form-select" aria-label="Default select example" onChange={countryHandler} value={formData.country}>
  <option selected>Selecciona tu pais</option>
  <option value="argentina">Argentina</option>
  <option value="brasil">Brasil</option>
  <option value="chile">Chile</option>
  <option value="colombia">Colombia</option>
  <option value="mexico">México</option>
  <option value="peru">Perú</option>
  <option value="uruguay">Uruguay</option>
  <option value="venezuela">Venezuela</option>
  
</select>
    </div>
    
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" onChange={cbHandler} value={formData.cb}/>
      <label class="form-check-label" for="gridCheck">
        Estoy de acuerdo con las politicas de privacidad
      </label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Enviar voto</button>
</form>
<h1>¿Quieres ver los resultados de esta encuesta?</h1>
<button onClick={resultsHandler}>VER RESULTADOS</button>
    </>)
}