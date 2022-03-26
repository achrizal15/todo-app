import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";

const Home = () => {
   return (
      <Layout>
         <h1>Home</h1>
         <h4>LINK TUGAS TODO DASAR <Link to="/todo-basic"><a href="/todo-basic">KLIK</a></Link></h4>
         <h4>LINK TUGAS TODO EXPERT <Link to="/todo-expert"><a href="/todo-expert">KLIK</a></Link></h4>
         <h4>TES ROUTE NOT FOUND PAGE 404 <Link to="/inigakadaapapapa"><a href="/inigakadaapapapa">KLIK</a></Link></h4>
      </Layout>
   );
}
export default Home;
