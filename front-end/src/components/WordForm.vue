<template>
    <form action="#" @submit.prevent="onSubmit">
       <p v-if="errorsPresent" class="error">Please fill out all fields!</p>
   
       <div class="ui labeled input fluid">
         <div class="ui label">
           <i class="germany flag"></i> German
         </div>
         <input type="text" placeholder="Enter word..." v-model="word.german" />
       </div>
   
       <div class="ui labeled input fluid">
         <div class="ui label">
           <i class="united kingdom flag"></i> English
         </div>
         <input type="text" placeholder="Enter word..." v-model="word.english" />
       </div>
       <div class="ui labeled input fluid">
         <div class="ui label">
           <i class="japan flag"></i> Japan
         </div>
         <input type="text" placeholder="Enter word..." v-model="word.japan" />
       </div>
   
       <button class="positive ui button">Submit</button>
     </form>
   </template>
   
   <script>
   export default {
     name: 'word-form',
     props: {//nhận vào một đối tượng word chứa từ vựng với các trường english và german
       word: {
         type: Object,
         required: false,
         default:() =>{
          return{
            english:'',// trường(field) english
            german:'',// trường german
            japan:''//// trường japan
          };
         }
       }
     },
     data() {
       return {
         errorsPresent: false
       };
     },
     methods: {
       onSubmit: function() { // nếu nhấn submit mà giá trị trống thì sẽ hiện thông báo
        if(this.word.english ===''|| this.word.german===''|| this.word.japan==='' ){
            this.errorsPresent = true;
        } else {
            this.$emit('createOrUpdate', this.word);// gọi function của cua thang lớn hơn chứa thang nay(ở edit) cho them tham so cua thang con vao (this.word)
        }
        //  console.log(`English: ${this.word.english}`); out put when click in consol
        //  console.log(`German: ${this.word.german}`);
       }
     }
   };
   </script>
   
   <style scoped>
   .error {
     color: red;
   }
   </style>