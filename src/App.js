import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Page/home";
import TodoBasic from "./Page/todo-basic";
import about from './Page/about';
import contact from './Page/contact';
import aboutauthor from './Page/aboutauthor';
import notfound from './Page/notfound';
import Todoexpert from './Page/todo-expert';
import formone from './Page/formone';
import Navs from './Page/navs';
import { RouteContext } from './Components/activeMenuContext';
import { useState } from 'react';
function App() {
  const [activeMenu, setActiveMenu] = useState('/');
  return (
    <RouteContext.Provider value={{ activeMenu, setActiveMenu }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={about} />
          <Route path="/about/author" exact component={aboutauthor} />
          <Route path="/contact" exact component={contact} />
          <Route path="/todo-basic" exact component={TodoBasic} />
          <Route path="/todo-expert" exact component={Todoexpert} />
          <Route path="/formone" exact component={formone} />
          <Route path="/navs" exact component={Navs} />
          <Route component={notfound} />
        </Switch>
      </BrowserRouter>
    </RouteContext.Provider>
  );
}

export default App;
