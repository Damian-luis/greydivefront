import {Route,Routes } from 'react-router-dom';
import {Form} from "./components/Form"
import {Results}  from './components/Results';
import { useState } from 'react';
import data from './context/contextdata';
import './App.css';

function App() {
  const [formData,setFormData] = useState({
    name:"",
    lastName:"",
    mail:"",
    birthDate:"",
    country:"",
    cb:""
  })
  return (
    <div className="App">
      <data.Provider value={{formData,setFormData}}>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/results" element={<Results/>} />
        
        </Routes>
        </data.Provider>
    </div>
  );
}

export default App;
