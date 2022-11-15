

const Item = (product) => {
  return (
    <div style={{border: ' 1px solid red'}}>
        <h2>{product.title}</h2>
        <h2>{product.category}</h2>
    </div>
  )
}

export default Item