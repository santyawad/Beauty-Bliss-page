document.addEventListener("DOMContentLoaded", function() {
    // Contact form validation
    const contactForm = document.getElementById("contactForm");
    const contactName = document.getElementById("name");
    const contactEmail = document.getElementById("email");
    const contactMessage = document.getElementById("message");
    const contactSuccessMessage = document.getElementById("successMessage");

    const contactNameError = document.getElementById("nameError");
    const contactEmailError = document.getElementById("emailError");
    const contactMessageError = document.getElementById("messageError");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let isContactValid = true;

            // Clear previous error messages
            contactNameError.textContent = "";
            contactEmailError.textContent = "";
            contactMessageError.textContent = "";

            // Validate name
            if (contactName.value.trim() === "") {
                contactNameError.textContent = "Please enter your name!";
                isContactValid = false;
            }

            // Validate email
            if (contactEmail.value.trim() === "") {
                contactEmailError.textContent = "Please enter your email!";
                isContactValid = false;
            } else if (!validateEmail(contactEmail.value.trim())) {
                contactEmailError.textContent = "Please enter a valid email address!";
                isContactValid = false;
            }

            // Validate message
            if (contactMessage.value.trim() === "") {
                contactMessageError.textContent = "Please enter your message!";
                isContactValid = false;
            }

            // If all fields are valid, show success message
            if (isContactValid) {
                contactSuccessMessage.style.display = "block";
                setTimeout(() => {
                    contactSuccessMessage.style.display = "none";
                    contactForm.reset();
                }, 3000);
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
