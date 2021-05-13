let today = new Date(),
day = today.getDate(),
month = today.getMonth()+1, //January is 0
year = today.getFullYear();
if(day<10) day='0'+day
if(month<10) month='0'+month

today = year+'-'+month+'-'+day;
document.getElementById("next-appointment").setAttribute("min", today);
document.getElementById("next-appointment").setAttribute("value", today);

function rr_submit(){
    event.preventDefault();
    disableButton('r_submit');

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
        done('r_submit');
      }
    });
    
    xhr.open("POST", "https://connectingit.in/ords/shoppergoldeneye/core/COR_REFERREL/");
    xhr.setRequestHeader("dr_id", window.localStorage.getItem('email'));
    xhr.setRequestHeader("pt_id", window.localStorage.getItem('p_email'));
    xhr.setRequestHeader("pharmacy", document.getElementById('pharmacy').value);
    xhr.setRequestHeader("diagnostic_center", document.getElementById('diagnostic-center').value);
    xhr.setRequestHeader("next_ppointment", document.getElementById('next-appointment').value);
    
    xhr.send();

}
