function moveToAppointment_fix(){
        window.location = 'emergency_appointment_fix.html';
}

function getDoctorProfile(){
    const urlParams = new URLSearchParams(window.location.search);
    const doctor_id = urlParams.get('doctor_id');
    localStorage.setItem('doctor_id',doctor_id);

    axios.get("http://aqueous-spire-38105.herokuapp.com/d/profile/"+doctor_id)
    .then((response) => {
        console.log(response);
        document.getElementById("name").innerText = response.data.name;
        document.getElementById("phone").innerText = response.data.mobile;
        document.getElementById("email").innerText = response.data.email;
        document.getElementById("work_experience").innerText = response.data.work_experience+' years';
        document.getElementById("highest_qualification").innerText = response.data.highest_qualification;
        document.getElementById("special").innerText = response.data.speciality;
        // document.getElementById("photo").src='../img/doctor.jfif';
        if (typeof response.data.imgType !== 'undefined'){
                document.getElementById("photo").src = `data:${response.data.imgType};base64,${response.data.imgStr}`;
        }
    })
    .catch((error) => {
        console.log('error is ' + error);
    })
}

getDoctorProfile();