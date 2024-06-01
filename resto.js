$(document).ready(function() {
	/* Smooth Scrolling */
	$("a").on("click", function(event) {
	  // Check if the clicked link has a hash value
	  if (this.hash !== "") {
		event.preventDefault();
		// Store the hash value
		var hash = this.hash;
		// Animate the scrolling
		$("html, body").animate({
			scrollTop: $(hash).offset().top,
		  },
		  800, // Duration of the animation in milliseconds
		  function() {
			// Update the URL hash
			window.location.hash = hash;
		  }
		);
	  }
	});
  });

/* Contact Form */
/* To send inquiry on gmail using Elastic Email Service */
function sendEmail(){
	Email.send({
		Host : "smtp.elasticemail.com", /* HOST SERVER */
		Username : "nolascofranklin09@gmail.com",
		Password : "87D3659F53FA24C0967777AF30EFF0CCB709", 
		To : 'fdrnolasco@slsu.edu.ph',
		From : document.getElementById("email").value,
		Subject : "New Contact Form Inquiry",
		Body : "message"
	}).then(
	  message => alert(message)
	);
}

  
  