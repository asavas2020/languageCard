import {languages} from "../../helpers/data";
import "./Card.css";
import Item from "../item/Item";


const Card = () => {

  return (
    <div className='card-container'>
        <div className="bars"></div>
        <h1 className="language-title">Languages</h1>
        <div className="cards">
          {languages.map((item, index)=>{
            return <Item {...item} key = {index} />
          })}
        </div>
    </div>
  );
};

export default Card;