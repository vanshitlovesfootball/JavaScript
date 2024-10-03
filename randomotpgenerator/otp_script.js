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
</style>
<body style="background-color: grey;">
      <h1>Generate a random otp</h1>
      <h1 id="show_otp"></h1>
      <button class="button">Click on the button to generate random OTP.</button>
      
</body>
<script>

      const random_otp= document.querySelector("#show_otp");
      const bn = document.querySelector(".button")

      function generate_random_otp(length){
            let otp = "9";

            for(let i =0;i<length;i++){
                  otp = otp+Math.floor(Math.random()*10).toString();
            }
            // return otp;

            random_otp.innerHTML= otp;
      }

bn.addEventListener('click', function(){
      generate_random_otp(6);
});




</script>
</html>
