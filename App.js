
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno:1,
      title: "Movie-1",
      desc: "Movie-1 Description",
    },
    {
      sno:2,
      title: "Movie-2",
      desc: "Movie-2 description",
    },
    {
      sno:3,
      title: "Movie-3",
      desc: "Movie-3 Description",
    }
  ]
  return (
    <>
   <Header title = "Netflix"/>
   <Todos todos = {todos}/>
   <Footer/>
    
    </>
  );
}

export default App;
