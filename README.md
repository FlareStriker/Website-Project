# Website-Project
<!DOCTYPE html>
<html>
  <head>
  <title> Home </title>
  <meta charset="UTF-8">
  <div class = "header">
  <h1> Home Page <h/1>
  </div>
  <div class = "navigation">
  <a href="#">About</a>
  <a href="#">Contact</a>
  <hr>
  </hr>
  <div/>


  
<div class = "body">
</div>

<style>

a{
  color: black;
  text-decoration: underline;
}

body {
  font-family: Times New Roman;
  padding: 25px;
  
  }
  .navigation{
    padding: 5px;
    font-size: 20px;
    background: #56a5ec;
    text-align: Center;
    background-color: #238FDA;
    
  }
  .navigation a:hover{
    background-color: white;
    color: black;
  }

  .header {
  padding: 35px;
  text-align: Center;
  background: #56a5ec;
  color: white;
  font-size: 14px;
  }

  .footer{
     padding: 45px;
  background: #56a5ec;
  font-size: 14px;
  }

  .column{
    display: flex;
    flex-wrap: wrap;
    

  }
 
  </head>
</style>


 <body>

  <p> 
  This is the front page of my website. This will have a short gallery of the things I enjoy and will hopefully act as links to other pages.
 </p>

  <button type="button"
  onclick="document.getElementById('demo').innerHTML = Date()">
  Would you like to know the time?</button>

  
  </body>

  /* Placeholders for when I want to add images*/
  <div class = "column">
    <div class = "row">
      <img src = "placeholder.jpg">
      <img src = "placeholder.jpg">
    </div>
  </div>

   <div class = "footer">
    <h2></h2>
  </div>
  
</html>
