import '../styles/menu.css'

const renderMenu = () => {
    const content = document.querySelector('#content');

    // introduction
    const introduction = document.createElement('div');
    introduction.classList.add('introduction');
    const mainHeading = document.createElement('h1');
    mainHeading.innerText = 'Menu';
    

    // drink menu
    const menu = document.createElement('div');
    menu.classList.add('drink-menu');

    // viet coffees
    const vietnameseCoffee = document.createElement('div');
    vietnameseCoffee.classList.add('menu-card');

    const blackCoffee = document.createElement('div');
    blackCoffee.classList.add('menu-item');
    blackCoffee.innerHTML = '<p>Black Coffee | 35 · 50</p>';
    const whiteCoffee = document.createElement('div');
    whiteCoffee.classList.add('menu-item');
    whiteCoffee.innerHTML = '<p>White Coffee | 45 · 60</p>';
    const milkCoffee = document.createElement('div');
    milkCoffee.classList.add('menu-item');
    milkCoffee.innerHTML = '<p>Black Coffee | 45 · 60</p>';


    // espresso coffees
    const espressoCoffee = document.createElement('div');
    espressoCoffee.classList.add('menu-card');

    const espresso = document.createElement('div');
    espresso.classList.add('menu-item');
    espresso.innerHTML = '<p>Espresso | 30 · 45</p>';
    const cmespresso = document.createElement('div');
    cmespresso.classList.add('menu-item');
    cmespresso.innerHTML = '<p>Condensed Milk Espresso | 40 · 55</p>';
    const americano = document.createElement('div');
    americano.classList.add('menu-item');
    americano.innerHTML = '<p>Americano | 40 · 55</p>';
    const cappucino = document.createElement('div');
    cappucino.classList.add('menu-item');
    cappucino.innerHTML = '<p>Cappucino | 30 · 45</p>';
    const latte = document.createElement('div');
    latte.classList.add('menu-item');
    latte.innerHTML = '<p>Cafe Latte | 40 · 55</p>';
    const mocha = document.createElement('div');
    mocha.classList.add('menu-item');
    mocha.innerHTML = '<p>Mocha | 45 · 60</p>';
    const caramelmacc = document.createElement('div');
    caramelmacc.classList.add('menu-item');
    caramelmacc.innerHTML = '<p>Caramel Macchiato | 45 · 60</p>';

    // specialty teas
    const specialTea = document.createElement('div');
    specialTea.classList.add('menu-card');

    const blackTea = document.createElement('div');
    blackTea.classList.add('menu-item');
    blackTea.innerHTML = '<p>Black Tea | 35</p>';
    const flavoredTea = document.createElement('div');
    flavoredTea.classList.add('menu-item');
    flavoredTea.innerHTML = '<p>Flavored Tea | 40</p>';
    const blackTeaMacc = document.createElement('div');
    blackTeaMacc.classList.add('menu-item');
    blackTeaMacc.innerHTML = '<p>Black Tea Macchiato| 45</p>';
    const raspberryMacc = document.createElement('div');
    raspberryMacc.classList.add('menu-item');
    raspberryMacc.innerHTML = '<p>Raspberry Macchiato | 45</p>';
    const peachTeaSpecial = document.createElement('div');
    peachTeaSpecial.classList.add('menu-item');
    peachTeaSpecial.innerHTML = '<p>Peach Tea Special | 55</p>';
    const matchaLatte = document.createElement('div');
    matchaLatte.classList.add('menu-item');
    matchaLatte.innerHTML = '<p>Matcha Latte | 55</p>';
    const matchaIceBlended = document.createElement('div');
    matchaIceBlended.classList.add('menu-item');
    matchaIceBlended.innerHTML = '<p>Matcha Ice Blended | 55</p>';

    const photoattribution = document.createElement('div');
    photoattribution.innerHTML = 'Photo by <a href="https://unsplash.com/@rumpf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Christina Rumpf</a> on <a href="https://unsplash.com/s/photos/coffee-beans?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    photoattribution.classList.add('photo-attribution');
    // constructing the page
    document.body.appendChild(content);
    content.appendChild(introduction);
        introduction.appendChild(mainHeading);
        introduction.appendChild(menu);
            menu.appendChild(vietnameseCoffee);
                vietnameseCoffee.appendChild(blackCoffee);
                vietnameseCoffee.appendChild(whiteCoffee);
                vietnameseCoffee.appendChild(milkCoffee);
            menu.appendChild(espressoCoffee);
                espressoCoffee.appendChild(espresso);
                espressoCoffee.appendChild(cmespresso);
                espressoCoffee.appendChild(americano);
                espressoCoffee.appendChild(cappucino);
                espressoCoffee.appendChild(latte);
                espressoCoffee.appendChild(mocha);
                espressoCoffee.appendChild(caramelmacc);
            menu.appendChild(specialTea);
                specialTea.appendChild(blackTea);
                specialTea.appendChild(flavoredTea);
                specialTea.appendChild(blackTeaMacc);
                specialTea.appendChild(raspberryMacc);
                specialTea.appendChild(peachTeaSpecial);
                specialTea.appendChild(matchaLatte);
                specialTea.appendChild(matchaIceBlended);
            menu.appendChild(photoattribution)
            }

export default renderMenu;