<template>
    <div>
      <h1>Show Word</h1>
  
      <div class="ui labeled input fluid">
        <div class="ui label">
            <!-- take flag from folder themes -->
          <i class="germany flag"></i> German 
        </div>
        <input type="text" readonly  :value="word.german"/>
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" readonly  :value="word.english"/>
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="japan flag"></i> japan
        </div>
        <input type="text" readonly  :value="word.japan"/>
      </div>
      <div class="actions">
        <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
          Edit word
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import {api} from '../helpers/helpers';

  export default {
    name:'show',
    data(){
        return{
            word:''
        };
    },
    async mounted(){
        this.word = await api.getWord(this.$route.params.id);
        //    lay chu dua tren id bang cach dung getword add vao router
    }
  };
  </script>
  
  <style scoped>
  .actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
  }
  </style>