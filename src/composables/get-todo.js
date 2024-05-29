import axios from "axios"

const getTodo = async(id)=>{

    try{
        console.log("nmakibg call")
    const response =  await axios.get(`http://localhost:3000/todos/${id}`);
    console.log("making call", response)
    return response.data
    }catch(error){
        throw error

    }

}

export {getTodo}