import Sidebar from "./Sidebar";
import { AppShell, Header, Menu, Text, Container, Group, Box } from '@mantine/core';
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav, } from "react-bootstrap";
//create layout 

const Layout = (props) => {
   const route = useHistory();
   return (
      <AppShell
         padding="md"
         navbar={<Sidebar />}
         header={<Header height={60} p="xs">
            <Group noWrap position="apart">
               <Text color="red">
                  <h3>TASYA OKTAVIA (REACT E)</h3>
               </Text>
               <div className="nav">
                  <Text color="red" className="nav-item" onClick={() => { route.push("/about") }}>
                     About
                  </Text>
                  <Text color="red" className="nav-item" onClick={() => { route.push("/contact") }}>
                     Contact
                  </Text>
               </div>

            </Group>

         </Header>}
         styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
         })}
      >
         <Box
            sx={(theme) => ({
               backgroundColor: 'white',
               padding: theme.spacing.xl,
               borderRadius: theme.radius.md,
            })}
         >
            <h3 className="pb-5">{props.title ? props.title : "Heading"}</h3>
            {props.children}
         </Box>
      </AppShell>
   );
}
export default Layout;