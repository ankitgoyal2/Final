$(document).ready(function(){
$(".hamburger").click(function(){
  $(".wrapper").toggleClass("collapse");
});
});

const disableButton = ()=>{
            const button = document.getElementById("bookApp");
            button.innerText= "Booking Appointment...";
            button.disabled = true;
            
        }

const enableButton = ()=>{
            const button = document.getElementById("bookApp");
            button.innerText= "Book Appointment";
            button.disabled = false;
        }

function appoinment(){
//alert("hahhahah");

/***********************/
var app_date = document.getElementById("appDate").value;
var shift_time = document.getElementById("appTime");
shift_time=shift_time.options[shift_time.selectedIndex].parentNode.label;

var timeing = document.getElementById("appTime").value;



var name = document.getElementById("fullName").value;
var phone = document.getElementById("phoneNumber").value;
var email = document.getElementById("email").value;
var symptoms = document.getElementById("symptons").value;
var allergy = document.getElementById("allergies").value;
var otr_comp = document.getElementById("otherComplaint").value;
var h_history = document.getElementById("healthHistory").value;
var file = document.getElementById("filea").files[0];
var c_types = document.getElementsByName("consType");
      var c_type;

      for(var i = 0; i < c_types.length; i++) {
       if(c_types[i].checked)
       c_type = c_types[i].value;
        }

var medi_certis = document.getElementsByName("medCerti");
      var medi_certificate;

      for(var i = 0; i < medi_certis.length; i++) {
       if(medi_certis[i].checked)
       medi_certificate = medi_certis[i].value;
        }

var data ={app_date,shift_time,timeing,c_type,name,phone,email,symptoms,allergy,medi_certificate,otr_comp, h_history, file,}


var myHeaders = new Headers();
myHeaders.append("PATIENT_ID", window.localStorage.getItem('email'));
myHeaders.append("DR_ID", window.localStorage.getItem('d_email'));
myHeaders.append("APPOINTMENT_DATE", app_date);
myHeaders.append("SHIFT", shift_time);
myHeaders.append("APPOINMENT_TIMEING", timeing);
myHeaders.append("CONSULTATION_TYPE", c_type);
myHeaders.append("NAME", name);
myHeaders.append("PHONE", phone);
myHeaders.append("EMAIL", email);
myHeaders.append("SYMPTONS", symptoms);
myHeaders.append("ALLERGY", allergy);
myHeaders.append("MEDI_CERTIFICATE", medi_certificate);
myHeaders.append("OTHER_DETAILS", otr_comp);
myHeaders.append("H_HISTORY", h_history);
myHeaders.append("Content-Type", "image/png");
/***********************/

console.log(data)


var requestOptions = {
 method: 'POST',
 headers:myHeaders,
 body: file,
 redirect: 'follow'
};


fetch("https://connectingit.in/ords/shoppergoldeneye/core/appoinment/", requestOptions)
 .then(response => response.text())
 .then(result => {console.log(result); 
  alert('Appointment Booked');
  window.location = "patient_dash.html";
    })
 .catch(error =>{console.log('Something Bad has happened, please contact Us');});

}

 

function goForPayment(){
  disableButton();
  event.preventDefault();
  alert('Please Do Payment and Your appointment will be Booked');
  window.location.href = "paymentform.html";
}

function ifPaymentDone(){
    var storage = window.localStorage;
    console.log(window.localStorage.getItem('payment-successful'))
    if(storage.getItem('payment-successful')==='yes'){
      disableButton();
     
      storage.removeItem('payment-successful');
      setTimeout(()=>{appoinment()},100)
    }
  }

  ifPaymentDone();


    // DAte VAlidation to prevent choosing date oldder than todya
    let today = new Date(),
    day = today.getDate(),
    month = today.getMonth()+1, //January is 0
    year = today.getFullYear();
    if(day<10) day='0'+day
        
    if(month<10)  month='0'+month
        
    today = year+'-'+month+'-'+day;

    document.getElementById("appDate").setAttribute("min", today);
    document.getElementById("appDate").setAttribute("value", today);


    var storage = window.localStorage;
    var email = storage.getItem('email'); // Pass a key name to get its value.
  const url = `https://connectingit.in/ords/shoppergoldeneye/core/patscheduleappointautopop/${email}`;
  fetch(url)
  .then(res=>res.json())
  .then(res=>{
      const fullName = document.getElementById('fullName');
      const phoneNumber = document.getElementById('phoneNumber');
      const email = document.getElementById('email');

      fullName.value = res.items[0].name;
      email.value = res.items[0].email;
      phoneNumber.value = res.items[0].mobile;


    console.log(res.items[0]);

  })