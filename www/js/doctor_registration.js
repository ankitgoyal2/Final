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

function data(){
        
    //Disabling Button and show spinner
    event.preventDefault();
    disableButton();

    var fname = document.getElementById("F_NAME").value;
    var lastname = document.getElementById("L_NAME").value;
    var email = document.getElementById("EMAIL").value;
    var pass = document.getElementById("PASS").value;
    var dob = document.getElementById("DOB").value;
    var registrationNumber = document.getElementById("registrationNumber").value;
    var doctorType = document.getElementById("doctorType").value;
    var city = document.getElementById("city").value;



    var phone = document.getElementById("MOBILE").value;
    // var genders = document.getElementsByName("GENDER");
    // var selectedGender;

    var data = {
      name : fname+' '+lastname,
      email ,
      password : pass,
      mobile : phone,
      address : city,
      highest_qualification : 'pg',
      speciality : doctorType,
    }

    

    axios.post('http://localhost:3000/d/register', data)
    .then(response => {
      
      alert('Doctor Registered Successfully');
      //  save token to local storage
      localStorage.setItem('token',response.data.token);
      console.log('token saved in localstorage');

      window.location = 'login.html';
    })
    .catch(error =>{
      console.log("some error occured");
      console.log(error);
      enableButton();
    })



}