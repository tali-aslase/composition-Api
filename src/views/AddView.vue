<template>
    <input v-model="state.title" placeholder="Please enter title"/>
    <button @click="handle" :disabled="isTitleEmpty">Add TODO</button>
</template>

<script>
import { computed, reactive } from 'vue'
import {addTodo} from '../composables/add-todo'
import router from '@/router';
export default {
    name: "AddView",
    setup(){

       const state =  reactive({
        title: ''
       });
       
       function handle(){
        addTodo({title: state.title}) 

        router.push({name: 'home'})
       }

       const isTitleEmpty = computed(()=> { return state.title.trim() === '';} )

        return {handle, state, isTitleEmpty};
    },
}
</script>