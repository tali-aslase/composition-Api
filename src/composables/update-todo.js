import axios from "axios"


const updateTodo = async (id, data)=>{

    
    try{
        await axios.put(`http://localhost:3000/todos/${id}`, data)
    }catch(err){

    } 





}

export {updateTodo}