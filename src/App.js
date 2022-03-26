import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./Page/home";
import TodoBasic from "./Page/todo-basic";
import about from './Page/about';
import contact from './Page/contact';
import aboutauthor from './Page/aboutauthor';
import notfound from './Page/notfound';
import Todoexpert from './Page/todo-expert';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={about} />
        <Route path="/about/author" exact component={aboutauthor} />
        <Route path="/contact" exact component={contact} />
        <Route path="/todo-basic" exact component={TodoBasic} />
        <Route path="/todo-expert" exact component={Todoexpert} />
        <Route component={notfound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
