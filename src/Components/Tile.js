import "../App.css";
import Button from "./Button";

function Tile({title,description,size,onDelete,uid}) {
  const Delete =()=>{
    onDelete(uid)
  }

    return(
        
        <div className="Tile" >
            <div className="ColumnOne">
            <div className="Container"><span className="test">Property Name :</span> {title}</div>
            <div className="Container"><span className="test">Description : </span>{description}</div>
            <div className="Container"><span className="test">Size : </span>{size}</div>
            </div>
            <div className="ColumnTwo">
                <div className="Button-Container" >
                <Button title="Delete" color="red" onClick={Delete}/>
                </div>
              
            </div>
        </div>
        
    )
}

export default Tile