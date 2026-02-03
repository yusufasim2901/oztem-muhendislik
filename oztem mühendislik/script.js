/**
 * Oztem Mühendislik - Main JavaScript File
 * Multi-language support, navigation, scroll effects, and animations
 * Founded by Özlem Temiz
 * Specialty: Industrial Factory Maintenance & Repair
 */

// ===== Language Dictionary =====
const translations = {
    tr: {
        // Navigation
        nav_home: "Ana Sayfa",
        nav_services: "Hizmetler",
        nav_capabilities: "Uzmanlık Alanları",
        nav_about: "Hakkımızda",
        nav_contact: "İletişim",
        
        // Hero Section
        hero_title: "Endüstriyel Bakım & Onarım",
        hero_subtitle: "Özlem Temiz'in vizyonuyla kurulan Oztem Mühendislik, fabrika ve endüstriyel tesislerinizin bakım, onarım ve teknik destek ihtiyaçlarında güvenilir çözüm ortağınız. Kesintisiz üretim için yanınızdayız.",
        hero_cta: "Ücretsiz Keşif Talep Edin",
        
        // Services Section
        services_subtitle: "Neler Sunuyoruz",
        services_title: "Hizmetlerimiz",
        service1_title: "Fabrika Bakım & Onarım",
        service1_desc: "Endüstriyel tesislerinizin periyodik bakımı, arıza tespiti ve onarımı. Üretim hattınızın kesintisiz çalışması için 7/24 teknik destek.",
        service2_title: "Makine Bakımı",
        service2_desc: "Endüstriyel makinelerinizin periyodik bakımı, yedek parça temini ve performans optimizasyonu. Arıza süresini minimuma indiriyoruz.",
        service3_title: "Tesis Yönetimi",
        service3_desc: "Fabrika ve üretim tesislerinizin teknik yönetimi, enerji verimliliği ve güvenlik denetimleri ile tam kapsamlı destek.",
        
        // Capabilities Section
        capabilities_subtitle: "Uzmanlık Alanlarımız",
        capabilities_title: "Neler Yapıyoruz",
        cap1_title: "Mekanik Sistemler",
        cap1_desc: "Hidrolik, pnömatik ve mekanik sistemlerin bakım, onarım ve revizyonu.",
        cap2_title: "Elektrik & Otomasyon",
        cap2_desc: "Endüstriyel elektrik tesisatı, PLC sistemleri ve otomasyon bakım hizmetleri.",
        cap3_title: "Kaynak & Metal İşleri",
        cap3_desc: "Profesyonel kaynak, çelik konstrüksiyon ve metal işleme hizmetleri.",
        cap4_title: "Konveyör & Taşıma",
        cap4_desc: "Konveyör bantları, taşıma sistemleri ve üretim hatlarının bakım ve onarımı.",
        cap5_title: "Acil Arıza Müdahale",
        cap5_desc: "7/24 acil arıza müdahale ekibi ile üretim kayıplarınızı minimize ediyoruz.",
        cap6_title: "Periyodik Bakım",
        cap6_desc: "Planlı bakım programları ile arıza öncesi müdahale ve maliyet optimizasyonu.",
        
        // About Section
        about_subtitle: "Biz Kimiz",
        about_title: "Oztem Mühendislik Hakkında",
        about_text1: "Oztem Mühendislik, Özlem Temiz tarafından kurulan ve endüstriyel bakım-onarım alanında uzmanlaşmış dinamik bir mühendislik firmasıdır. Fabrika ve üretim tesislerinin kesintisiz çalışması için 7/24 teknik destek sunuyoruz.",
        about_text2: "Deneyimli teknik ekibimiz ile makinelerinizin periyodik bakımından acil arıza müdahalesine, elektrik sistemlerinden mekanik revizyonlara kadar geniş bir yelpazede hizmet veriyoruz. Üretim kayıplarınızı minimize ederek verimliliğinizi artırıyoruz.",
        about_feature1: "7/24 Teknik Destek",
        about_feature2: "Uzman Teknik Ekip",
        about_feature3: "Güvenilir Hizmet",
        about_feature4: "Hızlı Müdahale",
        about_cta: "Ücretsiz Keşif Talep Edin",
        founder_title: "Kurucu",
        
        // Contact Section
        contact_subtitle: "İletişime Geçin",
        contact_title: "Bizimle İletişime Geçin",
        form_name: "Adınız Soyadınız",
        form_email: "E-posta Adresiniz",
        form_subject: "Konu",
        form_message: "Mesajınız",
        form_submit: "Mesaj Gönder",
        info_email: "E-posta Adresi",
        info_hours: "Çalışma Saatleri",
        info_hours_detail: "Pazartesi - Cuma: 08:00 - 18:00",
        info_location: "Konum",
        info_location_detail: "Samsun, Türkiye",
        info_cta: "Teknik Destek mi İhtiyacınız Var?",
        info_cta_detail: "Ücretsiz keşif ve fiyat teklifi için bizimle iletişime geçin.",
        
        // Footer
        footer_about: "Özlem Temiz tarafından kurulan Oztem Mühendislik, endüstriyel bakım-onarım ve fabrika teknik destek hizmetleri sunmaktadır.",
        footer_quicklinks: "Hızlı Bağlantılar",
        footer_services: "Hizmetlerimiz",
        footer_contact: "İletişim Bilgileri",
        footer_hours: "Pzt - Cum: 08:00 - 18:00",
        footer_rights: "Tüm Hakları Saklıdır.",
        footer_privacy: "Gizlilik Politikası",
        footer_terms: "Kullanım Şartları",
        
        // Notifications
        notify_success: "Teşekkürler! Mesajınız başarıyla gönderildi.",
        notify_error: "Lütfen tüm alanları doğru şekilde doldurun.",
        notify_email_error: "Lütfen geçerli bir e-posta adresi girin."
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_services: "Services",
        nav_capabilities: "Capabilities",
        nav_about: "About",
        nav_contact: "Contact",
        
        // Hero Section
        hero_title: "Industrial Maintenance & Repair",
        hero_subtitle: "Founded with Özlem Temiz's vision, Oztem Engineering is your reliable solution partner for maintenance, repair, and technical support needs of your factories and industrial facilities. We are here for uninterrupted production.",
        hero_cta: "Request Free Inspection",
        
        // Services Section
        services_subtitle: "What We Offer",
        services_title: "Our Services",
        service1_title: "Factory Maintenance & Repair",
        service1_desc: "Periodic maintenance, fault detection, and repair of your industrial facilities. 24/7 technical support for uninterrupted production line operation.",
        service2_title: "Machine Maintenance",
        service2_desc: "Periodic maintenance of your industrial machines, spare parts supply, and performance optimization. We minimize downtime.",
        service3_title: "Facility Management",
        service3_desc: "Technical management of your factories and production facilities, energy efficiency, and safety inspections with comprehensive support.",
        
        // Capabilities Section
        capabilities_subtitle: "Our Expertise",
        capabilities_title: "What We Do",
        cap1_title: "Mechanical Systems",
        cap1_desc: "Maintenance, repair, and overhaul of hydraulic, pneumatic, and mechanical systems.",
        cap2_title: "Electrical & Automation",
        cap2_desc: "Industrial electrical installation, PLC systems, and automation maintenance services.",
        cap3_title: "Welding & Metalwork",
        cap3_desc: "Professional welding, steel construction, and metal fabrication services.",
        cap4_title: "Conveyor & Transport",
        cap4_desc: "Maintenance and repair of conveyor belts, transport systems, and production lines.",
        cap5_title: "Emergency Response",
        cap5_desc: "We minimize your production losses with our 24/7 emergency intervention team.",
        cap6_title: "Periodic Maintenance",
        cap6_desc: "Planned maintenance programs for preventive intervention and cost optimization.",
        
        // About Section
        about_subtitle: "Who We Are",
        about_title: "About Oztem Engineering",
        about_text1: "Oztem Engineering is a dynamic engineering firm founded by Özlem Temiz, specializing in industrial maintenance and repair. We provide 24/7 technical support for uninterrupted operation of factories and production facilities.",
        about_text2: "With our experienced technical team, we offer a wide range of services from periodic maintenance of your machines to emergency fault intervention, from electrical systems to mechanical overhauls. We increase your efficiency by minimizing production losses.",
        about_feature1: "24/7 Technical Support",
        about_feature2: "Expert Technical Team",
        about_feature3: "Reliable Service",
        about_feature4: "Fast Response",
        about_cta: "Request Free Inspection",
        founder_title: "Founder",
        
        // Contact Section
        contact_subtitle: "Get In Touch",
        contact_title: "Contact Us",
        form_name: "Your Name",
        form_email: "Your Email",
        form_subject: "Subject",
        form_message: "Your Message",
        form_submit: "Send Message",
        info_email: "Email Address",
        info_hours: "Working Hours",
        info_hours_detail: "Monday - Friday: 08:00 - 18:00",
        info_location: "Location",
        info_location_detail: "Samsun, Turkey",
        info_cta: "Need Technical Support?",
        info_cta_detail: "Contact us for free inspection and price quote.",
        
        // Footer
        footer_about: "Founded by Özlem Temiz, Oztem Engineering provides industrial maintenance-repair and factory technical support services.",
        footer_quicklinks: "Quick Links",
        footer_services: "Our Services",
        footer_contact: "Contact Info",
        footer_hours: "Mon - Fri: 08:00 - 18:00",
        footer_rights: "All Rights Reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service",
        
        // Notifications
        notify_success: "Thank you! Your message has been sent successfully.",
        notify_error: "Please fill in all fields correctly.",
        notify_email_error: "Please enter a valid email address."
    }
};

// ===== Global Variables =====
let currentLang = 'tr';

// ===== DOM Elements =====
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const backToTop = document.getElementById('backToTop');
    const contactForm = document.getElementById('contact-form');
    const revealElements = document.querySelectorAll('.reveal');
    const langButtons = document.querySelectorAll('.lang-btn');

    // ===== Language Switcher =====
    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update active state on buttons
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update page title
        document.title = lang === 'tr' 
            ? 'Oztem Mühendislik | Geleceği İnşa Ediyoruz' 
            : 'Oztem Engineering | Engineering the Future';
        
        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Update form placeholders
        updateFormPlaceholders(lang);
        
        // Save language preference
        localStorage.setItem('oztem_lang', lang);
    }
    
    function updateFormPlaceholders(lang) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        if (nameInput) nameInput.placeholder = translations[lang].form_name;
        if (emailInput) emailInput.placeholder = translations[lang].form_email;
        if (subjectInput) subjectInput.placeholder = translations[lang].form_subject;
        if (messageInput) messageInput.placeholder = translations[lang].form_message;
    }
    
    // Initialize language from localStorage or default to Turkish
    function initLanguage() {
        const savedLang = localStorage.getItem('oztem_lang') || 'tr';
        switchLanguage(savedLang);
    }
    
    // Language button click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.dataset.lang);
        });
    });

    // ===== Mobile Navigation Toggle =====
    function toggleMobileNav() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggleMobileNav);

    // Close mobile nav when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileNav();
            }
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            toggleMobileNav();
        }
    });

    // ===== Navbar Scroll Effect =====
    function handleNavbarScroll() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollPosition > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleNavbarScroll);

    // ===== Back to Top Button =====
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== Scroll Reveal Animation =====
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });
    }

    // Initial check for elements in view
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // ===== Active Navigation Link =====
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Contact Form Handling =====
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Simple validation
            let isValid = true;
            const requiredFields = ['name', 'email', 'subject', 'message'];

            requiredFields.forEach(field => {
                const input = document.getElementById(field);
                if (!data[field] || data[field].trim() === '') {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '';
                }
            });

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailInput = document.getElementById('email');
            if (!emailRegex.test(data.email)) {
                isValid = false;
                emailInput.style.borderColor = '#ef4444';
                showNotification(translations[currentLang].notify_email_error, 'error');
                return;
            }

            if (isValid) {
                // Show success message
                showNotification(translations[currentLang].notify_success, 'success');
                contactForm.reset();
            } else {
                showNotification(translations[currentLang].notify_error, 'error');
            }
        });
    }

    // ===== Notification System =====
    function showNotification(message, type = 'success') {
        // Remove existing notification
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;

        document.body.appendChild(notification);

        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // ===== Scroll Indicator Click =====
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
                const navbarHeight = navbar.offsetHeight;
                window.scrollTo({
                    top: servicesSection.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    // ===== Parallax Effect for Hero =====
    const hero = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        if (hero && window.innerWidth > 768) {
            const scrollPosition = window.scrollY;
            hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });

    // ===== Service Cards Hover Effect =====
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ===== Capability Cards Hover Effect =====
    const capabilityCards = document.querySelectorAll('.capability-card');
    
    capabilityCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // ===== Keyboard Navigation =====
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on Escape
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMobileNav();
        }
    });

    // ===== Initialize =====
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        
        // Initialize language
        initLanguage();
        
        // Trigger initial reveal animation
        setTimeout(revealOnScroll, 100);
    });

    // Initial call for elements already in view
    handleNavbarScroll();
    setActiveNavLink();

    console.log('Oztem Mühendislik website initialized successfully!');
    console.log('Founded by Özlem Temiz');
});
