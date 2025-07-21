let navbar = document.querySelector('.navigation-wrap');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        navbar.classList.add('scroll-on');
    }
    else {
        navbar.classList.remove('scroll-on');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    function startCounter(id, start, end) {
        let obj = document.querySelector(id);
        let timer = setInterval( () => {
            start = start + 10;
            obj.innerText = start;
            if (obj.innerText == end) {
                clearInterval(timer);
            }
        }, 0);
    }

    startCounter('#count1', 0, 1440);
    startCounter('#count2', 0, 2020);
    startCounter('#count3', 0, 1580);
    startCounter('#count4', 0, 1880);
});

let navLink = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navLink.forEach(function(link) {
    link.addEventListener('click', () => {
        navCollapse.classList.remove('show');
    });
});