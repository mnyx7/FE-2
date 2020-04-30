let footerlogo = {
    img: '<img src="img/logo.png" alt="Rubber Duck Logo" />'
}
let subject = {
    subjectOne: 'HTML',
    subjectTwo: 'CSS',
    subjectThree: 'Bootstrap',
    subjectFour: 'JavaScrpt',
    subjectFive: 'jQuery'
}
let footerMenu = {
    main: 'Əsas Səhifə',
    about: 'Haqqında',
    tutorial: 'Dərsliklər',
    team: 'Komanda',
    contact: 'Əlaqə'
}
let social = {
    facebook: '<a href="#"><i class="fab fa-facebook-f"></i></a>',
    twitter: '<a href="#"><i class="fab fa-twitter"></i></a>',
    instagram: '<a href="#"><i class="fab fa-instagram"></i></a>',
    pinterest: '<a href="#"><i class="fab fa-pinterest-p"></i></a>',
    googlePlus: '<a href="#"><i class="fab fa-google-plus-g"></i></a>',
    gitHub: '<a href="#"><i class="fab fa-github"></i></a>'
}
function footer() {
    return `<section class="footer-elements">` +
        `<div class="subject">` +
            `<ul>` +
                `<li><a href="#">${subject.subjectOne}</a></li>` +
                `<li><a href="#">${subject.subjectTwo}</a></li>` +
                `<li><a href="#">${subject.subjectThree}</a></li>` +
                `<li><a href="#">${subject.subjectFour}</a></li>` +
                `<li><a href="#">${subject.subjectFive}</a></li>` +
            `</ul>` +
       `</div>` +
        `<div class="info">` +
            `${footerlogo.img}` +
        `</div>` +
        `<div class="footerMenu">` +
            `<ul>` +
                `<li><a href="index.htm">${footerMenu.main}</a></li>` +
                `<li><a href="#about-site">${footerMenu.about}</a></li>` +
                `<li><a href="#">${footerMenu.tutorial}</a></li>` +
                `<li><a href="#">${footerMenu.team}</a></li>` +
                `<li><a href="#contact">${footerMenu.contact}</a></li>` +
            `</ul>` +
        `</div>` + 
    `</section>` +
    `<div class="subscribe">` +
        `<p>Abunə ol</p>` +
        `<form action="#" method="POST">` +
            `<input type="email" placeholder="example@gmail.com" required />` +
            `<input type="submit" class="submit" value="göndər" />` +
        `</form>` +
    `</div>` +
    `<div class="icons">` +
        `${social.facebook}` +
        `${social.twitter}` +
        `${social.instagram}` +
        `${social.pinterest}` +
        `${social.googlePlus}` +
        `${social.gitHub}` +
    `</div>` +
    `<section class="end">` +
        `<p>Copyright&copy; 2020. Rubber Duck</p>` +
        `<p>Bütün hüquqlar qorunur</p>` +
    `</section>`
}

document.querySelector('footer').innerHTML = footer();
