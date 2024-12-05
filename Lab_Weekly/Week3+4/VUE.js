 
Vue.component('product-details',{
    props:{details:{
        type: Array,
        required: true
    }},
    template:`<ul >
    <li v-for="detail in details">{{detail}}</li><!--challenge 8-->
</ul>`
})




Vue.component('product',{
    props:{premium:{
        type: Boolean,
        required: true
    }},
    template:
    ` <div id="app" class="product-info">
    <!--task 2.7-->
      <h1>{{ title }}</h1>  
    
    <!--task1-->
    <!-- <h1>{{ product }}</h1> -->
    {{ message }}
    <p> {{description}}</p><!--task1.1 challenge-->
    <h2></h2>
    <p>Shipping:{{shipping}}</p>
    <div><a v-bind:href="anchor"> Link for vue </a></div> <!--task1.2 challenge-->
    
    

    <div class="product-image">

        <img v-bind:src="image" v-bind:alt="altText" />
    </div>
    <span v-if="inventory > 10">On Sale! </span><!--task1.3-->
    <span v-else-if="inventory <= 10 && inventory">Almost sold out!</span><!--task1.3 challenge-->
    <span v-else>Out Stock</span><!--task1.3challenge-->

    <product-details :details="details" ></product-details> <!--challenge 8-->

    <!-- <div v-for="variant in variants" :key="variant.variantId"  >
        <p @mouseover="updateProduct(variant.variantImage)">{{variant.variantColor}}</p>
    </div> -->

    <ul >
        <li v-for="detailsize in detailssize">{{detailsize}}</li> <!--task1.4challenge-->
    </ul>
    <!--task2-->
    <!--  <div class="cart"><p>Cart({{cart}})</p></div> -->
    <!-- <button v-on:click="cart +=1"> Add to cart</button> -->

    <!-- <button v-on:click="addToCart"> Add to cart</button> -->
    <br/>
   <!-- <button v-on:click="removeInCart"> Remove in cart</button>--><!--task2.5challenge--> 

  
   
 

<!--task 1-->
    <!-- <div class="color-box"
     v-for="variant in variants" :key="variant.variantId" :style="{backgroundColor: variant.variantColor}" 
         @mouseover="updateProduct(variant.variantImage)" >
    </div> -->
    
<!--task2.7-->
    <div class="color-box"
    v-for="(variant, index) in variants" :key="variant.variantId" :style="{backgroundColor: variant.variantColor}" 
        @mouseover="updateProduct(index)" >
   </div>
    <button 
    v-on:click="addToCart"
    :disabled="!inStock"
    :class="{disabledButton:!inStock}"
    > Add to cart</button>


    <button v-on:click="removeInCart"> Remove in cart</button> <!--challenge 9-->
    
   <div class ="outStock"><p v-if="!inStock" >Out Stock</p> </div><!--task2.6challenge-->

   <!--task 3. 10-->

   <product-review @review-submitted="addReview"></product-review> 
   <div>
   <h2>Reviews</h2>
   <p v-if="!reviews.length">There are no reviews yet.</p>
   <ul>
     <li v-for="review in reviews">
     <p>{{ review.name }}</p>
     <p>Rating: {{ review.rating }}</p>
     <p>{{ review.review }}</p>
     </li>
   </ul>
  </div>

  
   </div>
    `,
    data(){
        return{message:'Hello Customer',
        product:'Socks',
        brand:'Vue Mastery',
        description:'A pair of warm, fuzzy socks',
        // image:"./Intro-to-Vue-master-moodle/assets/images/socks_blue.jpg",
      
        altText:"a pair of socks",
        anchor:"https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding",
        //  inStock:false,
       
        inventory:100,
        details:["80%cotton","20% polyester","gender-neutral"],
        selectedVariant:0,
        variants:[
            {
                variantId: 2234,
                variantColor:"green",
                variantImage:"Intro-to-Vue-master-moodle/assets/images/socks_green.jpg",
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor:"blue",
                variantImage:"Intro-to-Vue-master-moodle/assets/images/socks_blue.jpg",
                variantQuantity: 10
            },
        ],
        detailssize:["SM","SML","M","L","XL"],
        cart:0,
        reviews: [],//<!--task 3. 10-->
    }
        
    

    },
    methods:{
        // addToCart(){
        //     this.cart +=1
        // },
        // updateCart(id) {
        //     this.cart.push(id)
        //   },


        //  task 3.9 
        addToCart(){  
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
        },
        removeInCart(){// challenge 9
            this.$emit('remove-in-cart')
        },updateProduct(index){
            this.selectedVariant = index
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)//<!--task 3. 10-->
          }
        
    },
    computed: {
        title() {
            return this.brand + ''+this.product
        }
        , inStock() {
            return this.variants[this.selectedVariant].variantQuantity    
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        shipping(){
            if (this.premium){
                return "Free"
            }
            return 2.99
        }
    },
    
})

//<!--task 3. 10-->
Vue.component('product-review', {
    template: `
    

      <form class="review-form" @submit.prevent="onSubmit">
      <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
    </p>
      <p>
        <label for="name">Name:</label>
        <input required id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
      <p><!--challenge 10-->
      <label for="Yes">Yes, I recommend this product</label>
      <input type="radio" name="recommendation" checked id="Yes" v-model="recommendation" value="Yes">
      <label for="No">No, I not recommend this product</label>
      <input type="radio" name="recommendation" id="No" v-model="recommendation" value="No">
  </p>
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
   
  
  
    </form>
    `,
    data() {
      return {
        name: null,
        review: null,
        rating: null,
        recommendation: null,  //<!--challenge 10-->
        errors: []
      }
    },methods:{
        onSubmit() {
            if(this.name && this.review && this.rating) {
            let productReview = {
              name: this.name,
              review: this.review,
              rating: this.rating,
              recommendation: this.recommendation,//<!--challenge 10-->
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
            this.recommendation = null//<!--challenge 10-->
        }else {
            if(!this.name) this.errors.push("Name required.")
            if(!this.review) this.errors.push("Review required.")
            if(!this.rating) this.errors.push("Rating required.")
            if(!this.recommendation) this.errors.push("Recommend required.");//<!--challenge 10-->
          }
          },
         
    }
  })



var app = new Vue({
    el: '#app',
    data:{
        premium: false,
        detailProduct: false,
        cart: []
    },
    methods:{
        // addToCart(){
        //     this.cart +=1
        // },
        updateCart: function(id) {
            this.cart.push(id)
          },
          removeInCart: function(){ // challenge 9
            if(this.cart.length > 0){
                this.cart.pop()
            }
        },
        }
})
