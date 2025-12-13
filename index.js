

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.querySelector("#menu_Btn");
    const navigation = document.querySelector("#navigation");
      const menuIcon = document.getElementById("menuIcon");

   
        menuBtn.addEventListener("click", () => {
            navigation.classList.toggle("open");

            if (navigation.classList.contains("open")) {
      menuIcon.classList.remove("ri-menu-3-line");
      menuIcon.classList.add("ri-close-line"); 
    } else {

              menuIcon.classList.remove("ri-close-line");
      menuIcon.classList.add("ri-menu-3-line"); 
    }
  });



    // ===== LIGHTBOX =====
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = lightbox.querySelector(".lightbox-img");
    const closeBtn = lightbox.querySelector(".close");
    const nextBtn = lightbox.querySelector(".next");
    const prevBtn = lightbox.querySelector(".prev");

    const serviceImages = Array.from(document.querySelectorAll(".service-card img"));
    const galleryImages = Array.from(document.querySelectorAll(".gallery-img"));
    const hiddenImages = Array.from(document.querySelectorAll("#gallery-images img"));

    let currentIndex = 0;
    let currentArray = [];

    function openLightbox(index, array) {
        currentIndex = index;
        currentArray = array;
        lightbox.style.display = "flex";
        lightboxImg.src = currentArray[currentIndex].src;
    }

    serviceImages.forEach((img) => {
        img.addEventListener("click", () => {
            const category = img.dataset.gallery;
            const categoryImages = hiddenImages.filter((i) =>
                i.classList.contains(category)
            );
            openLightbox(0, categoryImages);
        });
    });

    galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => openLightbox(index, galleryImages));
    });

    const portfolioImages = Array.from(document.querySelectorAll(".portfolio_arrangement img"));

portfolioImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        openLightbox(index, portfolioImages);
    });
});


    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % currentArray.length;
        lightboxImg.src = currentArray[currentIndex].src;
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + currentArray.length) % currentArray.length;
        lightboxImg.src = currentArray[currentIndex].src;
    });

    lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.style.display = "none";
    }
});


document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
        if (e.key === "ArrowRight") nextBtn.click();
        else if (e.key === "ArrowLeft") prevBtn.click();
        else if (e.key === "Escape") lightbox.style.display = "none";
    }
});


   

    // VIEW GALLERY BUTTON
    const viewBtn = document.querySelector("#viewGalleryBtn");
    const gallerySection = document.querySelector("#gallerySection");

    if (viewBtn && gallerySection) {
        viewBtn.addEventListener("click", () => {
            gallerySection.classList.add("active");
            gallerySection.scrollIntoView({ behavior: "smooth" });
        });
    }

    // BOOKING FORM POPUP
    const bookingForm = document.getElementById("bookingForm");
    const bookBtn = document.querySelector(".book-btn");
    const closeFormBtn = document.getElementById("closeFormBtn");

    if (bookBtn && bookingForm) {
        bookBtn.addEventListener("click", () => {
            bookingForm.style.display = "flex";
        });
    }

    if (closeFormBtn && bookingForm) {
        closeFormBtn.addEventListener("click", () => {
            bookingForm.style.display = "none";
        });
    }

    if (bookingForm) {
        bookingForm.addEventListener("click", (e) => {
            if (e.target === bookingForm) bookingForm.style.display = "none";
        });
    }

    // CONTACT FORM SUBMISSION
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(form);

            fetch(form.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    successMessage.style.display = "block";
                    form.reset();
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your form.");
                console.error(error);
            });
        });
    }

    // BOOKING FORM SUBMISSION
    const bookingFormElement = document.getElementById("bookingForm");
    const bookingSuccessMessage = document.getElementById("bookingSuccessMessage");

    if (bookingFormElement) {
        bookingFormElement.addEventListener("submit", function(e) {
            e.preventDefault();
            const formData = new FormData(bookingFormElement);

            fetch(bookingFormElement.action, {
                method: "POST",
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    bookingSuccessMessage.style.display = "block";
                    bookingFormElement.reset();

                    setTimeout(() => {
                        bookingSuccessMessage.style.display = "none";
                        bookingForm.style.display = "none";
                    }, 3000);
                } else {
                    alert("Oops! There was a problem submitting your booking.");
                }
            }).catch(error => {
                alert("Oops! There was a problem submitting your booking.");
                console.error(error);
            });
        });
    }

    // SCROLLREVEAL ANIMATIONS
    ScrollReveal().reveal(".header_image img", {
        duration: 2000,
        origin: "bottom",
        distance: "50px",
        opacity: 0,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".header_heading h1, .header_heading h2", {
        duration: 1200,
        origin: "top",
        distance: "50px",
        opacity: 0,
        delay: 300,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".about_image img", {
        duration: 2000,
        origin: "left",
        distance: "50px",
        opacity: 0,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".about-content", {
        duration: 1000,
        origin: "right",
        distance: "50px",
        opacity: 0,
        delay: 200,
        easing: "ease-in-out"
    });

    ScrollReveal().reveal(".contact-image", {
        duration: 1000,
        origin: "right",
        distance: "50px",
        opacity: 0,
        delay: 200,
        easing: "ease-in-out"
    });

});
