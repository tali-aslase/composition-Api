import axios from "axios";


const addTodo = async (data)=>{




    try{
        await axios.post("http://localhost:3000/todos", data)
    }catch(err){

    } 
  






}

export {addTodo}