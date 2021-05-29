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

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

var resizeImage = function (settings) {
    var file = settings.file;
    var maxSize = settings.maxSize;
    var reader = new FileReader();
    var image = new Image();
    var canvas = document.createElement('canvas');
    var dataURItoBlob = function (dataURI) {
        var bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
            atob(dataURI.split(',')[1]) :
            unescape(dataURI.split(',')[1]);
        var mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
        var max = bytes.length;
        var ia = new Uint8Array(max);
        for (var i = 0; i < max; i++)
            ia[i] = bytes.charCodeAt(i);
        return new Blob([ia], { type: mime });
    };
    var resize = function () {
        var width = image.width;
        var height = image.height;
        if (width > height) {
            if (width > maxSize) {
                height *= maxSize / width;
                width = maxSize;
            }
        } else {
            if (height > maxSize) {
                width *= maxSize / height;
                height = maxSize;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
        var dataUrl = canvas.toDataURL('image/jpeg');
        return dataURItoBlob(dataUrl);
    };
    return new Promise(function (ok, no) {
        if (!file.type.match(/image.*/)) {
            no(new Error("Not an image"));
            return;
        }
        reader.onload = function (readerEvent) {
            image.onload = function () { return ok(resize()); };
            image.src = readerEvent.target.result;
        };
        reader.readAsDataURL(file);
    });
};

async function data(){
        
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
    var work_experience = document.getElementById("Y_O_E").value;
    var phone = document.getElementById("MOBILE").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var highest_qualification = document.getElementById("highestQuali").value;
    var lat = document.getElementById("latitude").innerText;
    var long = document.getElementById("longitude").innerText;

    // var genders = document.getElementsByName("GENDER");
    // var selectedGender;


//==================================================================================
     var profile_pic = document.getElementById("profile_pic").files[0];
    //compress image
    const config = {
      file: profile_pic,
      maxSize: 400
    };
    profile_pic = await resizeImage(config)

     var profile_picBase64 = await toBase64(profile_pic).catch(e => Error(e));
      if(profile_picBase64 instanceof Error) {
          console.log('Error: ', profile_picBase64.message);
          return;
      }
     profile_picBase64 = profile_picBase64.split(",")[1];

//==================================================================================
     
    var highestQualiImg = document.getElementById("highestQualiImg").files[0];

     //compress image
    const configx = {
      file: highestQualiImg,
      maxSize: 400
    };
    highestQualiImg = await resizeImage(configx)

     var highestQualiImgBase64 = await toBase64(profile_pic).catch(e => Error(e));
     if(highestQualiImgBase64 instanceof Error) {
          console.log('Error: ', highestQualiImgBase64.message);
          return;
      }

      highestQualiImgBase64 = highestQualiImgBase64.split(",")[1];
//==================================================================================

   
    
    var data = {
      name : fname+' '+lastname,
      email ,
      image : {
        data : profile_picBase64,
        imageType : profile_pic.type,
      },
      password : pass,
      mobile : phone,
      address : {
        location : {lat , long },
        city,
        state,
      },
      highest_qualification,
      qualification_image :{
        data : highestQualiImgBase64,
        imageType : highestQualiImg.type,
      },
      work_experience,
      registration_number : registrationNumber,
      speciality : doctorType,
    }

    localStorage.setItem('data',JSON.stringify(data));
    console.log(data);

    // axios.post('http://aqueous-spire-38105.herokuapp.com/d/register', data)
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