
<!DOCTYPE html>
<html lang="en">
<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
</head>

<style>
      html{
            height: 100%;
            width: 100%;
      }


      #grey{
            height: 100px;
            background-color: gray;
            width: 100px;
            position: absolute;
            margin-left: 400px;
            border-style: solid;

      }


      #red{
            height: 100px;
            background-color: red;
            width: 100px;
            position: absolute;
            margin-left: 520px;
            position: absolute;
            /* float: left;clear: both; */
            border-style: solid;
      }

      #blue{
            height: 100px;
            background-color: blue;
            width: 100px;
            position: absolute;
            margin-left: 640px;
            border-style: solid;
      }


      #yellow{
            height: 100px;
            background-color: yellow;
            width: 100px;
            position: absolute;
            margin-left: 760px;
            border-style: solid;
                  }


      .dd{
            height: 400px;
            width: 1000px;
            background-color: white;
            margin-top: 200px;
            margin-left: 450px;
      }
</style>
<body style="background-color: white;">

      <h1 style="text-align: center; ">Color Scheme Switcher</h1>

      <div class="button" id="grey"></div>
      <div class="button" id="red"></div>
      <div class="button" id="blue"></div>
      <div class="button" id="yellow"></div>


      <div class="dd"><h3>Try clicking on one of the above colors above</h3>
            <h3>to change the background color of this</h3>
            <h3 >page!</h3>

      </div>


      
</body>

<script>

      const all_divs=document.querySelectorAll('.button')
      const body=document.querySelector("body") 

      

      all_divs.forEach((item)=>{

            console.log(item);
            item.addEventListener('click',function(e){

                  console.log(e)
                  console.log(e.target)

                  if(e.target.id==="grey"){
                        body.style.backgroundColor=e.target.id
                  }
                  if(e.target.id==="red"){
                        body.style.backgroundColor=e.target.id
                  }
                  if(e.target.id==="blue"){
                        body.style.backgroundColor=e.target.id
                  }
                  if(e.target.id==="yellow"){
                        body.style.backgroundColor=e.target.id
                  }

            })

      });



      // addeventlistener basically tells the web page to interpret the event and display the call back function

      // const gege=document.querySelector('.dd')



</script>
</html>
