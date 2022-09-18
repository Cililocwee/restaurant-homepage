import renderHome from "./pages/home.js";
import renderNav from "./functions/navbar.js"


const content = document.querySelector('#content');

// header
const header = document.createElement('div');
header.classList.add('header');
content.appendChild(header);
const photoattribution = document.createElement('div');
photoattribution.classList.add('header-attribution');
photoattribution.innerHTML = 'Photo by <a href="https://unsplash.com/@daanelise?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">daan evers</a> on <a href="https://unsplash.com/s/photos/cafe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
header.appendChild(photoattribution);


renderHome();
renderNav();


