import { useState } from "react";
import Layout from "../Components/layout";


const Todobasic = () => {
   const [todos, setTodos] = useState([{
      id: 1,
      title: "Belajar React",
      isDone: false
   }, {
      id: 2,
      title: "Belajar NextJs",
      isDone: true
   },{
      id: 3,
      title: "Belajar Masak",
      isDone: true
   }]);
   return (
      <Layout title='This is TODO BASIC'>         
         <div style={{ padding:'50px',border:"solid 1px gray",borderRadius:'20px'}}>
            {todos.map(todo => (
               <div className="todos">
                  <div className={`todo-item ${todo.isDone?"line-through":""}`} key={todo.id}>
                     {todo.title}
                  </div>
               </div>
            ))}
         </div>
      </Layout>
   )
}
export default Todobasic;