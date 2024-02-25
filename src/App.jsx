import React, { useEffect } from 'react';
import { useState } from 'react';
import InputComp from './components/InputComp';
import TodoDisplay from './components/TodoDisplay';
import FilterComp from './components/FilterComp';

const App = () => {
  const[todos, setTodos]=useState([])
  const[view, setView] = useState('All')
  const [FilteredTodos, SetFilterTodos] = useState([])
  const addTodoData = (newTitle, newDescription)=>{
  let newData = {
    id: todos.length+1,
    title : newTitle,
    description: newDescription,
    completed: false
  }
  setTodos([...todos, newData])
  console.log("added");
}
console.log(todos);

//delete todo 

const deletetodo = (id)=>{
  setTodos(todos.filter((todo)=>todo.id !== id))
}


//value of dropdown status filter component 

function changeview(e){
  setView(e.target.value)

}

useEffect(()=>{
  if(view==='All'){
    SetFilterTodos(todos)
  }if(view==='Completed'){
    SetFilterTodos(todos.filter((todo)=>todo.completed===true))
  
  }if (view==='Not Completed'){
    SetFilterTodos(todos.filter((todo)=>todo.completed===false))
  }
},[view,todos])


  return (
    <div>
      <InputComp addTodoData={addTodoData}/>
      <FilterComp view={view} setView={setView} changeview={changeview}/>

      <div className="container">
        <div className="row gx-4 gx-lg-4 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
          {FilteredTodos.map((item, index) => {
            return (
              <>
                <div className="col h-100 mt-3" >
                  <TodoDisplay
                  todos={todos}
                   item={item} 
                   index={index} 
                   deletetodo={deletetodo} 
                   setTodos={setTodos}/>
                   </div>
                   </>
                      )
                    })}
                  </div>
                </div>
    </div>
  );
};

export default App;