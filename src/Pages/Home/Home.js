import { useEffect, useState} from "react"
import { Link} from "react-router-dom"
import { getData } from "../../data"
import "./Home.css"


function Home({ sum,state}) {
  const [category]=useState([
    {id:1,name:"Համրիչներ"},
    {id:2,name:"Ուտեստներ"},
    {id:3,name:"Ձեռագործ հագուստ"},
    {id:4,name:"Թռչնատառով իրեր"},
   
  ])
  const[data,setData]=useState("")
  const [product, setProduct] = useState([])
  useEffect(() => {
    getData().then(response => setProduct(response))
  }, [])

console.log(data)
  return (<>
    <div className="main">
     {state && <div className="catgrories-div">
   
    {category.map(elm=>{
      return <h5 key={elm.id} className="categories-h5" onClick={()=>setData(elm.name)}>
        {elm.name}
      </h5>
    })}
    
       </div>}

      {data? product.filter((elm)=>data==elm.category).map((elm) => {
        return <div className="wrapper" key={elm.id}>
          <Link to={`/${elm.id-1}`}><img className="imige" src={elm.img} />
          </Link>
          <h6 className="title">{elm.name}</h6>
          <div className="icon-price">
          <p className="price">{elm.price + "դր"}</p>
          <i className='fa fa-shopping-bag icon-circle' onClick={() => sum()}></i>
          </div>
        </div>
      }):product.map((elm) => {
        return <div className="wrapper" key={elm.id}>
          <Link to={`/${elm.id-1}`}><img className="imige" src={elm.img} />
          </Link>
          <div className='title-div'>
          <h6 className="title">{elm.name}</h6>
          <div className="icon-price">
          <p className="price">{elm.price + "դր"}</p>
          <i className='fa fa-shopping-bag icon-circle'onClick={() => sum()}></i>
          </div>
          </div>
        </div>
      })}



    </div>



  </>)
} export default Home



