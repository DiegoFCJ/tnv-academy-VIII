const buildCard = (item) => {
  return `
    <div class="card shadow">
        <img
            src="${item.imageUrl}"
            class="card-img-top"
            alt="${item.title}"
        />
        <div class="card-body">
            <h5 class="card-title"><a href="pages/detail.html?id=${item.id}">${item.title}</a> - ${item.price}€</h5>
            <p class="card-text">
                ${item.description}
            </p>
        </div>
    </div>`;
};

const buildSection = (menuItems, sectionName) => {
  const section = document.getElementById(sectionName);
  const sectionMenuItems = menuItems.filter((x) => x.category === sectionName);

  for (let item of sectionMenuItems) {
    const cardWrapper = document.createElement("div");
    cardWrapper.classList.add("col-12", "col-sm-6", "col-md-4", "py-2");

    const cardContent = buildCard(item);

    cardWrapper.innerHTML = cardContent;

    section.appendChild(cardWrapper);
  }
};

const buildPage = (piatti) => {
    buildSection(piatti, 'antipasti');
    buildSection(piatti, 'primi');
    buildSection(piatti, 'dolci');
}

const showError = () => {
  const errorsElement = [...document.querySelectorAll('.tnv-error')];
  errorsElement.forEach(x => x.style.display = 'inline');
}

fetch("https://my-json-server.typicode.com/michelefenu/tnv-academy-VIII/piatti")
  .then((response) => response.json())
  .then((response) => buildPage(response))
  .catch((err) => showError());
