document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById("assignmentContactForm");
        
        if (contactform) {
            contactForm.addEventListener("submit", function(event) {
                event.preventDefault(); // Prevents the page from reloading

                const name = document.getElementById("userName").value;

                //Uses backticks () so the name updates dynamically
                alert(`Thank you, ${name}! Your form has been submitted successfully.`);

                contactForm.reset()// Clears the form fields
            });
            }
        });