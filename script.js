document.getElementById('hero-button').addEventListener('click', function() {
    alert('You clicked the Learn More button!'); // Or redirect to another page
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    alert('Form submitted! (This is a demo)'); // Replace with actual form submission logic
});
