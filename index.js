
//stats section
const counters = document.querySelectorAll('.number');
const speed = 200; // The lower the speed, the faster the count

const animateNumbers = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
};

// Detect when the section is scrolled into view
const section = document.querySelector('.design-section');
let hasAnimated = false;

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.2;

    if (!hasAnimated && sectionTop < triggerPoint) {
        animateNumbers();
        hasAnimated = true;
    }
});

// Show scroll-to-top button when user scrolls down
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Scroll to Top Functionality
window.addEventListener('scroll', function() {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

document.getElementById('scrollToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//get started section
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.icon').style.bottom = "120px";
    });

    card.addEventListener('mouseleave', function() {
        this.querySelector('.icon').style.bottom = "-50px";
    });
});

// FAQ JavaScript
const uniqueFaqQuestions = document.querySelectorAll('.unique-faq-question');

uniqueFaqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Close all other FAQs
        uniqueFaqQuestions.forEach(q => {
            q.setAttribute('aria-expanded', 'false');
            q.nextElementSibling.style.display = 'none';
        });

        // Toggle the clicked FAQ
        if (!isExpanded) {
            question.setAttribute('aria-expanded', 'true');
            question.nextElementSibling.style.display = 'block';
        }
    });
});

//testimonial JavaScript to enable carousel functionality
let currentReview = 0;
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');

// Function to show the selected review
function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

// Function to move to the next review
function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}

// Automatically switch to the next review every 5 seconds
setInterval(nextReview, 5000);

// Click event to manually change reviews when clicking on dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentReview = index;
        showReview(currentReview);
    });
});
// JavaScript to switch between monthly and yearly pricing
document.getElementById('pricingToggle').addEventListener('change', function() {
    const isYearly = this.checked;
    const prices = document.querySelectorAll('.price');

    prices.forEach(price => {
        const monthlyPrice = price.getAttribute('data-monthly');
        const yearlyPrice = price.getAttribute('data-yearly');

        // Get the price-amount and price-term spans inside the price container
        const priceAmount = price.querySelector('.price-amount');
        const priceTerm = price.querySelector('.price-term');

        if (isYearly) {
            // Update for yearly pricing
            priceAmount.textContent = `$${yearlyPrice}`;
            priceTerm.textContent = '/ year';
        } else {
            // Update for monthly pricing
            priceAmount.textContent = `$${monthlyPrice}`;
            priceTerm.textContent = '/ month';
        }
    });
});
