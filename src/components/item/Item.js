import "./Item.css";

const Item = ({name, img, options}) => {
    //  const [name, img, options] = item
  return (
    <div className="card">
        <img className="card-logo" src={img} alt="image" />
        <h3 className="card-title">{name}</h3>
    </div>
  )
}

export default Item