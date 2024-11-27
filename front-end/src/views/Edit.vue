<template>
    <div>
        <h1>Edit word</h1>
        <!--ver 1  <word-form :word= this.word></word-form>  -->
        <word-form @createOrUpdate="createOrUpdate" :word= this.word></word-form>
        <!-- day la thang ma wordForm lay -->
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import {api} from '../helpers/helpers';

export default {
    name:'edit',
    components:{
        'word-form': WordForm
    },
    data: function(){
        return{
            word: {}
        };
    },
    async mounted(){
        this.word = await api.getWord(this.$route.params.id);
    },
    methods:{
        createOrUpdate: async function (word) {
            await api.updateWord(word);
            // alert('Word updated sucessfully!');
            this.flash('Word updated sucessfully!','success');
            this.$router.push(`/words/${word._id}`);
        }
    }
};
</script>