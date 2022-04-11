import { useState } from "react";
import Layout from "../Components/layout";


const Todoexpert = () => {
   const [todos, setTodos] = useState([{
      id: 1,
      title: "Belajar React",
      isDone: true
   }]);
   const deleteHandler = (id) => {
      setTodos(todos.filter(todo => todo.id !== id))
   }
   const checkedHandler = (id) => {
      setTodos(todos.map(todo => {
         if (todo.id === id) {
            todo.isDone = !todo.isDone;
         }
         return todo;
      }));
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      if (todos.find(todo => todo.title === e.target.todo.value)) {
         alert("Todo sudah ada")
         return false
      }
      const lastId = todos.length > 0 ? todos[todos.length - 1].id : 0;
      if (e.target.todo.value === "") {
         alert("Todo cannot be empty")
      } else {
         setTodos([...todos, {
            id: lastId + 1,
            title: e.target.todo.value,
            isDone: false
         }])
      }
   }
   return (
      <Layout title="Todo Expert">
         <div style={{ padding: '50px', border: "solid 1px gray", borderRadius: '20px' }}>
            <form style={{ marginBottom: "10px" }} onSubmit={(e) => handleSubmit(e)}>
               <input type="text" name="todo" placeholder="Add todo" />
               <button type="submit">Add</button>
            </form>
            {todos.map(todo => (
               <div className="todos" key={todo.id}>
                  <label>
                     <input type="checkbox" className="filled-in" onChange={() => checkedHandler(todo.id)} checked={todo.isDone} />
                     <span className={`${todo.isDone ? 'line-through' : ''}`}>  {todo.title}</span>
                  </label>
                  <button className="todo-btn" onClick={() => deleteHandler(todo.id)}>DELETE</button>
               </div>
            ))}

         </div>
      </Layout>
   )
}
export default Todoexpert;