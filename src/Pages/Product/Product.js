import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import "../Home/Home.css"
// import { getData } from "../../data"
function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  // useEffect(() => {
  //   getData().then(response => setProduct(response[id]))
  // }, [])
  useEffect(() => {
    fetch("http://localhost:4000/product/"+id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setProduct(data)
    })
  }, [])
  return (<>
    <div className="main">
      <div className="wrapper" >
        <img className="imige" src={product.img} />
        <h6 className="title">{product.name}</h6>
        <div className="icon-price">
          <p className="price">{product.price + "դր"}</p>

        </div>
      </div>
    </div>
  </>)
} export default Product