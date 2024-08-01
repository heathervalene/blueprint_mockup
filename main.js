//Hamburger menu JS//


document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    hamburger.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
    });
});


//FORM JS//


document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let zip = document.getElementById('zip').value;


    // Form validation
    if (!email || !phone || !zip) {
        alert('Please fill out all fields');
        return; 
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address');
        return; 
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number');
        return; 
    }

    if (!validateZip(zip)) {
        alert('Please enter a valid ZIP code');
        return; 
    }

    submitFormData(email, phone, zip);
});


function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^[0-9]{10}$/; 
    return re.test(String(phone));
}

function validateZip(zip) {
    var re = /^[0-9]{5}$/;
    return re.test(String(zip));
}

function submitFormData(email, phone, zip) {
    var formData = new FormData();
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('zip', zip);

    fetch('https://script.google.com/macros/s/AKfycbzTtCydaCcR52yqMsmpe3uzMYOx1hfO56q_l8tW9h-sSy3mlCNYPe_DqzpIv-qaXBxQ/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    }).then(response => response.text())
      .then(responseText => {
          console.log('Response:', responseText);
          alert('Form submitted successfully!');
      }).catch(error => {
          console.error('Error:', error);
          alert('There was an error submitting the form.');
      });
}

