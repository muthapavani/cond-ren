import { Child } from "../components/child"
import { Login } from "../components/login"
import Table1 from "../components/t1"
import Table from "../components/table"
import "./ex.css" 
function Conditionalrendering(){
    
    const name="hi"
    const islogin =true
    var isloading =true
    function loading(){
        setTimeout(()=>{
            isloading=false
        },2000)
    }
    const fetchdata =()=>{
        fetch("https://fakestoreapi.com/products ").then((res)=>res.json)
       .then((data)=>console.log(data))
    }
   
     return(<>
    <h1>{name?name:"Network issue"}</h1>
    <h1>{islogin?"login success":"plase login"}</h1>
    {islogin?<Child/> :<Login/>}
    {name ? <Table1/>:"Network issue"}
{isloading?<div className="loader"> </div>:<Table/>}
    </>)   
}
export default Conditionalrendering