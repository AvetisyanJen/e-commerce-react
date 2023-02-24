import { BrowserRouter,Route,Routes } from "react-router-dom"
import Footer from "../Components/Footer/Footer"
import Header from "../Components/Header/Header"
import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import { useState } from "react"
import Product from "../Pages/Product/Product"

function Router(){
const [category]=useState([
  {id:1,name:"Համրիչներ"},
  {id:2,name:"Ուտեստներ"},
  {id:3,name:"Ձեռագործ իրեր"},
  {id:4,name:"Թռչնատառով իրեր"}
])
const [count,setCount]=useState(0)

 const [state, setState] = useState(false)

function sum(){
    return setCount(count+1)
}
return(<>

<BrowserRouter>
<Header count={count} state={state} setState={setState}/>
<Routes>
    <Route path="" element={<Home sum={sum} category={category}  state={state} setState={setState}/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/:id" element={<Product/>}/>
</Routes>
<Footer/>
</BrowserRouter>

</>)
}export default Router