let homeLink = document.querySelector('header nav a[href="#home"]');

// Add an event listener to the "Home" link
homeLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior (scrolling to #home)

    // Scroll to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Optional: smooth scrolling behavior
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id+ ']').classList.add('active');
            });
            // sec.classList.add('show-animate');
        }
        else{
            // sec.classList.remove('show-animate');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}