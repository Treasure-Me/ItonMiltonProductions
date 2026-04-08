const defaultConfig = {
    company_name: 'Iton Milton Productions',
    tagline: 'Photography & Videography',
    hero_heading: 'Capturing Moments That Move You',
    hero_subheading: 'Award-winning photography and videography for weddings, fashion, events, and commercial projects. We transform visions into stunning visual stories.',
    cta_button_text: 'View Our Work',
    about_title: 'About Our Studio',
    about_description: 'Iton Milton Productions is a premier creative studio specializing in luxury visual storytelling. With a passion for elegance and artistic excellence, we deliver stunning photography, videography, and modelling services that exceed expectations. Our work has graced magazine covers, international runways, and premium brand campaigns.',
    services_title: 'Our Expertise',
    contact_email: 'itonmilton1@gmail.com',
    contact_phone: '+27 63 573 8735'
};

let config = { ...defaultConfig };

const element = {
    defaultConfig,
    onConfigChange: async (newConfig) => {
        config = newConfig;

        const navCompany = document.getElementById('nav-company');
        if (navCompany) navCompany.textContent = config.company_name || defaultConfig.company_name;

        const navTagline = document.getElementById('nav-tagline');
        if (navTagline) navTagline.textContent = config.tagline || defaultConfig.tagline;

        const heroHeading = document.getElementById('hero-heading');
        if (heroHeading) heroHeading.textContent = config.hero_heading || defaultConfig.hero_heading;

        const heroSubheading = document.getElementById('hero-subheading');
        if (heroSubheading) heroSubheading.textContent = config.hero_subheading || defaultConfig.hero_subheading;

        const ctaButton = document.getElementById('cta-button');
        if (ctaButton) ctaButton.textContent = config.cta_button_text || defaultConfig.cta_button_text;

        const aboutTitle = document.getElementById('about-title');
        if (aboutTitle) aboutTitle.textContent = config.about_title || defaultConfig.about_title;

        const aboutDescription = document.getElementById('about-description');
        if (aboutDescription) aboutDescription.textContent = config.about_description || defaultConfig.about_description;

        const servicesTitle = document.getElementById('services-title');
        if (servicesTitle) servicesTitle.textContent = config.services_title || defaultConfig.services_title;

        const contactEmail = document.getElementById('contact-email');
        const emailValue = config.contact_email || defaultConfig.contact_email;
        if (contactEmail) {
            contactEmail.textContent = emailValue;
            contactEmail.href = `mailto:${emailValue}`;
        }

        const contactPhone = document.getElementById('contact-phone');
        const phoneValue = config.contact_phone || defaultConfig.contact_phone;
        if (contactPhone) {
            contactPhone.textContent = phoneValue;
            contactPhone.href = `tel:${phoneValue}`;
        }
    },

    mapToCapabilities: (cfg) => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
    }),

    mapToEditPanelValues: (cfg) => new Map([
        ['company_name', cfg.company_name || defaultConfig.company_name],
        ['tagline', cfg.tagline || defaultConfig.tagline],
        ['hero_heading', cfg.hero_heading || defaultConfig.hero_heading],
        ['hero_subheading', cfg.hero_subheading || defaultConfig.hero_subheading],
        ['cta_button_text', cfg.cta_button_text || defaultConfig.cta_button_text],
        ['about_title', cfg.about_title || defaultConfig.about_title],
        ['about_description', cfg.about_description || defaultConfig.about_description],
        ['services_title', cfg.services_title || defaultConfig.services_title],
        ['contact_email', cfg.contact_email || defaultConfig.contact_email],
        ['contact_phone', cfg.contact_phone || defaultConfig.contact_phone]
    ])
};

if (window.elementSdk) {
    window.elementSdk.init(element);
}

// const form = document.querySelector('form');
// if (form) {
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//
//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const service = document.getElementById('service').value;
//         const message = document.getElementById('message').value;
//
//         if (!name || !email || !service || !message) {
//             alert('Please fill in all fields');
//             return;
//         }
//
//         const button = form.querySelector('button[type="submit"]');
//         const originalText = button.textContent;
//         button.textContent = 'Message Sent! ✓';
//         button.disabled = true;
//
//         setTimeout(() => {
//             form.reset();
//             button.textContent = originalText;
//             button.disabled = false;
//         }, 3000);
//     });
// }

document.getElementById("contact-form").addEventListener("submit", function(e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert("Thank you, " + name + "! Your message has been sent.");
});

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_oi6077l", "template_rbfr82n", this)
        .then(function() {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message: " + JSON.stringify(error));
        });
});