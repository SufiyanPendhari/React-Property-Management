import "../App.css";

function Button({ title, onClick,color}) {
  return (
    <button className="button-ac" style={{backgroundColor:color }} onClick={onClick}>
    {title}
    </button>
  );
}

export default Button;
