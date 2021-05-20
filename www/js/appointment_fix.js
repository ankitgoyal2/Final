$(document).ready(function(){
$(".hamburger").click(function(){
  $(".wrapper").toggleClass("collapse");
});
});


        axios.get( 'http://aqueous-spire-38105.herokuapp.com/p/profile',{
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }).then(function (response) {
          // handle success
          const {name,email,mobile} = response.data;

          document.getElementById('fullName').value = name;
          document.getElementById('email').value = email;
          document.getElementById('phoneNumber').value = mobile;

          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })


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

        document.getElementById("appointment_form").addEventListener("submit", function(event){
            event.preventDefault()
            var app_date = document.getElementById("appDate").value;
            var shift_time = document.getElementById("appTime").value;
            // shift_time=shift_time.options[shift_time.selectedIndex].parentNode.label;

            var date = document.getElementById("appDate").value;




            var symptoms = document.getElementById("symptons").value;
            var allergy = document.getElementById("allergies").value;
            //var otr_comp = document.getElementById("otherComplaint").value;
            var history = document.getElementById("healthHistory").value;
            //var file = document.getElementById("filea").files[0];




            var data ={timeSlot:shift_time,date,amount:2000,symptoms,allergy,history}

            
            const doctor_id = localStorage.getItem('doctor_id');
            axios.post( 'http://aqueous-spire-38105.herokuapp.com/p/appointments/book/'+doctor_id,data,{
                headers: {
                  authorization: `Bearer ${localStorage.getItem('token')}`,
                },
              }).then(function (response) {
                // handle success

                console.log(response);
              })
        });
        
        function appoinment(){}

//DAte VAlidation to prevent choosing date oldder than todya
    let today = new Date(),
    day = today.getDate(),
    month = today.getMonth()+1, //January is 0
    year = today.getFullYear();
    if(day<10) day='0'+day
        
    if(month<10)  month='0'+month
        
    today = year+'-'+month+'-'+day;

    document.getElementById("appDate").setAttribute("min", today);
    document.getElementById("appDate").setAttribute("value", today);

    