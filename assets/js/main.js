var head = document.getElementById("head");
var link1 = document.getElementById("link");
var title = document.getElementById("title");
var head2 = document.getElementById("head2");
var link1_2 = document.getElementById("link1_2");
var title2 = document.getElementById("title2");

function menu() {
    var menu = [
        { 'name': 'home', 'url': '#' },
        { 'name': 'how_start', 'url': 'how_start.html' },
        { 'name': 'plans', 'url': '#second-section' },
        { 'name': 'login', 'url': 'login.html' },
        { 'name': 'sign_in', 'url': 'sign_in.html' },
        { 'name': 'about', 'url': '#third-section' },
        { 'name': 'settings', 'url': 'settings.html' }
    ];
    for(i in menu){
        var menuOL = document.getElementById("text_menu");
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = menu[i].url;
        a.innerHTML = menu[i].name;
        li.append(a);
        menuOL.appendChild(li);
    }
}
menu();

function showMenu() {
    document.body.classList.toggle("show-menu");
}
function back() {
    window.history.back();
}

function changeGreen() {
    var linkR2 = document.createElement("link");
    linkR2.setAttribute('rel', 'stylesheet');
    linkR2.setAttribute('type', 'text/css');
    linkR2.setAttribute('href', 'assets/css/setting_green_theme.css');
    window.localStorage.setItem('theme', 'green');
    head2.childNodes[7].replaceWith(linkR2);
    Swal.fire(
        'Tema aplicado exitosamente',
        '',
        'success'
    );
}
function changeWhite() {
    var linkR2 = document.createElement("link");
    linkR2.setAttribute('rel', 'stylesheet');
    linkR2.setAttribute('type', 'text/css');
    linkR2.setAttribute('href', 'assets/css/setting_white_theme.css');
    head2.insertBefore(linkR2, title2);
    head2.childNodes[7].replaceWith(linkR2);
    window.localStorage.setItem('theme', 'white');
}



if(!window.localStorage.getItem('theme')){
    changeWhite();
}
if (window.localStorage.getItem('theme') == 'white') {
    changeWhite();
} else if (window.localStorage.getItem('theme') == 'green') {
    changeGreen();
}