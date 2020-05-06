let logo = {
    img: '<img src="img/logo.png" alt="Rubber Duck Logo" />'
}
let icons = {
    search: '<i class="fas fa-search"></i>',
    theme: '<i class="fas fa-adjust"></i>',
    dark: '<i id="dark" class="fas fa-moon"></i>',
    light: '<i id="light" class="fas fa-sun"></i>',
    language: '<i class="fas fa-globe"></i>',
    logIn: '<i class=" fas fa-user-circle"></i>'
}
let menu = {
    main: 'Əsas Səhifə',
    about: 'Haqqında',
    tutorial: 'Dərsliklər',
    documentation: 'Dokument',
    video: 'Videolar',
    team: 'Komanda',
    contact: 'Əlaqə'
}
function navBar () {
    return  `<a href="index.htm">${logo.img}</a>` +
    '<div class="menu">' +
        '<ul>' +
            `<li><a href="index.htm">${menu.main}</a></li>` +
            `<li><a href="#about-site">${menu.about}</a></li>` +
            `<li><a href="#" class="Dropdown-menu">${menu.tutorial}</a>` +
                `<ul>` +
                    `<li><a href="#">${menu.documentation}</a></li>` +
                    `<li><a href="#">${menu.video}</a></li>` +
                `</ul>` +
            `</li>` +
            `<li><a href="team.htm" >${menu.team}</a></li>` +
            `<li><a href="contact.htm">${menu.contact}</a></li>` +
        `</ul>` +
    `</div>` +
    `<section class="navTools">` +
        `<div class="tool">` +
            `${icons.search}` +
        `</div>` +
        `<div class="tool siteMode">` +
            `${icons.theme}` +
            `<div class="mode">` +
                `${icons.dark}` +
                `${icons.light}` +
            `</div>` +
        `</div>` +
        `<div class="tool language-pack">` +
            `${icons.language}` +
            `<div class="languages">` +
                `<a href="#">AZ</a>` +
                `<a href="#">EN</a>` +
                `<a href="#">RU</a>` +
            `</div>` +
        `</div>` +
        `<div class="tool">` +
            `${icons.logIn}` +
        `</div>` +
    `</section>`
}


document.querySelector('nav').innerHTML = navBar();
