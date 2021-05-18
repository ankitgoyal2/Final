    const token = localStorage.getItem('token');
    console.log('token is '+token);

    const lat = localStorage.getItem('lat');
    const long = localStorage.getItem('long');
    const distance = localStorage.getItem('distance');

    data = { lat, long, distance};

    axios.get("http://localhost:3000/p/nearby-doctors",data,{
        headers: {
            authorization: `Bearer ${token}`,
        }
    })
    .then(function (response) {

        console.log(response);
        const data = response.data.doctors;
        for(let i=0;i<data.length;i++)
        {
        const { name, speciality, highest_qualification, _id} = data[i];
        const outerDiv = document.createElement('div');
        outerDiv.classList.add('col-6');
        const innerDiv = document.createElement('div');
        innerDiv.classList.add('text-center');
        const docImage = document.createElement('img')
        docImage.classList.add('rounded-circle');
        docImage.src = '../img\\doctor.jfif';
        const docName = document.createElement('h5');
        docName.innerText = name;
        const buttonLink = document.createElement('a');
        buttonLink.href = 'patient_doctor_profile.html?doctor_id=' + _id;
        const buttonClick = document.createElement('button')
        buttonClick.classList.add('btn','btn-sm','btn-primary')
        buttonClick.innerText = 'Book Appointment'


        buttonLink.appendChild( buttonClick );

        innerDiv.appendChild( docImage );
        innerDiv.appendChild( docName );
        innerDiv.appendChild( buttonLink );

        outerDiv.appendChild(innerDiv);

        const doctorList = document.getElementById('doctor_list');

        doctorList.appendChild(outerDiv);
        }
        


        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always ex
        
    });



