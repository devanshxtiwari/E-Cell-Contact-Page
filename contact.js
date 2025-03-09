document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    setupFormFields();

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        console.log("Form submission handler is running!"); // ADDED THIS LINE

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const project = document.getElementById('project').value;

        const services = [];
        document.querySelectorAll('input[name="service"]:checked').forEach(checkbox => {
            services.push(checkbox.value);
        });

        console.log('Form submitted with:', { name, email, project, services });

        alert('Thanks for your submission! We\'ll be in touch soon.');

        form.reset();
        setupFormFields();
    });

    function setupFormFields() {
        const formFields = document.querySelectorAll('.form-group input, .form-group textarea');

        formFields.forEach(field => {
            if (field.value.trim() !== '') {
                field.classList.add('has-content');
            } else {
                field.classList.remove('has-content');
            }

            field.addEventListener('input', function() {
                if (this.value.trim() !== '') {
                    this.classList.add('has-content');
                } else {
                    this.classList.remove('has-content');
                }
            });
        });
    }
});