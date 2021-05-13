const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
document.getElementById("name").innerText = urlParams.get('name');
document.getElementById("date").innerText = urlParams.get('appointment_date');
document.getElementById("shift").innerText = urlParams.get('shift');
document.getElementById("consultation_type").innerText = urlParams.get('consultation_type');
document.getElementById("phone").innerText = urlParams.get('phone');
document.getElementById("allergy").innerText = urlParams.get('allergy');
document.getElementById("symptoms").innerText = urlParams.get('symptons');
document.getElementById("othDetail").innerText = urlParams.get('other_details');
document.getElementById("timings").innerText = urlParams.get('appoinment_timeing');
document.getElementById("email").innerText = urlParams.get('email');
document.getElementById("h_history").innerText = urlParams.get('h_history');
document.getElementById("medicalCerti").innerText = urlParams.get('medi_certificate');

window.localStorage.setItem('p_email',urlParams.get('email'))
//picture
document.getElementById("photo").src=`https://connectingit.in/ords/shoppergoldeneye/core/patientpicture/${urlParams.get('email')}`

//Adding Room id to video call button

// document.getElementById("videoCall").href=`googlechrome://navigate?url=https://mymediapp.s3.ap-south-1.amazonaws.com/video-call.html?room=${urlParams.get('email')}`; 


console.log(queryString);