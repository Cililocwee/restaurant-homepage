import renderHome from "../pages/home";
import renderAbout from "../pages/about";
import renderMenu from "../pages/menu";

const deconstructPage = () => {
    const currentdisplay = document.querySelector('.introduction');
    currentdisplay.remove(); 
}
const renderNav = () =>{

    // make a navbar    
    const navbar = document.createElement('div');
    navbar.classList.add('navigationbar')
    const homebtn = document.createElement('button');
    homebtn.innerText = 'Home';
    const aboutbtn = document.createElement('button');
    aboutbtn.innerText = 'About';
    const menubtn = document.createElement('button');
    menubtn.innerText = 'Menu';

    content.appendChild(navbar);
    navbar.appendChild(homebtn);
    navbar.appendChild(menubtn);
    navbar.appendChild(aboutbtn);


    homebtn.addEventListener('click', () => {
        deconstructPage();
        renderHome();
    })
    aboutbtn.addEventListener('click', () => {
        deconstructPage();
        renderAbout();
    })
    menubtn.addEventListener('click', () => {
        deconstructPage();
        renderMenu();
    })
}

export default renderNav;