"use strict";

document.addEventListener("DOMContentLoaded", () => {
    
    /* ========== 1. INJECT CONFIG DATA ========== */
    
    // Header & Contact
    document.title = `${siteData.companyName} - Expert Tax & Compliance`;
    const siteTitleEl = document.getElementById("site-title");
    if(siteTitleEl) siteTitleEl.textContent = siteData.companyName;
    
    const footerAddressEl = document.getElementById("footer-address");
    if(footerAddressEl) footerAddressEl.textContent = siteData.contactDetails.address;
    
    document.getElementById("footer-phone").textContent = siteData.contactDetails.phone;
    document.getElementById("footer-phone").href = `tel:${siteData.contactDetails.phone.replace(/[^0-9+]/g, '')}`;
    document.getElementById("footer-email").textContent = siteData.contactDetails.email;
    document.getElementById("footer-email").href = `mailto:${siteData.contactDetails.email}`;
    document.getElementById("year").textContent = new Date().getFullYear();
    
    // Map
    document.getElementById("map-container").innerHTML = `
        <iframe src="${siteData.contactDetails.googleMapEmbedUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;

    // WhatsApp API Integration
    const waMessage = "&text=Hello%20Sangeetha%20Tax%20Consultancy,%20I%20would%20like%20to%20get%20a%20consultation.";
    const footerWaContainer = document.getElementById("footer-whatsapp-container");
    if (footerWaContainer && Array.isArray(siteData.contactDetails.whatsapp)) {
        footerWaContainer.innerHTML = siteData.contactDetails.whatsapp.map((num, idx) => {
            const clean = num.replace(/[^0-9]/g, '');
            return `<a href="https://api.whatsapp.com/send?phone=91${clean}${waMessage}" target="_blank" rel="noopener noreferrer" id="footer-wa${idx+1}">${num}</a>`;
        }).join(' &middot; ');
    }

    // WhatsApp Floating Button (Uses Primary Number)
    const waPrimaryClean = (siteData.contactDetails.whatsapp[0] || "9500001755").replace(/[^0-9]/g, '');
    const waFloat = document.getElementById("whatsapp-float");
    if(waFloat) waFloat.href = `https://api.whatsapp.com/send?phone=91${waPrimaryClean}${waMessage}`;

    // Services
    const servicesGrid = document.getElementById("services-grid");
    siteData.services.forEach((service, index) => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.innerHTML = `
            <i class="${service.icon} service-icon"></i>
            <h3>${service.title}</h3>
            <p>${service.desc}</p>
        `;
        card.addEventListener("click", () => openServiceModal(index));
        servicesGrid.appendChild(card);
    });

    // Service Modal Functions
    const serviceModal = document.getElementById("service-modal");
    const serviceTitle = document.getElementById("modal-service-title");
    const serviceBody = document.getElementById("modal-service-body");
    const serviceWaBtn = document.getElementById("service-wa-btn");

    window.openServiceModal = (index) => {
        const service = siteData.services[index];
        serviceTitle.textContent = service.title;
        
        let subServicesHTML = `<div class="sub-service-accordion">`;
        service.subServices.forEach(sub => {
            let docsLi = sub.docs.map(doc => `<li><i class="fa-solid fa-file-circle-check"></i> ${doc}</li>`).join('');
            
            subServicesHTML += `
                <div class="sub-service-item">
                    <button class="sub-service-header">
                        <span>${sub.name}</span>
                        <i class="fa-solid fa-chevron-down chevron"></i>
                    </button>
                    <div class="nested-docs">
                        <p style="margin-bottom: 10px; font-size: 0.85rem; color: #64748b; font-weight: 600;">REQUIRED DOCUMENTS:</p>
                        <ul class="nested-doc-list">
                            ${docsLi}
                        </ul>
                    </div>
                </div>
            `;
        });
        subServicesHTML += `</div>`;
        
        serviceBody.innerHTML = `
            <p style="color: var(--text-light); margin-bottom: 15px;">${service.desc}</p>
            <h4 style="margin-top: 20px; color: var(--pr-blue);"><i class="fa-solid fa-layer-group" style="margin-right: 8px;"></i> What we cover:</h4>
            <p style="font-size: 0.85rem; color: #64748b; margin-top: 5px;">(Click a service below to see required documents)</p>
            ${subServicesHTML}
        `;

        // Add Toggle Logic for Accordions
        const headers = serviceBody.querySelectorAll('.sub-service-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                
                // Toggle current
                item.classList.toggle('active');
                
                // Close others (Optional: comment out if you want multiple open)
                const allItems = serviceBody.querySelectorAll('.sub-service-item');
                allItems.forEach(i => {
                    if (i !== item) i.classList.remove('active');
                });
            });
        });

        const waMsg = `Hi Sangeetha Tax, I am interested in your *${service.title}* services. Can you provide more details?`;
        serviceWaBtn.href = `https://api.whatsapp.com/send?phone=919500001755&text=${encodeURIComponent(waMsg)}`;
        
        serviceModal.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    window.closeServiceModal = () => {
        serviceModal.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    document.getElementById("close-service-modal").addEventListener("click", closeServiceModal);
    serviceModal.addEventListener("click", (e) => {
        if (e.target === serviceModal) closeServiceModal();
    });

    // Counters
    const countersGrid = document.getElementById("counters-grid");
    if (countersGrid) {
        siteData.counters.forEach(counter => {
            countersGrid.innerHTML += `
                <div class="counter-item">
                    <div class="counter-icon">
                        <i class="${counter.icon}"></i>
                    </div>
                    <div class="counter-number">
                        <span class="count-value" data-target="${counter.count}">0</span>${counter.suffix}
                    </div>
                    <div class="counter-label">${counter.label}</div>
                </div>
            `;
        });
    }

    // Number Counter Animation via Intersection Observer (Initialized AFTER injection)
    const countValues = document.querySelectorAll('.count-value');
    let animationStarted = false;

    const startCounters = () => {
        countValues.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; 
            const frameDuration = 1000 / 60;
            const totalFrames = Math.round(duration / frameDuration);
            let frame = 0;

            const updateCounter = () => {
                frame++;
                const progress = frame / totalFrames;
                // Easing function for smooth stop
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const currentCount = Math.round(target * easedProgress);

                if (frame < totalFrames) {
                    counter.innerText = currentCount;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            requestAnimationFrame(updateCounter);
        });
    };

    const counterSection = document.getElementById('counters');
    if (counterSection && countValues.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animationStarted) {
                animationStarted = true;
                startCounters();
            }
        }, { threshold: 0.2 });
        observer.observe(counterSection);
    }

    // Team
    const teamGrid = document.getElementById("team-grid");
    siteData.team.forEach(member => {
        teamGrid.innerHTML += `
            <div class="team-card">
                <div class="team-image-wrapper">
                    <img src="${member.photo}" alt="${member.name}" class="team-image">
                </div>
                <div class="team-info">
                    <h3>${member.name}</h3>
                    <h4>${member.role}</h4>
                    <p>${member.description}</p>
                </div>
            </div>
        `;
    });

    // Reviews (Testimonials)
    const testimonialTrack = document.getElementById("testimonial-track");
    const testimonialControls = document.getElementById("testimonial-controls");
    
    siteData.reviews.forEach((review, index) => {
        // Generate stars
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            starsHTML += `<i class="${i < review.rating ? 'fa-solid' : 'fa-regular'} fa-star"></i>`;
        }

        testimonialTrack.innerHTML += `
            <div class="testimonial-card">
                <div class="stars">${starsHTML}</div>
                <p class="testimonial-text">"${review.text}"</p>
                <div class="testimonial-author">- ${review.name}</div>
            </div>
        `;

        // Generate dots
        testimonialControls.innerHTML += `
            <div class="dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
        `;
    });


    /* ========== 2. INTERACTIVE LOGIC ========== */

    // Sticky Header Active State
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

    // Testimonial Carousel Logic
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;

    function goToSlide(index) {
        testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    // Auto Advance Reviews
    setInterval(() => {
        let nextSlide = (currentSlide + 1) % siteData.reviews.length;
        goToSlide(nextSlide);
    }, 5000);

    // ========== CONSULTATION MODAL LOGIC ==========

    // ========== CONSULTATION MODAL LOGIC ==========
    // ========== CONSULTATION MODAL LOGIC ==========
    const modal = document.getElementById('consult-modal');
    const openBtns = document.querySelectorAll('.open-consultation');
    const closeBtn = document.getElementById('close-modal');
    const consultForm = document.getElementById('consultation-form');
    const mobileInput = document.getElementById('consult-mobile');

    // Initialize International Phone Input
    const iti = window.intlTelInput(mobileInput, {
        initialCountry: "in",
        separateDialCode: true,
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
    });

    const openModal = () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    openBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Form Submission -> WhatsApp
    consultForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('consult-name').value;
        const email = document.getElementById('consult-email').value;
        const state = document.getElementById('consult-state').value;
        const fullMobile = iti.getNumber();
        
        if (!iti.isValidNumber()) {
            alert("Please enter a valid mobile number.");
            return;
        }
        
        const waNumber = "9500001755";
        const message = `Hello Sangeetha Tax,%0A%0AI would like a *Free Consultation*.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*State:* ${state}%0A*Mobile:* ${fullMobile}%0A%0APlease contact me.`;
        
        const waURL = `https://api.whatsapp.com/send?phone=919500001755&text=${message}`;
        
        window.open(waURL, '_blank');
        closeModal();
        consultForm.reset();
    });

    // ========== SMART CHAT HUB LOGIC (DASHBOARD VERSION) ==========
    const hubMenu = document.getElementById('hub-menu');
    const chatWindow = document.getElementById('chat-window');
    const chatGreeting = document.getElementById('chat-greeting');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const dashboardWelcome = document.getElementById('dashboard-welcome');
    const badge = document.querySelector('.notification-badge');

    const updateDashboardGreeting = () => {
        const hour = new Date().getHours();
        let greeting = "Welcome to Sangeetha Tax";
        if (hour < 12) greeting = "Good Morning! ☀️";
        else if (hour < 17) greeting = "Good Afternoon! ☕";
        else greeting = "Good Evening! 🌙";
        if (dashboardWelcome) dashboardWelcome.textContent = greeting;
    };

    window.toggleHub = () => {
        if (hubMenu.classList.contains('active') || chatWindow.classList.contains('active')) {
            hubMenu.classList.remove('active');
            chatWindow.classList.remove('active');
        } else {
            updateDashboardGreeting();
            hubMenu.classList.add('active');
            chatGreeting.classList.remove('active');
            if (badge) badge.style.display = 'none';
        }
    };

    window.openAIChat = () => {
        hubMenu.classList.remove('active');
        chatWindow.classList.add('active');
        chatInput.focus();
    };

    window.selectService = (topic) => {
        hubMenu.classList.remove('active');
        chatWindow.classList.add('active');
        
        chatBody.innerHTML = '';
        const botMsg = document.createElement('p');
        botMsg.className = 'chat-msg-received';
        botMsg.textContent = `Hello! You've selected ${topic}. How can I specifically help you with this?`;
        chatBody.appendChild(botMsg);
        chatInput.focus();
    };

    window.backToHub = () => {
        chatWindow.classList.remove('active');
        hubMenu.classList.add('active');
    };

    window.closeGreeting = () => {
        chatGreeting.classList.remove('active');
    };

    window.directWhatsApp = () => {
        const waURL = "https://api.whatsapp.com/send?phone=919500001755&text=Hello Sangeetha Tax, I would like to chat with an expert.";
        window.open(waURL, '_blank');
        toggleHub();
    };

    window.sendChatMessage = () => {
        const message = chatInput.value.trim();
        if (message) {
            const userMsg = document.createElement('p');
            userMsg.className = 'chat-msg-sent';
            userMsg.textContent = message;
            chatBody.appendChild(userMsg);
            chatInput.value = '';
            chatBody.scrollTop = chatBody.scrollHeight;

            setTimeout(() => {
                const botMsg = document.createElement('p');
                botMsg.className = 'chat-msg-received';
                botMsg.textContent = "Thank you! Redirecting you to our expert on WhatsApp now...";
                chatBody.appendChild(botMsg);
                chatBody.scrollTop = chatBody.scrollHeight;

                setTimeout(() => {
                    const waURL = `https://api.whatsapp.com/send?phone=919500001755&text=${encodeURIComponent(message)}`;
                    window.open(waURL, '_blank');
                }, 1500);
            }, 800);
        }
    };

    // Show greeting after 5 seconds
    setTimeout(() => {
        if (!hubMenu.classList.contains('active') && !chatWindow.classList.contains('active')) {
            chatGreeting.classList.add('active');
        }
    }, 5000);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });
});
