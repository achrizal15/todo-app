import Navbar from './navbar';
//create layout 
const Layout = (props) => {
   return (
      <div>
         <Navbar />
         <div className="container">
            {props.children}
         </div>
      </div>
   );
}
export default Layout;