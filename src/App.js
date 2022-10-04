
import {React,useState} from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import MainScreen from './MainScreen';
import InputForms from './InputForm';

function App() {

  const [todos,setTodo] = useState(['Homework','Clean BedRoom','Walk Dog']);
  const [todoBody,setBody] = useState(['Math Work','Bed,Floor,and Desk','At 3:00PM']);

    function newTodo(event,title,body){
        event.preventDefault();
        const oldTodo = [...todos];
        let todoTitle = title;
        const oldBody = [...todoBody];
        let newtodoBody = body;
        setBody([...oldBody, newtodoBody])
        setTodo([...oldTodo,todoTitle]);
    }

    function remove(index){
        const oldtodo = [...todos]
        oldtodo.splice(index, 1)
        const oldTodoBody = [...todoBody]
        oldTodoBody.splice(index,1)
        setBody(oldTodoBody)
        setTodo(oldtodo)
    }

    function edit(index){
      let newText = prompt('Please Update Task Title...')
      const oldTodo = [...todos]
      oldTodo[index] = newText
      setTodo(oldTodo)
    }

  return (
    <div>
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/mainscreen' element = {<MainScreen todos = {todos} body = {todoBody} remove = {remove} edit = {edit}/>} />
        <Route path = '/mainscreen/form' element = {<InputForms add = {newTodo} />} />
      </Routes>
    </div>
  );
}

export default App;
