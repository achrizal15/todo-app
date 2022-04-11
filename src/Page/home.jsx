import { Box } from '@mantine/core';

import {
   Notes,
   CalendarStats,
   Gauge,
   PresentationAnalytics,
   FileAnalytics,
   Adjustments,
   Lock,
} from 'tabler-icons-react';
import {React,useContext} from "react";
import Layout from "../Components/layout";
import { RouteContext } from '../Components/activeMenuContext';

const Home = () => {
   const {activeMenu,setActiveMenu}= useContext(RouteContext);
   return (
      <Layout title="Introduction React">
         Ini adalah awal halaman dan belajar React
         {activeMenu}
      </Layout>
   );
}


export default Home;

