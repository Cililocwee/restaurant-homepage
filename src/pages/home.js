import '../styles/home.css'

const renderHome = () => {
    const content = document.querySelector('#content');

    // introduction
    const introduction = document.createElement('div');
    introduction.classList.add('introduction');
    const mainHeading = document.createElement('h1');
    mainHeading.innerText = 'Cafe Rade:';

    const blurbPara = document.createElement('div');
    blurbPara.classList.add('home-blurb')
    blurbPara.innerHTML = `<p>Cafe Rade specializes in coffee beans grown in the hills of the Vietnamese Highlands. 
    The Rade(also known as the Ede) people have spent generations cultivating coffee in the beautiful and lush forests
     of the Central Highlands. Cafe Rade brings you the result of this beautiful and storied coffee - raising tradition
      in the comfort of a relaxing and quiet atmosphere.</p><p>Sit back, relax, and enjoy the natural flavors and aromas
       of real Rade coffee.</p>`
    const workingHours = document.createElement('div');
    workingHours.classList.add('home-blurb');
    workingHours.innerHTML = `  <h3>Working Hours:</h3>
                                <p>Monday: 08:00 - 22:00</p>
                                <p>Tuesday: 08:00 - 22:00</p>
                                <p>Wednesday: 08:00 - 22:00</p>
                                <p>Thursday: 08:00 - 22:00</p>
                                <p>Friday: 08:00 - 23:00</p>
                                <p>Saturday: 10:00 - 23:00</p>
                                <p>Sunday: 10:00 - 23:00</p>`
    const location = document.createElement('div');
    location.classList.add('home-blurb');
    location.innerHTML = `<h3>Location</h3><p>233 Yjut Street</p><p>Buon Ma Thuot, Dak Lak, Vietnam</p>`

    // constructing the page
    document.body.appendChild(content);
    content.appendChild(introduction);
        introduction.appendChild(mainHeading);
        introduction.appendChild(blurbPara);
        introduction.appendChild(workingHours);
        introduction.appendChild(location);
}

export default renderHome;