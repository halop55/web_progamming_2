<template>
    <div>
        <h1>Words</h1>
        <h2>Total of words in list: {{ this.words.length }}</h2>

        <td><input type="text" style="resize: none" cols="20" rows="1" name="description" v-model="input_word"></input> </td>
        <td><Button @click="onSearching"> Search</Button></td>
        <td></td>








        
        <!--  v-if="words.length !=0" -->
        <table id = "words" class = "ui celled compact table" >
        <thead>
            
            <tr>
                <th>German</th>
                <th>English</th>
                <th>japan</th>
                <th colspan="3"></th>
            </tr>
        </thead>
        <tr   v-for ="(word,i) in words" :key="i">
            <td>{{ word.german }}</td>
            <td>{{ word.english }}</td>
            <td>{{ word.japan }}</td>
            
            <td width="75" class="center aligned">
            <router-link :to ="{name: 'show', params:{id: word._id}}">Show</router-link>
            </td>
            <td width="75" class="center aligned">
                <router-link :to="{name: 'edit', params:{id: word._id}}">Edit</router-link>
            </td>
            <td width="75" class="center aligned" @click.prevent="onDestroy(word._id)">
                <a :href="`/words/${word._id}`">Destroy</a>
            </td>

        </tr>
        </table>
    </div>
</template>

<script>
import {api} from '../helpers/helpers';


export default{
    name: 'words',
    data(){
        return{
            words:[]
        };
    },
    methods:{
        async onDestroy(id){
            const sure = window.confirm('Are you sure you want to delete this word??');
            if (!sure) return;
            await api.deleteWord(id);
            this.flash('Word deleted sucessfully !', 'success');
            const neWords = this.words.filter(word => word._id !==id);
            this.words = neWords;
        }
    },
    async mounted(){
        this.words = await api.getWords();
        console.log(this.words)
    }
    
};
</script>


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