// Theme Toggle
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.querySelector('.theme-toggle i');
            
            if (body.getAttribute('data-theme') === 'dark') {
                body.removeAttribute('data-theme');
                themeToggle.className = 'fas fa-moon';
                localStorage.removeItem('theme');
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.className = 'fas fa-sun';
                // Note: localStorage not available in Claude artifacts
                // localStorage.setItem('theme', 'dark');
            }
        }

        // Mobile Menu Toggle
        function toggleMenu() {
            const navLinks = document.querySelector('.nav-links');
            const mobileMenu = document.querySelector('.mobile-menu i');
            
            navLinks.classList.toggle('active');
            
            if (navLinks.classList.contains('active')) {
                mobileMenu.className = 'fas fa-times';
            } else {
                mobileMenu.className = 'fas fa-bars';
            }
        }

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const mobileMenu = document.querySelector('.mobile-menu i');
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.className = 'fas fa-bars';
                }
            });
        });

        // Intersection Observer for Fade In Animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
            } else {
                header.style.background = 'var(--secondary-color)';
                header.style.backdropFilter = 'blur(10px)';
            }
        });

        // Contact Form Handler
        function handleSubmit(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:edwardiyanda60@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your message! Your default email client should open now.');
            
            // Reset form
            event.target.reset();
        }

        // Typing Animation for Hero Section
        function typeWriter(element, text, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            
            type();
        }

        // Add some interactive elements
        document.addEventListener('DOMContentLoaded', () => {
            // Add hover effect to skill tags
            document.querySelectorAll('.skill-tag').forEach(tag => {
                tag.addEventListener('mouseenter', function() {
                    this.style.transform = 'scale(1.1)';
                    this.style.background = 'var(--primary-color)';
                    this.style.color = 'white';
                });
                
                tag.addEventListener('mouseleave', function() {
                    this.style.transform = 'scale(1)';
                    this.style.background = 'var(--bg-light)';
                    this.style.color = 'var(--text-dark)';
                });
            });

            // Add click to copy email functionality
            document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const email = this.textContent;
                    navigator.clipboard.writeText(email).then(() => {
                        // Create temporary notification
                        const notification = document.createElement('div');
                        notification.textContent = 'Email copied to clipboard!';
                        notification.style.cssText = `
                            position: fixed;
                            top: 20px;
                            right: 20px;
                            background: var(--primary-color);
                            color: white;
                            padding: 1rem 2rem;
                            border-radius: 10px;
                            box-shadow: var(--shadow);
                            z-index: 9999;
                            animation: slideIn 0.3s ease;
                        `;
                        
                        document.body.appendChild(notification);
                        
                        setTimeout(() => {
                            notification.remove();
                        }, 3000);
                    });
                });
            });

            // Add particle effect to hero section
            createParticles();
        });

        // Particle Effect
        function createParticles() {
            const hero = document.querySelector('.hero');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 2px;
                    height: 2px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    animation: float ${Math.random() * 3 + 2}s infinite ease-in-out;
                    animation-delay: ${Math.random() * 2}s;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                `;
                hero.appendChild(particle);
            }
        }

        // Add CSS for particle animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 1; }
                50% { transform: translateY(-20px) rotate(180deg); opacity: 0.5; }
            }
            
            @keyframes slideIn {
                from { transform: translateX(100%); }
                to { transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);

        // Initialize theme on page load
        // Note: In a real environment, you would check localStorage here
        // const savedTheme = localStorage.getItem('theme');
        // if (savedTheme === 'dark') {
        //     document.body.setAttribute('data-theme', 'dark');
        //     document.querySelector('.theme-toggle i').className = 'fas fa-sun';
        // }