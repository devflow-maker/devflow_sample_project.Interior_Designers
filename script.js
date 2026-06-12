        // Responsive Menu Toggle Actions
        const navToggle = document.getElementById('nav-toggle');
        const navLinks = document.getElementById('nav-links');

        if (navToggle && navLinks) {
            navToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks) navLinks.classList.remove('active');
            });
        });

        // INTERACTIVE NOTICE HANDLER CONFIGURATION
        const interiorDemoNotice = function(event) {
            event.preventDefault();
            alert("⚠️ Demo Website Notice\nThis is only a sample website created for demonstration purposes. If you'd like a professional  website with features such as online appointment booking, profiles, and a modern responsive design, feel free to contact us at +91 7983934266.");
        };

        // Bind handler to all high-visibility interactive CTA elements
        const heroActionBtn = document.getElementById('hero-action-btn');
        const contactCallBtn = document.getElementById('contact-call-btn');
        const contactEmailBtn = document.getElementById('contact-email-btn');

        if (heroActionBtn) heroActionBtn.addEventListener('click', interiorDemoNotice);
        if (contactCallBtn) contactCallBtn.addEventListener('click', interiorDemoNotice);
        if (contactEmailBtn) contactEmailBtn.addEventListener('click', interiorDemoNotice);
