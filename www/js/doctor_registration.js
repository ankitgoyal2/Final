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

//   function getBase64Image(img) {
//     var canvas = document.createElement('canvas');
//     var ctx = canvas.getContext('2d');
//     canvas.width = img.width;
//     canvas.height = img.height;

    
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

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
    var phone = document.getElementById("MOBILE").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var highest_qualification = document.getElementById("highestQuali").value;
    var lat = document.getElementById("latitude").innerText;
    var long = document.getElementById("longitude").innerText;




    //  var profile_pic = document.getElementById("profile_pic").files[0];
    //  if(profile_pic!=null)
    //  {
    //     console.log('profile loaded');
    //     var canvas = document.createElement('canvas');
    //     var ctx = canvas.getContext('2d');
    //     canvas.width = profile_pic.width;
    //     canvas.height = profile_pic.height;

        
    //     ctx.drawImage(profile_pic, 0, 0);

    //     var dataURL = canvas.toDataURL("image/png");

    //     var imgdata = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
            
    //         // var imgData = getBase64Image(profile_pic);

    //     localStorage.setItem('profile_pic',imgData);
    //     console.log(imgdata);
    //     console.log("completed");

    //  }
    //  else
    //  {
    //    console.log('profile not loaded');
    //  }
     



   
    // var genders = document.getElementsByName("GENDER");
    // var selectedGender;

    var data = {
      name : fname+' '+lastname,
      email ,
      password : pass,
      mobile : phone,
      address : {
        location : {lat , long },
        city,
        state,
      },
      highest_qualification,
      speciality : doctorType,
    }

    localStorage.setItem('data',JSON.stringify(data));
  

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