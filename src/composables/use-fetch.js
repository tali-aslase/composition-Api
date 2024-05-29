import { reactive, toRef } from "@vue/composition-api";

export default function(url, options){
    const state = reactive({
        response: [],
        error: null,
        fetching: true,
    })

    const fetchData = async () =>{
        try{
            const res  = await fetch(url, options);
            const json = await res.json();
            state.response =  json;
        }catch(err){
            state.error  = err; 
        } finally{
            state.fetching = false;
        }
    }

    return {...toRef(state), fetchData };
}