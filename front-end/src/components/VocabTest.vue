<template>
    <div>
      <h2>Score: {{ score }} out of {{ this.words.length }}</h2>
  
      <form action="#" @submit.prevent="onSubmit">
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="germany flag"></i> German
          </div>
          <input type="text" readonly :disabled="testOver" :value="currWord.german"/>
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="united kingdom flag"></i> English
          </div>
          <input type="text" placeholder="Enter word..." v-model="english" :disabled="testOver" autocomplete="off" />
        </div>
        <div class="ui labeled input fluid">
          <div class="ui label">
            <i class="japan flag"></i> japan
          </div>
          <input type="text" placeholder="Enter word..." v-model="japan" :disabled="testOver" autocomplete="off" />
        </div>
  
        <button class="positive ui button" :disabled="testOver">Submit</button>
      </form>
  
      <p :class="['results', resultClass]">
        <span v-html="result"></span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'vocab-test',
    props: {
      words: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        randWords: [...this.words.sort(() => 0.5 - Math.random())],//mảng chứa các từ được trộn ngẫu nhiên cho bài test
        incorrectGuesses: [],//Mảng chứa các từ đoán sai.
        result: '',//Biến chứa kết quả
        resultClass: '',//Biến chứa css  tương ứng với kết quả 
        english: '',//Biến chứa giá trị người dùng nhập vào
        japan:'',
        score: 0,// Biến chứa giá trị điểm khi người dùng làm đúng
        testOver: false//kiểm tra còn câu để hỏi ko để xem bài kiểm tra đã két thúc hay chưa
      };
    },
    computed: {
      currWord: function() { 
        return this.randWords.length ? this.randWords[0] : '';
      }
    },
    methods: {
      onSubmit: function() {//// kiểm tra xem ngừi dùng có nhập đúng từ trong bài test không
        if (this.english.toLowerCase() === this.currWord.english.toLowerCase() && this.japan.toLowerCase() === this.currWord.japan.toLowerCase()) {
          this.flash('Correct!', 'success', { timeout: 1000 });
          this.score += 1;
        }// else if(){
        //   this.flash('Correct!', 'success', { timeout: 1000 });
        //   this.score += 1;
        // }
        else {
          this.flash('Wrong!', 'error', { timeout: 1000 });
          this.incorrectGuesses.push(this.currWord.german);
        }
  
        this.english = '';
        this.japan ='';
        this.randWords.shift();
  
        if (this.randWords.length === 0) {
          this.testOver = true;
          this.displayResults();
        }
      },
      displayResults: function() {
        if (this.incorrectGuesses.length === 0) {
          this.result = 'You got everything correct. Well done!';
          this.resultClass = 'success';
        } else {
          const incorrect = this.incorrectGuesses.join(', ');
          this.result = `<strong>You got the following words wrong:</strong> ${incorrect}`;
          this.resultClass = 'error';
        }
      }
    }
  };
  </script>
  

  
  <style scoped>
  /* css cho font end test ví dju như khi người dùng nhập đúng , nhập sai thì hiện thị correct hoặc wrong */
  .results {
    margin: 25px auto;
    padding: 15px;
    border-radius: 5px;
  }
  
  .error {
    border: 1px solid #ebccd1;
    color: #a94442;
    background-color: #f2dede;
  }
  
  .success {
    border: 1px solid #d6e9c6;
    color: #3c763d;
    background-color: #dff0d8;
  }
  </style>