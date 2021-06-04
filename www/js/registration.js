
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


    if(validateConfirmPassword()==false){ enableButton(); return;} 
    document.getElementById("errCPass").innerHTML = "";




    var fname = document.getElementById("F_NAME").value;
    var lastname = document.getElementById("L_NAME").value;
    var email = document.getElementById("EMAIL").value;
    var pass = document.getElementById("PASS").value;
    var dob = document.getElementById("DOB").value;
    var phone = document.getElementById("MOBILE").value;
    var city = document.getElementById("CITY").value;
    var state = document.getElementById("STATE").value;
    var lat = document.getElementById("LATITUDE").innerText;
    var long = document.getElementById("LONGITUDE").innerText;


    

    // var genders = document.getElementsByName("GENDER");
    // var selectedGender;

    var profile_pic = document.getElementById("file").files[0];

    //compress image
    const config = {
      file: profile_pic,
      maxSize: 400
    };
    profile_pic = await resizeImage(config)

    //filesize in kb
    // var filesize = ((profile_pic.size/1024)).toFixed(4);
    // console.log('image size '+filesize + ' Kb');
    // if(filesize>300){
    //   window.alert('File size exeeded 300 kb');
    //   return
    // }

    var profile_picBase64 = await toBase64(profile_pic).catch(e => Error(e));
    if(profile_picBase64 instanceof Error) {
        console.log('Error: ', profile_picBase64.message);
        return;
    }
    //console.log(profile_picBase64);


    var data = {
      name : fname+' '+lastname,
      email ,
      image : profile_picBase64,
      password : pass,
      mobile : phone,
      address : {
        location : {lat , long },
        city,
        state,
      },
    }

    localStorage.setItem('data',JSON.stringify(data));

    axios.post('http://aqueous-spire-38105.herokuapp.com/p/register', data)
    .then(response => {
      
      alert('Patient Registered Successfully');
      //  save token to local storage
      localStorage.setItem('token',response.data.token);
      console.log('token saved in localstorage');

      window.location = "login2.html";
    })
    .catch(error =>{
      console.log("some error occured");
      console.log(error);
      enableButton();
    })



}