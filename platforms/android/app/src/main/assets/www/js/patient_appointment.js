const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

document.getElementById("date").innerText = urlParams.get('appointment_date');
document.getElementById("shift").innerText = urlParams.get('shift');
document.getElementById("consultation_type").innerText = urlParams.get('consultation_type');
document.getElementById("allergy").innerText = urlParams.get('allergy');
document.getElementById("symptoms").innerText = urlParams.get('symptons');
document.getElementById("othDetail").innerText = urlParams.get('other_details');
document.getElementById("timings").innerText = urlParams.get('appoinment_timeing');
document.getElementById("h_history").innerText = urlParams.get('h_history');
document.getElementById("medicalCerti").innerText = urlParams.get('medi_certificate');

window.localStorage.setItem('d_email','gaurav8315@gmail.com')

//picture
document.getElementById("photo").src=`https://connectingit.in/ords/shoppergoldeneye/core/patientpicture/${urlParams.get('email')}`

//Adding Room id to video call button
document.getElementById("videoCall").href=`new_video-call.html?room=${urlParams.get('email')}`; 


console.log(queryString);