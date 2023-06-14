import React, {useState} from "react"
import './App.css'
import Useroutput from './Useroutput';
import Userinput from './Userinput';



function App() {
  const [username, setUsername] = useState("Kehinde")
function changeName (e){
setUsername(e.target.value)
}



  return (
    <div className="App">
  
     <Useroutput username= 'Taiwo' address="Ipakodo Ebutte"/>
     <Useroutput username= {username} address="Gberigbe Ikorodu"/>
     <Userinput change={changeName}/>
     
      
    </div>
  );
}

export default App;
