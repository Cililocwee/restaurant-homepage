import '../styles/about.css'

const renderAbout = () => {
    const content = document.querySelector('#content');

    // introduction
    const introduction = document.createElement('div');
    introduction.classList.add('introduction');
    const mainHeading = document.createElement('h1');
    mainHeading.innerText = 'About the Rade People';
    
    const blurbPara1 = document.createElement('p');
    blurbPara1.innerHTML = `<p>The Rade people (also known as Ede) are an ethnic group found primarily in the central 
    highlands of Vietnam. They speak Rade, which is a language closely related to neighboring tribes' K'Ho, Chru, and Jarai. 
    While chiefly located in the Central Highlands, there are groups of Rade across the border in neighboring Cambodia. </p>
    <p>The Rade people are a matrilineal people -- the family unit is generally lead by a matriarch, or strong older female family
    member. Men are married off into other families -- once married, men are expected to live with, and take care of, the wife's 
    family and household. They are stricken from their own family records and written into the wife's family registry. A controlled 
    list of family names, transfers, and members is held by the village elder and must be consulted before a marriage is sanctioned.</p>`
 
    // constructing the page
    document.body.appendChild(content);
    content.appendChild(introduction);
        introduction.appendChild(mainHeading);
        introduction.appendChild(blurbPara1);
}

export default renderAbout;