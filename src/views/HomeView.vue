<template>
  <div>

    <h1>Homepage</h1>
    <div v-if="state.loading">Loading...</div>
    <div v-else>

    <table class="table">
    <thead>
        <tr>
            <th>Todo ID</th>
            <th>Todo Content </th>
            <th>Actions </th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="todo in state.data" :key="todo.id">

            <td>{{ todo.id }}</td>
            <td>{{ todo.title }}</td>
            <td>


              <button @click="deleteItem(todo.id)">Delete Todo</button>

              <router-link :to="'/update/' + todo.id">Update Item</router-link>



                <!-- <button @click="deleteTodo(todo.id)">Delete</button>
                 <router-link :to="'/update/' + todo.id">Update Todo</router-link> -->

                  <!-- <router-link to='update'>Update Todo</router-link> -->
            </td>
        </tr>
    </tbody>
    </table>

 
    </div>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';

import {fetchData} from '../composables/api';
import {deleteTodo} from '../composables/delete-todo'

import Header from "../components/Header.vue"


export default {
  components:{
    Header
    
  },


  setup() {
    const state = reactive({
      loading: true,
      data: null,
    });


    const deleteItem = async (id)=>{
      try{
      await deleteTodo(id);
       await fetchDataFromAPI();

      }catch(error){
        console.log("here catch tge errror",error.message)
        state.error = error.message;
      }
    }

    const fetchDataFromAPI = async () => {
      try {
        state.loading = true;
        const responseData = await fetchData();

        state.data = responseData;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        state.loading = false;
      }
    };

    onMounted(fetchDataFromAPI);

    return {
      state, deleteItem
    };
  },
};
</script>
