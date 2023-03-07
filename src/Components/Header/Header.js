
import { memo } from "react"
import "./Header.css"
import Navbar from "./Navbar"

const  Header=({count,state,setState})=>{
console.log(count)

    return(<>
      <header>
         <section className="section">
     
          <div className='div-logo'>
            <img src="./imigs/Untitled-1.png"/>
            <div className='font'>
            <h1 className="font-effect-shadow-multiple">այեցի</h1>
            </div>
            </div>
          <input className="Search-inp" placeholder="Որոնել․․․"/>
          <div >
       
            </div>
            <div className='cart'>
        
                 <i className='fa fa-shopping-bag icon-circle'> 
                  <span className="cart-length">{count>0 && count}</span></i>
                
               
            
   
        </div>

          </section>
        
      </header>
      <Navbar state={state} setState={setState}/>
    </>)
}
export default Header