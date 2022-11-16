import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <Link to={`detail/${product.id}`}>
    <div style={{border: ' 1px solid red'}}>
        <h2>{product.title}</h2>
        <h2>{product.category}</h2>
    </div>
    </Link>
    
    
  )
}

export default Item