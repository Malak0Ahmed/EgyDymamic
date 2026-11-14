let valueCList = document.querySelectorAll(".numC");
let interval = 3000;

valueCList.forEach((val) => {
    let startValue = 0;
    let endValue = parseInt(val.getAttribute("data-val"));
    console.log(endValue);

    let duration = Math.floor(interval / (endValue - startValue));
    let counter = setInterval(function () {
        startValue += 3;
        val.textContent = startValue;
        if (startValue >= endValue) {
            clearInterval(counter);
        }
    }, duration);
});
let mybutton = document.getElementById("scrollUp");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menuu");

// hamburger.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// });

// document.querySelectorAll(".nav-linkk").forEach((n) => n.addEventListener("click", () => {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// })
// );

/*==================== Swiper ====================*/

// var swiper = new Swiper(".slide-content", {
//     slidesPerView: 4,
//     spaceBetween: 25,
//     // loop: true,
//     observeParents: 'true',
//     centerSlide: 'true',
//     fade: 'true',
//     grabCursor: 'true',
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         620: {
//             slidesPerView: 2,
//         },
//         950: {
//             slidesPerView: 4,
//         }
//     }
// });
// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menuu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-linkk").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
);
///===========