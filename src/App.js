
import {React,useState} from 'react'
import {Route,Routes} from 'react-router-dom';
import Home from './Home';
import MainScreen from './MainScreen';
import InputForms from './InputForm';
import {db} from './firebase'
import { doc,deleteDoc,collection, addDoc, getDocs, updateDoc} from "firebase/firestore"; 

function App() {

  const [todos,setTodo] = useState([]);
  const [todoId,setID] = useState([]);




  //Create a New todo In Database
  async function createTodo(event,title,body){
    event.preventDefault()
    const todoRef = await addDoc(collection(db,'todos'),{
      Title : title,
      Body: body
    });
    readTodo()
  }

  //Read Todos From Database
  async function readTodo(){
    const querySnapshot = await getDocs(collection(db,'todos'));
    let todoData = []
    let dataId = []
    querySnapshot.forEach((doc) => {
      todoData.push(doc.data())
      dataId.push(doc.id)
    })
    setTodo([...todoData])
    setID([...dataId])
  }

  //Update Todos In Database
  async function update(id){
    let newTitle = prompt('Please Update Task Title...')
    let newBody = prompt('Please Update Task Description...')
    const docRef = doc(db,'todos',id);
    await updateDoc(docRef,{
      Title: newTitle,
      Body: newBody 
    })
    readTodo()
  }

  //Delete Todos In Database
  async function remove(id){
    await deleteDoc(doc(db,'todos',id))
    readTodo()
  }

  return (
    <div>
      <Routes>
        <Route path ='/' element = {<Home readtodo = {readTodo()} />} />
        <Route path ='/mainscreen' element = {<MainScreen todos = {todos} idData = {todoId} remove = {remove} edit = {update}/>} />
        <Route path = '/mainscreen/form' element = {<InputForms add = {createTodo} />} />
      </Routes>
    </div>
  );
}

export default App;
