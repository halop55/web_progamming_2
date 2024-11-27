<template>
    <div>
        <h1>Search</h1>
        <!--  v-if="words.length !=0" -->
        <td><input type="text" style="resize: none" cols="20" rows="1" name="description" v-model="input_word"></input> </td>
        <td><Button @click="onSearching"> Search</Button></td>
        <td></td>
        <table id = "words" class = "ui celled compact table" >
        <thead>
        
            <tr>
                
                <th>German</th>
                <th>English</th>
                <th>japan</th>
                <!-- <th colspan="3"></th> -->
            </tr>
        </thead>
        <tr   v-for ="(word,i) in words" :key="i">
            <td>{{ word.german }}</td>
            <td>{{ word.english }}</td>
            <td>{{ word.japan }}</td>
        </tr>
       
        </table>
    </div>
</template>
 

 
<script>
import {api} from '../helpers/helpers';

export default{
    name: 'Search',
    data(){
        return{
            words:[],
            input_word:'',
            searching:[]
           
        };
    },
  
    async mounted(){
        this.words = await api.getWords();
        console.log(this.words);
      
    },
    methods:{
        onSearching: async function () {
            var input_word_local = this.input_word.trim();
            if(input_word_local !==''){
                this.words = await api.searchWord(input_word_local);
                // console.log('Search result:',this.words);
            } else{
                this.words = await api.getWords()
            }
        }
    }
   
};
</script>

