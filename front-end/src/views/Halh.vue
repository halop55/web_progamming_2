<template>
    <div>
        <table>
            <tr>
                <td>
                <img id='Background'src="./Image/Back_ground2.jpg"></img>
                </td>
            </tr>
        </table>
        <table class="table_background">
            <tr>
                <td> 
                    <img id='avatar' src="./Image/Avatar.jpg"></img>
                </td>
                <td> 
                    <h1>HaLe(Wibulord)</h1>
                </td>
                
               
            </tr>
        </table>
        
        <table>
            <tr>
                <td>
        <p  class='txtdeepshadow'> Place of residence: </p>
        <p>Ho Chi Minh City </p>
                </td>
            </tr>
            <tr>
                <td>
        <p  class='txtdeepshadow'> Place of work:</p>
        <p>Studying at the University of Greenwich </p>
                </td>
            </tr>

            <!-- <tr>
                <td>
        <p  class='txtdeepshadow'> Hobbies:</p>
        <p>Like watching Anime, reading manga and playing games </p>
                </td>
            </tr>
            <tr>
                <td>
        <p  class='txtdeepshadow'> Current status:</p>
        <p>Wibulord </p>
                </td>
            </tr> -->
            <tr>
                <td>
        <p  class='txtdeepshadow'>Real name:</p>
        <p>Le Hoang Ha </p>
                </td>
            </tr>
        </table>
    </br>
</br>
        <table>
            <tr>
                <td> 
                    <img id='avatar_post' src="./Image/Avatar.jpg"></img>
                </td>
                <td> 
                    <p>HaLe(Wibulord) </br> 5 hours ago</p>
                </td>
            </tr>
        </table>
    </br>
        <table >
                <td>
                <p> 
                    Greetings and welcome to the website for language study.
                This website was built by myself, </br>Le Hoang Ha.
                The website was made with the intention of improving language learning.</br>
                 I am delighted that you have found this page, and I hope your visit will be as enjoyable as possible. 
                </br>I hope you learn well.
                </p>
                </td>   
            </table>
        </br>



    </div>
    
</template>

<script>
export default {
    name: 'Halh'
   
}
</script>
 <style>
    #avatar {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
     
    
    /* make a square container */
    width: 100px;
    height: 100px;

    /* fill the container, preserving aspect ratio, and cropping to fit */
     

    /* center the image vertically and horizontally */
    background-position: top center;

    /* round the edges to a circle with border radius 1/2 container size */
    border-radius: 50%;
    border: solid;
    border-color: black;
    }
    </style>

<style>
#Background {
    /* This image is 687 wide by 1024 tall, similar to your aspect ratio */
     
    
    /* make a square container */
    width: 750px;
    height: 350px;

    /* fill the container, preserving aspect ratio, and cropping to fit */
    background-size: cover;

    /* center the image vertically and horizontally */
    background-position: top center;

    /* round the edges to a circle with border radius 1/2 container size */
    
}
</style> 

<style>
#avatar_post {
/* This image is 687 wide by 1024 tall, similar to your aspect ratio */
 

/* make a square container */
width: 40px;
height: 40px;

/* fill the container, preserving aspect ratio, and cropping to fit */
 

/* center the image vertically and horizontally */
background-position: top center;

/* round the edges to a circle with border radius 1/2 container size */
border-radius: 50%;
border: solid;
border-color: black;
}
</style>
<style>
.txtdeepshadow {
     
    font-size: 20px;
    height: 10px;
   
    color: blue;
      
   
  }
  </style>
  <style>
  .table_background{
    background-color: #C8E2B1;
    top:70px;
    left: 400px;
    width: 750px;
}

</style>