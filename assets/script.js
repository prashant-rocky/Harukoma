// ---------------- Cookie Consent ----------------
window.addEventListener('load', function () {
    if (window.cookieconsent) {
        window.cookieconsent.run({
            notice_banner_type: "simple",
            consent_type: "express",
            palette: "light",
            language: "en",
            page_load_consent_levels: ["strictly-necessary"],
            notice_banner_reject_button_hide: false,
            preferences_center_close_button_hide: false,
            page_refresh_confirmation_buttons: false,
            website_name: "Ichiran Ramen",
            website_privacy_policy_url: "https://github.com/" // replace with real URL
        });
    }
});

// Swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 2500, // time in ms (2.5 seconds per slide)
        disableOnInteraction: false, // keep autoplay after user swipes
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper2 = new Swiper(".TmySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

// menu
// ---------------- Menu Data ----------------
const menuData1 = [
    { id: 1, name: "Maguro (まぐろ – Tuna Sushi)", description: "Thick, fresh slices of tuna served on seasoned rice.", price: "¥450", image: "assets/images/product1.jpg" },
    { id: 2, name: "Sake (サーモン – Salmon Sushi)", description: "Rich, buttery salmon cut generously.", price: "¥400", image: "assets/images/product2.jfif" },
    { id: 3, name: "Hamachi (はまち – Yellowtail Sushi)", description: "Fresh, flavorful yellowtail, a local favorite.", price: "¥480", image: "assets/images/product3.png" },
    { id: 4, name: "Ebi (えび – Shrimp Sushi)", description: "Sweet and tender shrimp paired with fluffy sushi rice.", price: "¥380", image: "assets/images/product4.webp" }
];

const menuData2 = [
    { id: 5, name: "Uni (うに – Sea Urchin Sushi)", description: "Creamy, delicate, and unforgettable.", price: "¥650", image: "assets/images/product5.webp" },
    { id: 6, name: "Ikura (いくら – Salmon Roe Sushi)", description: "Bursting with flavor, served generously.", price: "¥600", image: "assets/images/product6.jfif" },
    { id: 7, name: "Anago (あなご – Sea Eel Sushi)", description: "Lightly grilled eel with sweet glaze.", price: "¥500", image: "assets/images/product7.jpg" },
    { id: 8, name: "Kani (かに – Crab Sushi)", description: "Fresh Osaka crab served in thick portions.", price: "¥550", image: "assets/images/product8.jfif" }
];

// ---------------- Render Menus ----------------
document.addEventListener("DOMContentLoaded", () => {

    // ✅ Home Page: menu1
    const menu1 = document.getElementById("menu1");
    if (menu1) {
        menuData1.forEach(menu => {
            menu1.innerHTML += createMenuItem(menu);
        });
    }

    // ✅ Home Page: menu2
    const menu2 = document.getElementById("menu2");
    if (menu2) {
        menuData2.forEach(menu => {
            menu2.innerHTML += createMenuItem(menu);
        });
    }

});


// ---------------- Helper Function ----------------
function createMenuItem(menu) {
    return `
        <div class="col-md-12 text-start py-3" key="${menu.id}">
            <div class="products d-flex">
                <div class="img px-2">
                    <img src="${menu.image}" alt="${menu.name}" height="100" width="100" class="productImg">
                </div>
                <div class="productName pt-3">
                    <h4 class="d-inline">${menu.name} .....</h4>
                    <h5 class="d-inline float-end">${menu.price}</h5>
                    <p>${menu.description}</p>
                </div>
            </div>
        </div>
    `;
}
// reservation
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = document.getElementById("reservationForm");
  const BthankYouCard = document.getElementById("BthankYouCard");

  // Hide form & show thank you card
  form.style.display = "none";
  BthankYouCard.style.display = "block";

  // After 3 sec hide thank you card & show form again
  setTimeout(() => {
    BthankYouCard.style.display = "none";
    form.style.display = "block";
    form.reset();
  }, 3000);
});
// blog
  const commentForm = document.getElementById("commentForm");
    const successMessage = document.getElementById("successMessage");

    commentForm.addEventListener("submit", function(e) {
      e.preventDefault();
      successMessage.style.display = "block";
      
      // Hide success message after 3 sec
      setTimeout(() => {
        successMessage.style.display = "none";
        commentForm.reset();
      }, 3000);
    });