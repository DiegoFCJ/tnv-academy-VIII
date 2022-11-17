/** build choices on landing page */

const buildChoicesMenu = (menuItems, sectionName) => {
    const section = document.getElementById(sectionName);
    const sectionMenuItems = menuItems.filter((x) => x.category === sectionName);

    for(let item of sectionMenuItems){
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        const cardContent = buildChoicesCard(item);
        cardWrapper.innerHTML = cardContent;
        section.appendChild(cardWrapper);
    }
};

const buildChoicesCard = (item) => {
    return `
    <a 
    class="card"
    href="${item.href}"
    >
        <img src="${item.imageUrl}" alt="${item.title}" style="height: 220px;">
        <div class="card-img-overlay">
            <h5 class="card-title text-bg-light fw-bold fs-3 text-center">${item.title}</h5>
        </div>
    </a>`;
        
};





/** build drinks */
const buildDrinksMenu = (menuItems, sectionName) => {
    const section = document.getElementById(sectionName);
    const sectionMenuItems = menuItems.filter((x) => x.category === sectionName);

    for(let item of sectionMenuItems){
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        const cardContent = buildDrinksCard(item);
        cardWrapper.innerHTML = cardContent;
        section.appendChild(cardWrapper);
    }
};

const buildDrinksCard = (item) => {
    return `
    <div class="card shadow">
    <img
    src="${item.imageUrl}"
    class="card-img-top"
    alt="${item.title}"
    />
        <div class="card-body">
            <h5 class="card-title">${item.title} - ${item.price}$</h5>
            <p class="card-text">${item.description}</p>
        </div>
    </div>`;
};


/** build page */

const buildPage = (menuItems) => {
    buildDrinksMenu(menuItems, 'drinkCards');
    buildChoicesMenu(menuItems, 'choicesOnLanding');
}


/** fetching the server */

fetch('https://my-json-server.typicode.com/DiegoFCJ/pizza_fake_db/pizzaDiegoDb')
.then((res) => res.json())
.then((res) => buildPage(res));/*
.then((res) => buildDrinksMenu(menuItems, 'drinkCards'))
.then((res) => buildChoicesMenu(menuItems, 'choicesOnLanding'));*/

