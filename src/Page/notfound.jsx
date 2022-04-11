import { Link } from "react-router-dom";
import Image from "react-bootstrap/esm/Image";
const notfound = () => {
   return (
      <div className="page-404">
         <h1>404</h1>
         <h3>Page Not Found</h3>
         <span>Ini adalah react hook</span>
         <Link to="/"><a href={()=>false}>BACK</a></Link>
         <br />
         <Image src={require("../Assets/images/reacthook.JPG")} />
      </div>
   )
}
export default notfound;