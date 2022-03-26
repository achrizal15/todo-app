import { Link } from "react-router-dom";
const notfound = () => {
   return (
      <div className="page-404">
         <h1>404</h1>
         <h3>Page Not Found</h3>
         <Link to="/"><a href={()=>false}>BACK</a></Link>
      </div>
   )
}
export default notfound;