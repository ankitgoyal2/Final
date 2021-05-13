const disableButton = (id)=>{
    document.getElementById(id).innerText= "Submitting...";
    document.getElementById(id).disabled=true;
}

const enableButton = (id)=>{
    document.getElementById(id).innerText= "Submit";
    document.getElementById(id).disabled=true;
}

const done= (id)=>{
    document.getElementById(id).innerText= "Saved";
    document.getElementById(id).disabled=true;
}