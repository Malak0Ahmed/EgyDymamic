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
let mybutton = document. getElementById("scrollUp");
window.onscroll = function () { scrollFunction () };
function scrollFunction() {
    if (document. body. scrollTop > 20 || document. documentElement .scrollTop > 20) {
        mybutton.style.display = "block";
    } 
    else {
        mybutton.style.display = "none";
    }
}
function topFunction () {
document .body.scrollTop = 0;
document. documentElement.scrollTop=0;
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween:25,
    centerSlide:'true',
    fade:'true',
    grabCursor:'true',
    cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
          dynamicBullets: true,
        },
  
        breakpoints:{
          0:{slidesPerView: 1,
        },
        620:{slidesPerView: 2,
        },
        950:{slidesPerView: 3,
        },
       }});