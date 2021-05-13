




        var btnregister = document.getElementById('register');
        var txtemail = document.getElementById("EMAIL");
        var txtpass = document.getElementById("PASS");

        

        btnregister.addEventListener('click', e => {

            var email = txtemail.value;
            var pass = txtpass.value;

            const auth = firebase.auth();
            console.log("success");

        

            firebase.auth().createUserWithEmailAndPassword(email, pass)
                .then((userCredential) => {
                    // Signed in 

                    //redirect to dashbord now
                    var user = userCredential.user;
                    if(window.confirm('Successfully Registered')){
                           window.location.href="login2.html";
                         }
                         
                    console.log("email registered successfully");
                    registerDone();
                    
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;

                    console.log(errorMessage);

                    //show message alert
                    // ..
                });

        });


function data()
{
     event.preventDefault();
}


function registerDone() { 
    window.location.href="login2.html";
	//window.location.href="../Patient/patient_dash.html"; 
}
