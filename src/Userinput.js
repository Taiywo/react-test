import React,{ Component } from "react";


export  class Userinput extends Component{
constructor (props){
  super(props)
  this.state ={
    name:"Taiwo",
    address: "Lagos"
  }
  
}
affidavit=(e)=>{
  this.setState(
    {name: e.target.value }  
  )
}
render(){
  return(
    <>
    <h1>My name is {this.state.name}    i live at {this.state.address}</h1>
    <input type="text" onChange={this.affidavit} placeholder="replace the name  "></input>
    </>
  )

  
}
}
export default Userinput