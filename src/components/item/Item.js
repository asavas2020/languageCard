import { useState } from "react";
import "./Item.css";

const Item = ({name, img, options}) => {
    const [showLogo, setShowLogo] = useState(true);
    //  const [name, img, options] = item
  return (
    <div className="card" onClick={() => setShowLogo(!showLogo)}>
      { showLogo ? (<div>  
        <img className="card-logo" src={img} alt="image" />
        <h3 className="card-title">{name}</h3>
      </div> )
       : (<ul className="list">
        { options.map((element, index) => {
            return <li key = {index}>{element}</li>;
          })}
       </ul>) }
      
      
    </div>
  );
};

export default Item