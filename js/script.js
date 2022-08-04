function scroll_to_element(id, event) {
    event.preventDefault();
    var element = document.getElementById(id);
    // if(window.innerWidth > 900) {

        element.scrollIntoView({ behavior: 'smooth', block: "center", inline: "nearest"});
    // } else {

    //     element.scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest"});
    // }
}

function nav_bg() {
    window.onscroll = function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var stickyWrapper = document.querySelectorAll('.sticky-wrapper');
        if(scrollTop > 50) {
            stickyWrapper.forEach(el => {
                el.classList.add('is-sticky');
            });                
            // navSpansAll.forEach(element => {
            //     element.style.backgroundColor = "#000";
            // });
        } else {
            stickyWrapper.forEach(el => {
                el.classList.remove('is-sticky');

                // navSpansAll.forEach(element => {
                //     element.style.backgroundColor = "#fff";
                // });
            });
        }
    };
}

nav_bg();


function breakpoint() {
    // Navigation Breakpoint
    var navContainer = document.querySelectorAll('.classy-nav-container');
    navContainer.forEach(element => {            
        if(window.innerWidth < 900 ) {
            console.log(element);
            if(element.classList.contains('breakpoint-off')) {
                element.classList.add('breakpoint-on');
            }
        }
    });
    var navbarToggler = document.querySelectorAll('.navbarToggler');
    var classyMenu = document.querySelectorAll('.classy-menu');
    var classycloseIcon = document.querySelectorAll('.classycloseIcon');
    navbarToggler.forEach(element => {  
        element.addEventListener('click', function(e) {
            console.log(element);
            if(!element.classList.contains('active')) {
                element.classList.add('active');
                classyMenu.forEach(element => {  
                    element.classList.add('menu-on');
                });
            } else {
                element.classList.remove('active');
                classyMenu.forEach(element => {  
                    element.classList.remove('menu-on');
                });
            }
        })
    });
    classycloseIcon.forEach(element => {  
        element.addEventListener('click', function(e) {
            navbarToggler.forEach(element => {  
                element.classList.remove('active');
            });
            classyMenu.forEach(element => {  
                element.classList.remove('menu-on');
            });
        })
    });
}
breakpoint();

$(window).resize(function() {
    breakpoint();
});

// Audio
$(function() {
    $('audio').audioPlayer();
});