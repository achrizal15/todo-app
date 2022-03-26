import { Link } from "react-router-dom";
import Layout from "../Components/layout"

const about =()=>{
   return (
      <Layout>
         <h1>About</h1>
         Saya adalah mahasiswa unesa
         <Link to="/about/author"> 
         <a href={()=>false}> Tentang pembuat</a></Link>
      </Layout>
   )
}
export default about;