// In your script.js file, update or add this code:

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper slider
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function() {
                updateHeroContent(this.activeIndex);
            },
            init: function() {
                updateHeroContent(this.activeIndex);
            }
        }
    });

    // Content for each slide
    const slideContent = [
        {
            title: "Creating Unforgettable Events",
            subtitle: "Professional planning for weddings, birthdays and corporate events",
            buttonText: "Get Started",
            buttonLink: "contact.html"
        },
        {
            title: "Custom Invitation Cards",
            subtitle: "Beautiful designs for your special occasion",
            buttonText: "View Designs",
            buttonLink: "invitations.html"
        },
        {
            title: "Full Service Planning",
            subtitle: "From concept to execution - we handle it all",
            buttonText: "Our Services",
            buttonLink: "services.html"
        }
    ];

    // Update hero content based on active slide
    function updateHeroContent(activeIndex) {
        const realIndex = activeIndex % slideContent.length; // Handle loop
        const content = slideContent[realIndex];
        
        const title = document.getElementById('hero-title');
        const subtitle = document.getElementById('hero-subtitle');
        const button = document.getElementById('hero-button');
        
        // Add fade out animation
        title.style.animation = 'none';
        subtitle.style.animation = 'none';
        button.style.animation = 'none';
        
        setTimeout(() => {
            // Update content
            title.textContent = content.title;
            subtitle.textContent = content.subtitle;
            button.textContent = content.buttonText;
            button.href = content.buttonLink;
            
            // Trigger fade in animation
            title.style.animation = 'fadeInUp 1s ease';
            subtitle.style.animation = 'fadeInUp 1s ease 0.3s forwards';
            button.style.animation = 'fadeInUp 1s ease 0.6s forwards';
            subtitle.style.opacity = '0';
            button.style.opacity = '0';
        }, 300);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
    
    // Initialize Swiper sliders on home page
    if (document.querySelector('.hero-slider')) {
        const heroSwiper = new Swiper('.hero-slider', {
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
    
    // Service/Invitation Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Update active tab button
                tabBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding tab content
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === tabId) {
                        content.classList.add('active');
                    }
                });
            });
        });
    }
    
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                this.classList.toggle('active');
                const answer = this.nextElementSibling;
                answer.classList.toggle('active');
            });
        });
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Thank you for your message! We will contact you soon.');
            
            // Reset form
            this.reset();
        });
    }
    
    // Set active navigation link based on current page
    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if ((currentPage === 'index.html' && linkPage === '#home') || 
            linkPage.includes(currentPage)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});