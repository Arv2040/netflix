import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className = "text-center" my-3 >Netflix</h3>
      {props.todos.map((todo) =>{
        return <TodoItem todo = {todo}/>
        return  <button className="btn btn-sm btn-danger">WatchNow</button>
      })}
      
      
      <button type="button" class="btn btn-success">Watch</button>
      <button type="button" class="btn btn-primary">Watch Later</button>
      <button type="button" class="btn btn-info">Info</button>

    </div>
  )
}
