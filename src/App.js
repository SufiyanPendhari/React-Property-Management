import "./App.css";
import Button from "./Components/Button";
import {useState,useEffect} from 'react'
import Tile from "./Components/Tile";
import Form from "./Components/form";
import Title from "./Components/title"

function App() {
  // Local Temporary Storage
  const [Property, setProperty] = useState([])
  // Open and Close Form
  const [isOpen,setisOpen] = useState(false)
  // on page load
 useEffect(()=>{
   fetch('http://localhost:4000')
   .then(res=> res.json())
   .then(data=>setProperty(data))
 })

  // open & close form function
  const onClick = () =>{
    setisOpen(!isOpen)
  }
  // to add to the property
  const onSubmit =(name,description,size)=>{
      const newProperty= {Name:name,Description:description,Size:size}
      setProperty([...Property,newProperty])
    setisOpen(!isOpen)
     fetch('http://localhost:4000',{
     method:"POST",  
     headers:{"Content-Type":"application/json"},
     body:JSON.stringify(newProperty)
     })
  
}
  // Delete function
  const onDelete = (id)=>{
    console.log(id);
    let updatedProperty=Property.filter((element)=> element.id !== id)
    setProperty(updatedProperty)
    fetch(`http://localhost:4000/${id}`,{
    method:"DELETE",  
 })
  }
 
  return (
    <div className="App">
    {/* Heading of the page*/ }
    <div className="Heading">
      <div className="title">
    <Title title="Property Management"/>
      </div>
    <div className="oc-button">
      {/* open and close button */}
    <Button title={isOpen?'Close':'Add Property'} color={isOpen?'red':'#008080'} onClick={onClick}/>
    </div>
    </div>
    {/* {Form} */}
    {isOpen&&<Form onClick={onSubmit} />}
    {/* Iterate the property List */}
    { 
      Property.length>0?Property.map( (element,index)=>{
      return <Tile key={index} title={element.Name} description={element.Description} size={element.Size} onDelete={onDelete} uid={element._id}/>
    
    }):""
    }
  </div>);
}

export default App;
