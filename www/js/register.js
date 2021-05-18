$(function(){
	$.validator.setDefaults({
		highlight: function(element){
			$(element)
			.closest('.form-group')
			.addClass('has-error')
		},
		unhighlight: function(element){
			$(element)
			.closest('.form-group')
			.removeClass('has-error')
		}
	});
	
	$.validate({
		rules:
		{	
		    password: "required",
			birthDate: "required",
			
			email: {
				required: true,
				email: true
			}
		},
		
				password: {
					required: " Please enter password"
				},
				birthDate: {
					required: " Please enter birthdate"
				},
				email: {
					required: ' Please enter email',
					email: ' Please enter valid email'
				},
				
			}
			
	);
});


// $("form").on("change", ".file-upload-field", function(){ 
//     $(this).parent(".file-upload-wrapper").attr("data-text",         $(this).val().replace(/.*(\/|\\)/, '') );
// });

function registerDone() { 
	window.location.href="login.html"; 
  } 