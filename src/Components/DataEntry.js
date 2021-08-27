import '../App.css'
function DataEntry({title,onAdd,value}) {
    const onAddition=(e)=>{
    
        onAdd(e.target.value)
    }
    return(
        <div className="DataEntry">
            <div className="f-title">
            <label >{title}</label>
            </div>
            <div className="f-desc">
            <input type="text"  onChange={onAddition} />
            </div>
        </div>
    );
}

export default DataEntry