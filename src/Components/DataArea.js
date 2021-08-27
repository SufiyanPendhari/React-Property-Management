import '../App.css'
function DataArea({title,onAdd,value}) {
    const onAddition=(e)=>{
        onAdd(e.target.value)
    }
    return(
        <div className="DataEntry">
            <div className="f-title">
            <label >{title}</label>
            </div>
            <div className="f-desc">
            <textarea onChange={onAddition}  cols="30" rows="5" ></textarea>
            </div>
        </div>
    );
}

export default DataArea