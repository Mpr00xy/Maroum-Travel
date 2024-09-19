//Start Form Section
function showCustomAlert(message) {
    var alertBox = document.getElementById("custom-alert");
    var alertMessage = document.getElementById("alert-message");
    var closeBtn = document.getElementById("close-alert");
  
    alertMessage.textContent = message;
    alertBox.style.display = "block";
  
    closeBtn.onclick = function() {
      alertBox.style.display = "none";
    };
  
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3000);
  }
  
  function sendMail(event) {
    event.preventDefault();
    var params = {
      firstName: document.getElementById("ijowk-6").value,
      LastName: document.getElementById("indfi-4").value,
      Email: document.getElementById("ipmgh-6").value,
      PhoneNumber: document.getElementById("imgis-5").value,
      Message: document.getElementById("i5vyy-6").value,
    };
  
    const serviceID = "service_7tm8mjh";
    const templateID = "template_osusold";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("ijowk-6").value = "";
        document.getElementById("indfi-4").value = "";
        document.getElementById("ipmgh-6").value = "";
        document.getElementById("imgis-5").value = "";
        document.getElementById("i5vyy-6").value = "";
        console.log(res);
        showCustomAlert("Your message sent successfully!");
      })
      .catch(err => {
        console.log(err);
        showCustomAlert("Failed to send message, please try again.");
      });
  }

    document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Get values from the input fields
    let firstName = document.getElementById('ijowk-6').value;
    let lastName = document.getElementById('indfi-4').value;
    let email = document.getElementById('ipmgh-6').value;
    let phoneNumber = document.getElementById('imgis-5').value;
    let message = document.getElementById('i5vyy-6').value;
    
    // Basic validation checks
    if (!firstName || !lastName || !email || !phoneNumber || !message) {
      alert('Please fill in all required fields.');
      event.preventDefault(); // Prevent form submission
      return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      event.preventDefault(); // Prevent form submission
      return;
    }
    
    // Phone number validation (example for 10 digits)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert('Please enter a valid phone number with 10 digits.');
      event.preventDefault(); // Prevent form submission
      return;
    }
  });


  //End Form Section
