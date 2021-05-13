





    var messageRef =  firebase.database().ref('messages');

    const disableButton = ()=>{
        const button = document.getElementById("register");
        button.innerText= "Registering...";
        button.disabled = true;
        
    }

    const enableButton = ()=>{
        const button = document.getElementById("register");
        button.innerText= "Register";;
        button.disabled = false;
    }

   function validateConfirmPassword(){
    var confirm_pass = document.getElementById("confirm_pass").value;
    var pass = document.getElementById("PASS").value;

    if(confirm_pass===pass) return true;
    else{
        document.getElementById("errCPass").innerHTML = "Both Password Doesn't Match";
        return false;
    }
    }

function data(){
        
        //Disabling Button and show spinner
        event.preventDefault();


        if(validateConfirmPassword()==false){ enableButton(); return;} 
        document.getElementById("errCPass").innerHTML = "";




  var name = document.getElementById("F_NAME").value;
  var lastname = document.getElementById("L_NAME").value;
  var email = document.getElementById("EMAIL").value;
  var pass = document.getElementById("PASS").value;
  var dob = document.getElementById("DOB").value;
  var phone = document.getElementById("MOBILE").value;
  var genders = document.getElementsByName("GENDER");
  var selectedGender;

  for(var i = 0; i < genders.length; i++) {
   if(genders[i].checked)
   selectedGender = genders[i].value;
    }

  /*var myHeaders = new Headers();
  myHeaders.append("F_NAME", name);
  myHeaders.append("L_NAME", lastname);
  myHeaders.append("EMAIL", email);
  myHeaders.append("PASS", pass);
  myHeaders.append("DOB", dob);
  myHeaders.append("MOBILE", phone);
  myHeaders.append("GENDER", selectedGender);
  myHeaders.append("Content-Type", "image/png");*/
  var file = document.getElementById("file").files[0];
  
  /*var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: file,
    redirect: 'follow'
    
  };*/

  

  
    /* to authenticate register
    fetch("https://connectingit.in/ords/shoppergoldeneye/core/imges/", requestOptions)
            .then(response => response.text())
    .then(result => { 
              
                    if(result==1||result==="1"){ alert('Email-Id already Registered'); enableButton(); }
                    //        else {
                      //        alert('Now Verify OTP sent to Email');
                        //      window.location.href= `otp_verification.html?email=${email}`;
                      else {
                                 if(window.confirm('Successfully Registered, Now Do Login')){
                                     window.location.href="login2.html";
                                 }
                                 else 
                                 windows.location.href="login2.html";
                            }
                            console.log('result '+result);
                          })
    .catch(error => { console.log('error'); console.log('error', error) 
                          
                          enableButton();
          });*/
saveMessage(name,lastname,email,pass,dob,phone,genders,files);
}


let today = new Date(),
day = today.getDate(),
month = today.getMonth()+1, //January is 0
year = today.getFullYear();
if(day<10){
   day='0'+day
} 
if(month<10){
month='0'+month
}
today = year+'-'+month+'-'+day;
console.log(today)

document.getElementById("DOB").setAttribute("max", today);

//save message to firebase

function saveMessage(name,lastname,email,pass,dob,phone,genders,files){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name:name,
    lastname:lastname,
    email:email,
    pass:pass,
    dob:dob,
    phone:phone,
    genders:genders,
    files:files
  });
}




