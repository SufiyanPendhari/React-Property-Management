import DataEntry from "./DataEntry";
import DataArea from "./DataArea";
import Button from "./Button";
import { useState } from "react";
import "../App.css"
function Form({onClick}) {
    const [Name,setName]=useState('')
    const [Description,setDescription]=useState('')
    const [Size,setSize]=useState('')

    const onAddName=(i)=>{
        setName(i)
    }
    const onAddSize=(i)=>{
        setSize(i)
    }
    const onAddDescription=(i)=>{
        setDescription(i)
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        if(Name && Description && Size&&value){

            onClick(Name,Description,Size)
        }
    }
    
    return(
        <div className="Form">
        <form action="">
            <DataEntry title="Property Name" onAdd={onAddName}   />
            <DataArea title="Description" onAdd={onAddDescription}  />
            <DataEntry title="Size" onAdd={onAddSize} />
            <br />
            <div className="DataEntry">

            <Button title="Save" color="#008080" onClick={onSubmit}/>
            </div>
            <br />
        </form>
        </div>
    );
}
export default Form;