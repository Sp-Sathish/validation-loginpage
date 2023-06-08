


const form =document.querySelector('#form');
const username =document.querySelector('#username');
const email=document.querySelector('#email');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword'); 





function fun1(){
    const usernameVal = username.value.trim()
   if(usernameVal==""){
    document.getElementById("error1").innerHTML="please enter username";
    
   }
   else{
    document.getElementById("error1").innerHTML="";
    


   }}

function fun2(){
    const emailVal = email.value.trim()
   if(emailVal==""){
    document.getElementById("error2").innerHTML="please enter email";

   }
   else{
    document.getElementById("error2").innerHTML="";
    

}}
function fun3(){
    const passwordVal = password.value.trim()
   if(passwordVal==""){
    document.getElementById("error3").innerHTML="please enter password";
   }
   else{
    document.getElementById("error3").innerHTML="";
    

}
}
function fun4(){
    const cpasswordVal = cpassword.value.trim()
   if(cpasswordVal==""){
    document.getElementById("error4").innerHTML="please enter password";
   
   }
   else{
    document.getElementById("error4").innerHTML="";
   

}
}

form.addEventListener('submit',(e)=>{
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim()
    const passwordVal = password.value.trim()
    const cpasswordVal = cpassword.value.trim()

    e.preventDefault();


    if(usernameVal ===""){
        document.getElementById("error1").innerHTML="Username is required";
    }
    else{
        document.getElementById("error1").innerHTML="";
    }

    if(emailVal ===""){
        document.getElementById("error2").innerHTML="Email is required";
    }
    
    else{
        document.getElementById("error2").innerHTML="";
    }

    if(passwordVal===''){
        document.getElementById("error3").innerHTML="Password is required";
    }
    else if(passwordVal.length<8){
        document.getElementById("error3").innerHTML="Password must be 8 chareacters";
    }
    else{
        document.getElementById("error3").innerHTML="";
    }

    if(cpasswordVal===''){
        document.getElementById("error4").innerHTML="Password is required";
    }
    else if(cpasswordVal !== passwordVal){
        document.getElementById("error4").innerHTML="Password does not match";
    }
    else{
        document.getElementById("error4").innerHTML="";
    }

}) 