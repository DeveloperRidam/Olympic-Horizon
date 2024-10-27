(function () {
    emailjs.init("dpFBF92yBEf02Bd6I"); // Make sure this is your actual EmailJS public key
})();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the email address
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Send the actual message through EmailJS
    emailjs.send("service_ev5htjk", "template_d3qj72d", {
        name: name,
        email: email,
        message: message
    })
    .then(function (response) {
        console.log('Message sent successfully!', response);
        document.getElementById('responseMessage').innerText = 'Message sent successfully!';
    })
    .catch(function (error) {
        console.error('Failed to send message', error);
        document.getElementById('responseMessage').innerText = 'Failed to send message. Please try again.';
    });

    // Optionally reset the form after submission
    document.getElementById('contactForm').reset();
});

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
