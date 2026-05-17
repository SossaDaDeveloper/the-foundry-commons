// Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Newsletter form handling
        const newsletterForm = document.getElementById('newsletterForm');
        const successToast = document.getElementById('successToast');

        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();

                
            const submitBtn = newsletterForm.querySelector('.newsletter-submit');
            submitBtn.style.opacity = '0.5';
            submitBtn.disabled = true;

            setTimeout(() => {
                successToast.style.opacity = '1';
                newsletterForm.reset();
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;

                setTimeout(() => {
                    successToast.style.opacity = '0';
                }, 3000);
            }, 800);
        });

        // Parallax effect for hero image
        window.addEventListener('scroll', () => {
            const heroImage = document.querySelector('.hero-image');
            const scrollValue = window.scrollY;
            if (heroImage) {
                const speed = 0.1;
                heroImage.style.transform = `translateY(${scrollValue * speed}px)`;
            }
        });
