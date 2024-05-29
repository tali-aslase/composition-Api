import { reactive } from "vue"
import axios from "axios"

const deleteTodo = async (id)=>{
    try{
        const resp =  await axios.delete(`http://localhost:3000/todos/${id}`)
        return resp
    }catch(error){
        throw error;
    }
}

export {deleteTodo}