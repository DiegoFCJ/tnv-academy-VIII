const buildCard = (item) => {
    return `
    <div class="card shadow">
    <img
    src="h${item.imageUrl}"
    class="card-img-top"
    alt="${item.title}"
    />
        <div class="card-body">
            <h5 class="card-title">${item.title} - ${item.price}$</h5>
            <p class="card-text">${item.description}</p>
        </div>
    </div>`;
};


const buildMenu = (menuItems, sectionName) => {
    const section = document.getElementById(sectionName);
    const sectionMenuItems = menuItems.filter((x) => x.category === sectionName);

    for(let item of sectionMenuItems){
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');

        const cardContent = buildCard(item);
        cardWrapper.innerHTML = cardContent;
        section.appendChild(cardWrapper);
    }
};


const buildPage = (menuItems) => {

}


fetch('https://my-json-server.typicode.com/DiegoFCJ/demo_fs_json/drinkCards')
.then((res) => res.json())
.then((res) => buildMenu(res, 'drinkCards'));

