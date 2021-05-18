function moveToAppointment_fix(){
        window.location = 'appointment_fix.html';
}

function getDoctorProfile(){
    const urlParams = new URLSearchParams(window.location.search);
    const doctor_id = urlParams.get('doctor_id');
    localStorage.setItem('doctor_id',doctor_id);

    axios.get("http://localhost:3000/d/profile/"+doctor_id)
    .then((response) => {
        console.log(response);
        document.getElementById("name").innerText = response.data.name;
        document.getElementById("phone").innerText = response.data.mobile;
        document.getElementById("email").innerText = response.data.email;
        document.getElementById("experience").innerText = response.data.experience;
        document.getElementById("highest_qualification").innerText = response.data.highest_qualification;
        document.getElementById("special").innerText = response.data.speciality;
        document.getElementById("photo").src='../img/doctor.jfif';
    })
    .catch((error) => {
        console.log('error is ' + error);
    })
}

getDoctorProfile();