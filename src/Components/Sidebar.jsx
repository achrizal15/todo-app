import { AppShell, Navbar, Header, Group, Menu, Divider, Text, Code, ScrollArea, createStyles, ThemeIcon, UnstyledButton } from '@mantine/core';
import { useContext } from 'react';
import { Link, NavLink, Router, useHistory } from 'react-router-dom';
import {
   Notes,
   CalendarStats,
   Gauge,
   PresentationAnalytics,
   FileAnalytics,
   Adjustments,
   Lock,
   Home,
   Route,
   Globe,
   Forms,
} from 'tabler-icons-react';
import { RouteContext } from '../Components/activeMenuContext';
const Sidebar = () => {
   const { activeMenu, setActiveMenu } = useContext(RouteContext);
   const menu = [
      { icon: <Home size={16} />, title: "Introduction React", link: "/" },
      { icon: <Lock size={16} />, title: "React Fundamental", link: "/todo-basic" },
      { icon: <Route size={16} />, title: "React Routing", link: "/about/author" },
      { icon: <Adjustments size={16} />, title: "Ivent Handling", link: "/todo-expert" },
      { icon: <Gauge size={16} />, title: "React Hook", link: "/ahsdah" },
      { icon: <Forms size={16} />, title: "React Form", link: "/formone" },
      { icon: <Globe size={16} />, title: "Global Management", link: "/navs" },
   ];
   const route = useHistory();
   return (
      <Navbar p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
         {menu.map((e, i) => {
            return (
               <UnstyledButton
                  onClick={() => {
                     setActiveMenu(e.link);
                     route.push(e.link);
                  }}
                  key={i}
                  sx={(theme) => ({
                     display: 'block',
                     width: '100%',
                     padding: theme.spacing.xs,
                     borderRadius: theme.radius.sm,
                     backgroundColor: e.link === activeMenu ? theme.colors.gray[0] : 'transparent',
                     '&:hover': {
                        backgroundColor:
                           theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                     },
                  })}
               >
                  <Group noWrap style={{ textDecoration: "none" }}>
                     <ThemeIcon size="lg" variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
                        {e.icon}
                     </ThemeIcon>
                     <Text>{e.title}
                   
                     </Text>
                  </Group>
               </UnstyledButton>
            )
         })}
      </Navbar>
   )
}
export default Sidebar;