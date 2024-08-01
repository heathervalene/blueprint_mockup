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


    saveDataToGoogleSheet(email, phone, zip);
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

function saveDataToGoogleSheet(email, phone, zip) {
   
    var url = 'https://script.google.com/macros/s/AKfycbzTtCydaCcR52yqMsmpe3uzMYOx1hfO56q_l8tW9h-sSy3mlCNYPe_DqzpIv-qaXBxQ/exec'; 

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&zip=${encodeURIComponent(zip)}`
    })
    .then(response => {
        console.log('Success:', response);
        alert('Thank you for signing up!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try again.');
    });
}
