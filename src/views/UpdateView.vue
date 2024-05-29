<template>
    <input type="text" v-model="state.todo.title">
    <button @click="handleUpdate">Update Todo</button>   
</template>

<script>
import { onMounted, reactive } from 'vue'
import {getTodo} from '../composables/get-todo'
import { useRouter, useRoute } from 'vue-router'
import {updateTodo} from "../composables/update-todo"
import router from '@/router';

export default {
    props: ['id'],
    setup(props) {

        const route = useRoute();
        const state= reactive({
                todo: {}
            })


        onMounted(async ()=>{
            state.todo =  await getTodo(props.id);       
        });

        const handleUpdate = ()=>{
            updateTodo(props.id, {title: state.todo.title})
            router.push({name: 'home'})
        }

        return {state, handleUpdate};
        
    },
};
</script>
