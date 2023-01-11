import React from "react";
import { useContext } from "react";
import data from "../context/contextdata"
import axios from "axios"
export const Form=()=>{

  const {formData}=useContext(data)
  const {setFormData}=useContext(data)
  
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
      axios.post("http://localhost:4000/votes/addvote",formData).then(e=>{alert(e.data)})
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

    return(<>
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
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" onChange={birthDateHandler} value={formData.birthDate}/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Pais</label>
      <input type="text" class="form-control" id="inputCity" onChange={countryHandler} value={formData.country}/>
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
    </>)
}